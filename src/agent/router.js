import { matchSkills } from '../skills/match.js';

export function routePrompt(prompt, skills) {
  return matchSkills(prompt, skills);
}
