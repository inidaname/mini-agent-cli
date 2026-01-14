import test from 'node:test';
import assert from 'node:assert/strict';

import { matchSkills } from '../src/skills/match.js';

const skills = [
  {
    name: 'changelog-generator',
    description: 'Generates a changelog from git commits'
  },
  {
    name: 'weather-checker',
    description: 'Returns the weather for a city'
  }
];

test('matches relevant skill based on prompt', () => {
  const matched = matchSkills(
    'generate a changelog',
    skills
  );

  assert.equal(matched.length, 1);
  assert.equal(matched[ 0 ].name, 'changelog-generator');
});

test('does not match irrelevant skills', () => {
  const matched = matchSkills(
    'what is the weather today',
    skills
  );

  assert.equal(matched.length, 1);
  assert.equal(matched[ 0 ].name, 'weather-checker');
});

test('returns empty array if no skills match', () => {
  const matched = matchSkills(
    'tell me a joke',
    skills
  );

  assert.equal(matched.length, 0);
});
