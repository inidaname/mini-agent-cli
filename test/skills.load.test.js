import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

import { loadSkills } from '../src/skills/load.js';

test('loads skill directories from .skills folder', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'agent-'));
  const skillsDir = path.join(root, '.skills');

  fs.mkdirSync(skillsDir);
  fs.mkdirSync(path.join(skillsDir, 'skill-one'));
  fs.mkdirSync(path.join(skillsDir, 'skill-two'));

  const skills = loadSkills(skillsDir);

  assert.equal(skills.length, 2);
  assert.deepEqual(
    skills.map(s => s.name).sort(),
    [ 'skill-one', 'skill-two' ]
  );
});

test('returns empty array if .skills folder is missing', () => {
  const skills = loadSkills('/does-not-exist');
  assert.deepEqual(skills, []);
});
