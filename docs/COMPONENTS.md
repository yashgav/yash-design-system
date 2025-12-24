# Components

This document explains the components domain: where components live, how to add a component, and the expectations (accessibility, tests, stories).

## Structure

- `packages/core/src/components/` — each component in its own folder
    - `component-name/`
        - `component.ts` — component implementation (Lit + TypeScript)
        - `component.test.ts` — unit + a11y tests (web-test-runner + axe)
        - `component.stories.ts` — Storybook stories and docs

## Adding a new component

1. Create folder `packages/core/src/components/my-component`
2. Implement the component with Lit and export any typings
3. Add a Storybook story in the same folder
4. Add unit tests including accessibility tests using the shared `runAxe` helper
5. Export the component from `packages/core/src/index.ts`

## Conventions

- Use semantic HTML and prefer native elements.
- Every interactive component must be keyboard-operable and include `:focus-visible` styles.
- Use design tokens for colors, spacing, typography.
- Favor composition over monolithic components.

## Testing & Docs

- Use Storybook for visual docs and to manually test interactive states.
- Use `@web/test-runner` for component tests and `axe-core` for automated a11y checks.
