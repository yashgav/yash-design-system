# Design Tokens

Design tokens are provided as CSS custom properties in `packages/tokens/styles/` and consumed by components in `packages/core`.

## Files

- `packages/tokens/styles/tokens.css` — base tokens (colors, spacing, typography)
- `packages/tokens/styles/themes/light.css` — light theme overrides
- `packages/tokens/styles/themes/dark.css` — dark theme overrides

## Usage

Import tokens (global):

```css
@import '@yash-design-system/tokens/styles/tokens.css';
@import '@yash-design-system/tokens/styles/themes/light.css';
```

Or include them at runtime by adding them to the document head.

## Publishing

- Tokens are static files. Package `packages/tokens` contains only `styles/` and a `package.json` with `files` configured to publish the tokens.

## Best Practices

- Use semantic tokens (`--yash-color-primary`) in components, not base scales directly.
- Provide fallbacks in components for token absence.
