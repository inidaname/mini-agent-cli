import fs from 'node:fs';
import path from 'node:path';
import { loadSkills } from './load.js';
import { parseSkill } from './parse.js';

export function getAllSkills(skillsDir) {
  const dirs = loadSkills(skillsDir);

  return dirs.map(dir => {
    const skillFile = path.join(dir.path, 'SKILL.md');

    if (!fs.existsSync(skillFile)) {
      return null;
    }

    const parsed = parseSkill(skillFile);

    return {
      ...parsed,
      dir: dir.path
    };
  }).filter(Boolean);
}
