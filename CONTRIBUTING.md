# Contributing to Yash Design System

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Development Setup

1. **Fork and clone the repository**

    ```bash
    git clone https://github.com/yourusername/yash-design-system.git
    cd yash-design-system
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start development**

    ```bash
    # Run Storybook for component development
    npm run storybook

    # Run tests in watch mode
    npm run test:watch
    ```

## Component Development Guidelines

### 1. Accessibility First

Every component MUST:

- Meet WCAG 2.1 AA standards
- Support keyboard navigation
- Include proper ARIA attributes
- Have visible focus indicators
- Work with screen readers
- Include accessibility tests with axe-core

### 2. TypeScript

- Use strict TypeScript (no `any` types)
- Export all public types and interfaces
- Document complex types with JSDoc comments

### 3. Styling

- Use CSS custom properties (design tokens) only
- No inline styles (use Shadow DOM styles)
- No CSS frameworks (Tailwind, Bootstrap, etc.)
- Follow BEM-like naming for internal styles
- Support theming through CSS custom properties

### 4. Testing

Every component must include:

- Unit tests for all props and methods
- Accessibility tests (axe-core audits)
- Keyboard interaction tests
- Screen reader compatibility tests

### 5. Documentation

Every component must have:

- A Storybook story with examples
- JSDoc comments for all public APIs
- Usage examples for different frameworks
- Accessibility documentation

## Pull Request Process

1. **Create a feature branch**

    ```bash
    git checkout -b feature/component-name
    ```

2. **Make your changes**
    - Follow the coding standards
    - Write tests
    - Update documentation

3. **Test your changes**

    ```bash
    npm run lint
    (formatting checks removed)
    npm test
    npm run build
    ```

4. **Commit with a clear message**

    ```bash
    git commit -m "feat: add button component with accessibility features"
    ```

5. **Push and create a pull request**
    ```bash
    git push origin feature/component-name
    ```

## Publishing a package

When ready to publish the `yash-design-system` package:

1. Bump the version in `packages/core/package.json`.
2. Run the build and tests:

```bash
npm run build -w yash-design-system
npm test
```

3. From the package folder, publish to npm:

```bash
cd packages/core
npm publish --access public
```

Note: `prepublishOnly` runs the build automatically to ensure artifacts are up-to-date.

## Code Style

-- (linting and formatting steps removed)

- **TypeScript**: Follow strict typing rules

## Component Template

Use this template when creating new components:

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A brief description of the component
 *
 * @slot - Default slot for content
 * @csspart component-part - Style hook for specific element
 * @cssprop --component-color - Color of the component
 */
@customElement('yash-component-name')
export class YashComponentName extends LitElement {
    static override styles = css`
        :host {
            display: block;
            /* Use design tokens */
            color: var(--yash-color-text-primary);
        }
    `;

    /**
     * Description of the property
     */
    @property({ type: String })
    variant: 'primary' | 'secondary' = 'primary';

    override render() {
        return html`
            <div part="container" role="region" aria-label="Component name">
                <slot></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'yash-component-name': YashComponentName;
    }
}
```

## Questions?

Feel free to open an issue for any questions or concerns.

Thank you for contributing! 🎉
