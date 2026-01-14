import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

export async function callClaude({ prompt, skills }) {
  const tools = skills.map(skill => ({
    name: skill.name,
    description: skill.description,
    input_schema: {
      type: 'object',
      properties: {
        input: {
          type: 'string',
          description: 'Input provided by the user'
        }
      },
      required: [ 'input' ]
    }
  }));

  const response = await client.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: prompt
      }
    ],
    tools
  });

  return response;
}
