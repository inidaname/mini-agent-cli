import { callClaude } from './claude.js';
import { interpretClaudeResponse } from './interpret.js';

export async function runAgent({ prompt, skills }) {
  const response = await callClaude({ prompt, skills });
  return interpretClaudeResponse(response);
}
