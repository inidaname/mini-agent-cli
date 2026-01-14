function tokenize(text) {
  return text
    .toLowerCase()
    .split(/\W+/)
    .filter(word => word.length > 3);
}

export function matchSkills(prompt, skills) {
  const promptTokens = tokenize(prompt);

  return skills.filter(skill => {
    const skillTokens = tokenize(
      `${skill.name} ${skill.description}`
    );

    return skillTokens.some(token =>
      promptTokens.includes(token)
    );
  });
}
