# Setup

This guide helps new developers get the repository running locally.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ (or pnpm/yarn if you prefer; adjust commands)
- Git
- Recommended: VS Code with the suggested extensions (Prettier, ESLint)

## Install

```bash
# From the repo root
npm install
```

## Useful commands

- `npm run fix:all` — format and auto-fix lintable issues across the repo
- `npm run lint` — run ESLint checks
- `npm run format` — run Prettier formatting (root)
- `npm run test` — run tests (web-test-runner)
- `npm run storybook` — run Storybook
- `npm run build -w yash-design-system` — build the core package

## VS Code settings

The repo includes `.vscode/settings.json` with recommended settings. Ensure `editor.defaultFormatter` is set to Prettier and `editor.tabSize` matches `tabWidth` in `.prettierrc.cjs`.
