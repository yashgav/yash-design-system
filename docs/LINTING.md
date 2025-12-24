# Linting & Formatting

This project uses ESLint + Prettier to keep the codebase consistent, safe, and accessible.

## Why linting exists

- Enforce code quality and prevent common bugs
- Catch Lit/Web Component anti-patterns early
- Surface accessibility problems where possible
- Provide a consistent code style to avoid bikeshedding

## How to use

Install dependencies (from repo root):

```bash
npm install
```

Run lint checks:

```bash
npm run lint
```

Fix issues automatically (where possible):

```bash
npm run lint:fix
npm run format
```

## VS Code

We recommend installing the Prettier and ESLint extensions. The included `.vscode/settings.json` configures formatting on save and sets Prettier as the default formatter.

## Notes on accessibility linting

Linting can catch obvious ARIA issues and invalid attributes, but automated linting cannot replace runtime and manual accessibility testing; use axe-core and manual testing as described in `docs/ACCESSIBILITY.md`.

# Linting & Formatting

This project uses ESLint + Prettier to keep the codebase consistent, safe, and accessible.

## Why linting exists

- Enforce code quality and prevent common bugs
- Catch Lit/Web Component anti-patterns early
- Surface accessibility problems where possible
- Provide a consistent code style to avoid bikeshedding

## How to use

Install dependencies (from repo root):

```bash
npm install
```

Run lint checks:

```bash
npm run lint
```

Fix issues automatically (where possible):

```bash
npm run lint:fix
npm run format
```

## VS Code

We recommend installing these extensions (repo suggestions are provided in `.vscode/extensions.json`):

- Prettier - Code formatter
- ESLint

The included `.vscode/settings.json` enables `formatOnSave` and hooks Prettier as the default formatter.

## Notes on accessibility linting

ESLint helps catch obvious ARIA issues and invalid attributes, but automated linting cannot replace runtime accessibility testing; use axe-core and manual testing for full coverage.

# Linting & Formatting

This project uses ESLint + Prettier to keep the codebase consistent, safe, and accessible.

## Why linting exists

- Enforce code quality and prevent common bugs
- Catch Lit/Web Component anti-patterns early
- Surface accessibility problems where possible
- Provide a consistent code style to avoid bikeshedding

## How to use

Install dependencies (from repo root):

```bash
npm install
```

Run lint checks:

```bash
npm run lint
```

Fix issues automatically (where possible):

```bash
// Linting documentation removed.
npm run format
```
