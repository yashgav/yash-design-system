# Testing

This repository uses `@web/test-runner` for unit tests and `axe-core` for accessibility audits.

## Run tests

- From repo root:

```bash
npm test
```

## Watch mode

```bash
npm run test:watch
```

## Test authoring

- Place tests next to components under `packages/core/src/components/<component>/` with `.test.ts` suffix.
- Use the shared accessibility helper `packages/core/test/a11y-helpers.ts`.
