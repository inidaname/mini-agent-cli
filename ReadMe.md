# Mini Agent CLI (Node.js)

This project is a minimal Node.js command-line coding agent that implements the **Open Agent Skills** specification. It uses **Claude 4.5 Sonnet** via Anthropic’s API to discover, match, and execute skills dynamically.

## Project Structure

The project is modularized to separate concerns between skill management, LLM orchestration, and the CLI interface:

```text
.
├── src/
│   ├── cli.js                # CLI Entry point & terminal output formatting
│   ├── agent/
│   │   ├── claude.js         # Anthropic SDK wrapper & system prompt config
│   │   ├── loop.js           # The orchestrator (Match -> Call -> Interpret)
│   │   └── interpret.js      # Handles 'text' vs 'tool_use' response logic
│   └── skills/
│       ├── load.js           # FS discovery of .skills/ directory
│       ├── parse.js          # SKILL.md parsing logic
│       ├── match.js          # Local heuristic matching (Prompt <-> Skill)
│       └── index.js          # Skills aggregation
├── .skills/                  # Local skills directory
│   └── changelog-generator/
│       └── SKILL.md
├── test/
│   └── ...                   # Node built-in tests
└── package.json
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Set environment variable

Ensure you have an Anthropic API key.

```bash
export ANTHROPIC_API_KEY=your_api_key_here
```

## Running the Demo

### Example 1: Triggering a Skill

When you provide commit data, the agent matches the `changelog-generator` skill and constructs a tool call.

```bash
npm start -- "Generate a changelog from these commits: 'feat: add login', 'fix: bug in logout'"
```

### Example 2: General Conversation (No Skill)

If the prompt is unrelated, the agent skips skill-loading and responds with standard text.

```bash
npm start -- "What is the capital of France?"
```

---

## Tests

Tests use **Node’s built-in test runner**.

Run all tests:

```bash
npm test
```

Covered areas:

- Skill discovery
- Skill parsing
- Skill matching logic

## Requirements

- Node.js 20+
- Anthropic API Key (Claude 4.5 Sonnet)
