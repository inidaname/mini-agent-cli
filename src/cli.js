import path from 'node:path';
import { getAllSkills } from './skills/index.js';
import { routePrompt } from './agent/router.js';
import { runAgent } from './agent/loop.js';

const prompt = process.argv.slice(2).join(' ').trim();
if (!prompt) {
  console.error("Error: Please provide a prompt.");
  console.log('Usage: npm start -- "your prompt here"');
  process.exit(1);
}

const skillsDir = path.join(process.cwd(), '.skills');
const allSkills = getAllSkills(skillsDir);
const matchedSkills = routePrompt(prompt, allSkills);

const result = await runAgent({
  prompt,
  skills: matchedSkills
});


if (result?.output) {
  console.log(`\n[CLAUDE]: ${result.output}`);
  process.exit(0);
}

if (result.type === "tool") {
  console.log(`\n[Agent]: Using skill "${result.name}"...`);
  console.log(`\n${result.input.input}`);
  process.exit(0);
}

console.log(result);
