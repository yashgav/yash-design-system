import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { runAxe } from '../../test/a11y-helpers';
import '../../index.js';

describe('ui-button', () => {
    it('renders and is focusable by default', async () => {
        const el = await fixture<HTMLDivElement>(html`<ui-button>Label</ui-button>`);
        const button = el.shadowRoot!.querySelector('button')!;
        expect(button).to.exist;
        expect(button.tabIndex).to.equal(0); // native button focusable
    });

    it('supports disabled state', async () => {
        const el = await fixture<HTMLDivElement>(html`<ui-button disabled>Label</ui-button>`);
        const button = el.shadowRoot!.querySelector('button')!;
        expect(button.disabled).to.equal(true);
    });

    it('emits click when enabled and not when disabled', async () => {
        const el = await fixture<HTMLDivElement>(html`<ui-button>Label</ui-button>`);
        const button = el.shadowRoot!.querySelector('button')!;
        let count = 0;
        el.addEventListener('click', () => count++);
        button.click();
        expect(count).to.equal(1);

        const elDisabled = await fixture<HTMLDivElement>(
            html`<ui-button disabled>Label</ui-button>`
        );
        const buttonDisabled = elDisabled.shadowRoot!.querySelector('button')!;
        count = 0;
        elDisabled.addEventListener('click', () => count++);
        buttonDisabled.click();
        expect(count).to.equal(0);
    });

    it('passes basic a11y audit', async () => {
        const el = await fixture<HTMLDivElement>(html`<ui-button>Accessible</ui-button>`);
        const results = await runAxe(el);
        expect(results.violations.length).to.equal(0);
    });
});
