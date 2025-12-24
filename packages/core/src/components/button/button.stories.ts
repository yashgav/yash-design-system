import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../index.js';

const meta: Meta = {
    title: 'Components/Button',
    tags: ['autodocs'],
    parameters: {
        a11y: {
            config: {},
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'danger'],
        },
        disabled: { control: 'boolean' },
        type: {
            control: { type: 'select' },
            options: ['button', 'submit', 'reset'],
        },
        onClick: { action: 'click' },
    },
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
    args: { variant: 'primary', disabled: false, type: 'button' },
    render: (args) =>
        html`<ui-button
            variant=${args.variant}
            ?disabled=${args.disabled}
            type=${args.type}
            @click=${args.onClick}
            >Primary</ui-button
        >`,
};

export const Secondary: Story = {
    args: { variant: 'secondary', disabled: false, type: 'button' },
    render: (args) =>
        html`<ui-button
            variant=${args.variant}
            ?disabled=${args.disabled}
            type=${args.type}
            @click=${args.onClick}
            >Secondary</ui-button
        >`,
};

export const Danger: Story = {
    args: { variant: 'danger', disabled: false, type: 'button' },
    render: (args) =>
        html`<ui-button
            variant=${args.variant}
            ?disabled=${args.disabled}
            type=${args.type}
            @click=${args.onClick}
            >Delete</ui-button
        >`,
};

export const Disabled: Story = {
    args: { variant: 'primary', disabled: true },
    render: (args) =>
        html`<ui-button variant=${args.variant} ?disabled=${args.disabled}>Disabled</ui-button>`,
};
