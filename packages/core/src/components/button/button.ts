import { LitElement, html, css, TemplateResult } from 'lit';

/**
 * Accessible button component using semantic HTML and design tokens.
 *
 * @slot - Default slot for button label content
 * @csspart base - The native button element for styling hooks
 * @csspart label - Inner label wrapper
 *
 * @cssprop --yash-color-primary - Background for primary variant
 * @cssprop --yash-color-on-primary - Text color for primary variant
 * @cssprop --yash-color-surface - Background for secondary variant
 * @cssprop --yash-color-on-surface - Text color for secondary variant
 * @cssprop --yash-color-error - Background for danger variant
 * @cssprop --yash-color-on-error - Text color for danger variant
 * @cssprop --yash-color-border - Border color for secondary variant
 * @cssprop --yash-radius-8 - Border radius
 * @cssprop --yash-spacing-12 - Vertical padding scale
 * @cssprop --yash-spacing-16 - Horizontal padding scale
 * @cssprop --yash-shadow-1 - Focus/elevation shadow
 * @cssprop --yash-focus-ring - Focus ring shadow (if using box-shadow)
 */
export class UIButton extends LitElement {
    static override styles = css`
        :host {
            display: inline-block;
        }

        /* Base native button styling using design tokens */
        button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: var(--yash-spacing-gap-sm, 0.5rem);
            font-family: var(--yash-font-family-base, sans-serif);
            font-size: var(--yash-font-size-body, 1rem);
            font-weight: var(--yash-font-weight-medium, 500);
            line-height: var(--yash-line-height-body, 1.5);
            border-radius: var(--yash-radius-md, 0.5rem);
            border: 1px solid transparent;
            padding: var(--yash-spacing-inset-sm, 0.75rem) var(--yash-spacing-inset-md, 1rem);
            cursor: pointer;
            user-select: none;
            background: transparent;
            color: inherit;
            box-shadow: none;
            transition:
                background-color var(--yash-motion-duration-base, 200ms)
                    var(--yash-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1)),
                color var(--yash-motion-duration-base, 200ms)
                    var(--yash-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1)),
                box-shadow var(--yash-motion-duration-base, 200ms)
                    var(--yash-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1));
        }

        /* Variants */
        :host([variant='primary']) button {
            background: var(--yash-color-primary);
            color: var(--yash-color-on-primary);
        }

        :host([variant='secondary']) button {
            background: var(--yash-color-secondary);
            color: var(--yash-color-on-secondary);
            border-color: var(--yash-color-secondary-border);
        }

        :host([variant='danger']) button {
            background: var(--yash-color-danger);
            color: var(--yash-color-on-danger);
        }

        /* Hover/active states */
        /* Use tokenized hover/active styles */
        :host([variant='primary']) button:hover:not(:disabled) {
            background: var(--yash-color-primary-hover);
            color: var(--yash-color-on-primary-hover);
        }
        :host([variant='primary']) button:active:not(:disabled) {
            background: var(--yash-color-primary-active);
            color: var(--yash-color-on-primary-active);
        }
        :host([variant='secondary']) button:hover:not(:disabled) {
            background: var(--yash-color-secondary-hover);
            color: var(--yash-color-on-secondary-hover);
            border-color: var(--yash-color-secondary-border);
        }
        :host([variant='secondary']) button:active:not(:disabled) {
            background: var(--yash-color-secondary-active);
            color: var(--yash-color-on-secondary-active);
            border-color: var(--yash-color-secondary-border);
        }
        :host([variant='danger']) button:hover:not(:disabled) {
            background: var(--yash-color-danger-hover);
            color: var(--yash-color-on-danger-hover);
        }
        :host([variant='danger']) button:active:not(:disabled) {
            background: var(--yash-color-danger-active);
            color: var(--yash-color-on-danger-active);
        }

        /* Focus-visible styles for accessibility */
        button:focus-visible {
            outline: none;
            /* Use composite focus ring token */
            box-shadow: var(--yash-focus-ring);
        }

        /* Disabled state */
        button:disabled,
        :host([disabled]) button {
            cursor: not-allowed;
            opacity: 0.6;
            filter: none;
        }

        /* Content wrapper for customization */
        .label {
            display: inline-flex;
            align-items: center;
        }
    `;

    static override properties = {
        variant: { type: String, reflect: true },
        disabled: { type: Boolean, reflect: true },
        type: { type: String, reflect: true },
    } as const;

    declare variant: 'primary' | 'secondary' | 'danger';
    declare disabled: boolean;
    declare type: 'button' | 'submit' | 'reset';

    constructor() {
        super();
        // runtime defaults
        this.variant = this.variant ?? 'primary';
        this.disabled = this.disabled ?? false;
        this.type = this.type ?? 'button';
    }

    // Rely on native <button> behavior for disabled and keyboard activation.
    // Avoid intercepting click events which can break composition and framework expectations.

    override render(): TemplateResult {
        return html`
            <button part="base" class="base" ?disabled=${this.disabled} type=${this.type}>
                <span part="label" class="label"><slot></slot></span>
            </button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ui-button': UIButton;
    }
}
if (!customElements.get('ui-button')) {
    customElements.define('ui-button', UIButton);
}
