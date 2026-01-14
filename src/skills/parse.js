import fs from 'node:fs';

export function parseSkill(skillFilePath) {
  const content = fs.readFileSync(skillFilePath, 'utf8');
  const lines = content.split('\n').map(l => l.trim());

  let name = '';
  let description = '';

  for (let i = 0; i < lines.length; i++) {
    if (lines[ i ].startsWith('name: ')) {
      name = lines[ i ].slice(5).trim();

      for (let j = i + 1; j < lines.length; j++) {
        if (lines[ j ]) {
          description = lines[ j ];
          break;
        }
      }
      break;
    }
  }

  return { name, description };
}
