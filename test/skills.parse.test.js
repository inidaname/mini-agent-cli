import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';

import { parseSkill } from '../src/skills/parse.js';

const skillPath = path.resolve(
  'test/fixtures/.skills/changelog-generator/SKILL.md'
);

test('parses skill name from SKILL.md', () => {
  const skill = parseSkill(skillPath);

  assert.equal(skill.name, 'changelog-generator');
});
