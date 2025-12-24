# Yash Design System — Design Tokens

CSS-based design tokens for color, typography, spacing, radii, elevation, and motion. Tokens are defined as CSS custom properties and are fully overrideable at runtime.

## Token Architecture

- **Base tokens**: Raw scales, stable naming, never theme-specific.
    - Colors: `--yash-color-neutral-700`, `--yash-color-blue-600`
    - Typography: `--yash-font-size-16`, `--yash-font-weight-semibold`
    - Spacing: `--yash-spacing-16`
    - Radius: `--yash-radius-8`
    - Elevation: `--yash-shadow-3`
    - Motion: `--yash-motion-duration-base`, `--yash-motion-easing-standard`
- **Semantic tokens**: Roles mapped to base values, change per theme.
    - `--yash-color-surface`, `--yash-color-on-surface`
    - `--yash-color-primary`, `--yash-color-on-primary`
    - `--yash-color-success`, `--yash-color-on-success` (etc.)

## Files

- `styles/tokens.css`: Base + semantic defaults
- `styles/themes/light.css`: Light theme overrides (semantic only)
- `styles/themes/dark.css`: Dark theme overrides (semantic only) + `prefers-color-scheme`

## Usage

Import tokens in your app. The CSS files in `styles/` are the canonical source of truth for
design tokens. Consumers should include these CSS files (via `<link>` or bundler import)
instead of relying on any runtime JS injection. This ensures consistent SSR and avoids
duplicate token definitions.

```html
<!-- Global tokens -->
<link rel="stylesheet" href="/node_modules/@yash-design-system/tokens/styles/tokens.css" />

<!-- Light theme (explicit) -->
<link rel="stylesheet" href="/node_modules/@yash-design-system/tokens/styles/themes/light.css" />

<!-- Or dark theme (explicit) -->
<!-- <link rel="stylesheet" href="/node_modules/@yash-design-system/tokens/styles/themes/dark.css" /> -->
```

With bundlers, import in your entry file:

```ts
import '@yash-design-system/tokens/styles/tokens.css';
import '@yash-design-system/tokens/styles/themes/light.css';
// or: import '@yash-design-system/tokens/styles/themes/dark.css';
```

### Apply Themes

- **Explicit**: Add `.yash-theme-light` or `.yash-theme-dark` to `html` or a container.
- **Attribute**: Use `[data-theme="light"]` or `[data-theme="dark"]`.
- **Automatic**: Dark tokens auto-apply for users with `prefers-color-scheme: dark`.

```html
<html class="yash-theme-light">
    <!-- tokens cascade to all components, including Shadow DOM hosts -->
</html>
```

### Shadow DOM Compatibility

Web Components read tokens via `var(...)` from the host element. Defining tokens on `:root`, `html`, or any ancestor propagates through the host boundaries.

Example in a component stylesheet:

```css
:host {
    color: var(--yash-color-on-surface);
    background: var(--yash-color-surface);
    border-radius: var(--yash-radius-8);
    box-shadow: var(--yash-shadow-2);
    transition: background var(--yash-motion-duration-base) var(--yash-motion-easing-standard);
}
```

### Overriding Tokens (Runtime)

Consumers can override semantic tokens to theme their app.

```css
/* Global override */
:root {
    --yash-color-primary: #0062ff; /* custom brand blue; still AA on white */
    --yash-radius-8: 0.75rem; /* larger rounding globally */
}

/* Per-container override */
.product-area {
    --yash-color-surface: #ffffff;
    --yash-color-on-surface: #161616;
}
```

### Accessibility Notes

- Primary/action colors selected to meet WCAG 2.1 AA contrast with their `on-*` counterparts.
- Use `--yash-focus-ring-*` tokens for consistent visible focus.
- Motion tokens respect `prefers-reduced-motion` automatically.

## Naming Convention

- Prefix: `--yash-`
- Base scale: `--yash-{category}-{value}`
- Semantic role: `--yash-color-{role}` and `--yash-color-on-{role}` pairs
- Spacing/radii use numeric scales aligned to 8px grid.

## Example: Full Theme Switch Without JavaScript

```html
<link rel="stylesheet" href="/node_modules/@yash-design-system/tokens/styles/tokens.css" />
<link rel="stylesheet" href="/node_modules/@yash-design-system/tokens/styles/themes/light.css" />

<!-- Switch to dark via attribute -->
<body data-theme="dark">
    <my-app></my-app>
</body>
```

## License

MIT
