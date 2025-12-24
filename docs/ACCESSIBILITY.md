# Accessibility

Accessibility guidance, testing, and checklist for component authors.

## Principles

- Always use semantic HTML first
- Ensure keyboard operability
- Provide visible focus states
- Provide ARIA only where necessary
- Ensure color contrast meets WCAG 2.1 AA

## Local testing

- Run component unit tests which include axe-core checks:

```bash
npm test
```

- In Storybook, use the a11y addon and manual keyboard/screen reader testing.

## PR checklist for components

- [ ] Keyboard navigable
- [ ] Focus states present and visible
- [ ] aria-\* attributes used where semantic HTML cannot solve accessibility
- [ ] Axe results: 0 violations for wcag2a/wcag2aa
- [ ] Contrast check pass

## Button-specific guidance

- **Accessible name:** The button’s accessible name comes from its text content (slot). If you render only an icon, you must provide an `aria-label` describing the action.
- **Native semantics:** Do not add `role="button"` — use the native `<button>` element for correct semantics and activation behavior.
- **Keyboard interaction:** Ensure Space/Enter activate when enabled and do nothing when disabled. Verify across Chromium, Firefox, Safari.
- **Focus visibility:** Use the provided focus tokens (`--yash-focus-ring-color`, `--yash-focus-ring-width`) to ensure visible focus. Avoid removing outlines unless you provide an equally visible box-shadow ring.
- **Event composition:** Native `click` events on the internal button are composed and bubble to the host. Host-level listeners should receive activation events without special wiring.
