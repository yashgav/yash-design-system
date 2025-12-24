/**
 * Design Tokens - CSS Custom Properties
 */
export const tokens = `
:root {
  --yash-color-primary-600: #1e88e5;
  --yash-color-primary: var(--yash-color-primary-600);
  --yash-color-neutral-50: #fafafa;
  --yash-color-neutral-900: #212121;
  --yash-color-text-primary: var(--yash-color-neutral-900);
  --yash-focus-ring-color: var(--yash-color-primary-600);
  --yash-focus-ring-width: 2px;
  --yash-focus-ring: 0 0 0 var(--yash-focus-ring-width) var(--yash-focus-ring-color);
  --yash-font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --yash-font-size-base: 16px;
}`;

export function applyDesignTokens(): void {
    if (typeof document !== 'undefined') {
        const style = document.createElement('style');
        style.textContent = tokens;
        document.head.appendChild(style);
    }
}
