export function interpretClaudeResponse(response) {
  const [ block ] = response.content;

  if (block.type === 'tool_use') {
    return {
      type: 'tool',
      name: block.name,
      input: block.input
    };
  }

  if (block.type === 'text') {
    return {
      type: 'text',
      output: block.text
    };
  }

  return {
    type: 'unknown',
    raw: block
  };
}
