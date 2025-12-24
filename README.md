# Yash Design System

A modern, accessible, framework-agnostic Web Component library built with **Lit** and **TypeScript**.

## 🎯 Vision

This design system is built on the foundation of **web standards** and **accessibility**. Our goal is to provide a collection of high-quality, performant, and accessible UI components that work seamlessly across all modern frameworks (React, Vue, Angular, Svelte) or with no framework at all.

### Core Principles

- **Standards-First**: Built on native Web Components (Custom Elements + Shadow DOM)
- **Accessibility-First**: WCAG 2.1 AA compliance is not optional—it's the default
- **Framework-Agnostic**: Works everywhere JavaScript runs
- **Performance-Optimized**: Tree-shakeable ES modules, minimal runtime overhead
- **Developer Experience**: Strongly typed with TypeScript, well-documented, easy to customize

---

## 🧰 Tech Stack

This library is built with modern, battle-tested tools:

| Technology                | Purpose                  | Why?                                                                    |
| ------------------------- | ------------------------ | ----------------------------------------------------------------------- |
| **TypeScript**            | Type safety              | Catch errors at compile time, better IDE support, self-documenting code |
| **Lit**                   | Web Components framework | Minimal abstraction over native APIs, tiny runtime (~5KB), excellent DX |
| **Vite**                  | Build tool               | Fast dev server, optimized production builds, ES modules native         |
| **Storybook**             | Component documentation  | Interactive component explorer with live examples                       |
| **@web/test-runner**      | Testing framework        | Fast, modern test runner for Web Components                             |
| **axe-core**              | Accessibility testing    | Industry-standard a11y auditing                                         |
| (Linting configs removed) |

---

## ♿ Accessibility-First Philosophy

Accessibility is **not an afterthought**—it's a core requirement for every component in this library.

### Our Accessibility Commitments

1. **WCAG 2.1 AA Compliance**: Every component meets or exceeds WCAG 2.1 Level AA standards
2. **Keyboard Navigation**: Full keyboard support with logical tab order and focus management
3. **Screen Reader Support**: Proper ARIA attributes, roles, and live regions
4. **Color Contrast**: All text meets minimum contrast ratios (4.5:1 for normal text, 3:1 for large text)
5. **Focus Indicators**: Visible focus states for all interactive elements
6. **Semantic HTML**: Use native HTML elements wherever possible
7. **Testing**: Automated a11y testing with axe-core in every component

### Accessibility Testing

Every component includes:

- **Unit tests** with @web/test-runner
- **Accessibility audits** with axe-core
- **Manual keyboard testing**
- **Screen reader testing** (NVDA, JAWS, VoiceOver)
- **Storybook a11y addon** for visual regression testing

---

## 📦 Installation

```bash
npm install yash-design-system
```

Or with pnpm:

```bash
pnpm add yash-design-system
```

---

## 🚀 Usage

### Vanilla JavaScript / HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <script type="module">
            // Import individual components for tree-shaking
            import 'yash-design-system/components/button';
        </script>
    </head>
    <body>
        <!-- Use the component -->
        <yash-button variant="primary">Click me</yash-button>
    </body>
</html>
```

### React

```tsx
import 'yash-design-system/components/button';

function App() {
    return (
        <div>
            {/* Web Components work seamlessly in React */}
            <yash-button variant="primary" onClick={() => console.log('clicked')}>
                Click me
            </yash-button>
        </div>
    );
}
```

### Vue

```vue
<template>
    <!-- Web Components work natively in Vue -->
    <yash-button variant="primary" @click="handleClick"> Click me </yash-button>
</template>

<script setup>
import 'yash-design-system/components/button';

const handleClick = () => console.log('clicked');
</script>
```

### Angular

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import 'yash-design-system/components/button';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

```html
<!-- app.component.html -->
<yash-button variant="primary" (click)="handleClick()"> Click me </yash-button>
```

---

## 🎨 Styling & Theming

All components use **CSS Custom Properties** (design tokens) for styling. No CSS frameworks are bundled—just plain, customizable CSS.

### Design Tokens

```css
:root {
    /* Colors */
    --yash-color-primary: #0066cc;
    --yash-color-secondary: #6c757d;
    --yash-color-success: #28a745;
    --yash-color-danger: #dc3545;

    /* Typography */
    --yash-font-family: system-ui, -apple-system, sans-serif;
    --yash-font-size-base: 16px;

    /* Spacing */
    --yash-spacing-xs: 0.25rem;
    --yash-spacing-sm: 0.5rem;
    --yash-spacing-md: 1rem;
    --yash-spacing-lg: 1.5rem;

    /* Border radius */
    --yash-radius-sm: 4px;
    --yash-radius-md: 8px;

    /* Shadows */
    --yash-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --yash-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### Customizing Components

Override CSS custom properties to theme your application:

```css
/* Global theme customization */
:root {
    --yash-color-primary: #ff6b6b;
    --yash-font-family: 'Inter', sans-serif;
}

/* Component-specific customization */
yash-button {
    --button-padding: 12px 24px;
    --button-border-radius: 12px;
}
```

---

## 🏗️ Project Structure

```

```

yash-design-system/
├── packages/
│ └── core/
│ ├── src/
│ │ ├── components/ # Web Components (to be added)
│ │ ├── tokens/ # Design tokens (CSS custom properties)
│ │ ├── utils/ # Shared utilities and helpers
│ │ └── index.ts # Main entry point
│ ├── test/ # Test utilities and fixtures
│ ├── package.json # Publishable package (npm)
│ ├── tsconfig.json # TypeScript config for the package
│ └── vite.config.ts # Library build config
├── .storybook/ # Storybook configuration (root)
├── web-test-runner.config.js # Test runner configuration (root)
├── package.json # Root (workspaces) config
├── tsconfig.json # Root TS project refs
├── (linting configs removed)

````

---

## 🛠️ Development

### Setup

```bash
# Install dependencies
npm install

# Start development server (Vite)
# Start Storybook (recommended for development)
npm run storybook
npm run storybook
````

### Building

```bash
# Build the library for production
# Build the library package
npm run build -w yash-design-system
```

This generates:

- **ES modules** in `dist/` for tree-shaking
- **UMD bundle** for legacy environments
- **TypeScript declarations** for type safety

### Testing

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

<!-- Linting and formatting removed -->

---

# Yash Design System

Comprehensive developer documentation and onboarding for the Yash Design System monorepo.

This repository provides a small, accessible Web Components library built with Lit and TypeScript, plus a standalone tokens package for CSS custom properties.

## Quick Links

- Setup: `docs/SETUP.md`
- Components guide: `docs/COMPONENTS.md`
- Design tokens: `docs/TOKENS.md`
- Accessibility: `docs/ACCESSIBILITY.md`
- Testing: `docs/TESTING.md`
- Linting & formatting: `docs/LINTING.md`

---

## Getting Started (short)

1. Install dependencies from the repo root:

```bash
npm install
```

2. Start Storybook (recommended for exploring components):

```bash
npm run storybook
```

3. Run the all-in-one fixer (formats + lint fixes):

```bash
npm run fix:all
```

4. Build core package:

```bash
npm run build -w yash-design-system
```

---

For a full developer onboarding and per-domain docs, see the `docs/` folder. The rest of this README is intentionally brief — the `docs/` files contain detailed, role-specific instructions and checklists.
