import fs from 'node:fs';
import path from 'node:path';

export function loadSkills(skillsDir) {
  try {
    const entries = fs.readdirSync(skillsDir, { withFileTypes: true });

    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => ({
        name: entry.name,
        path: path.join(skillsDir, entry.name)
      }));
  } catch {
    return [];
  }
}
