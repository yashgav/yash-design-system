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
