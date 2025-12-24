import type { StorybookConfig } from '@storybook/web-components-vite';

/**
 * Storybook configuration
 *
 * Uses Vite builder for fast HMR and native ES modules.
 * Includes a11y addon by default to test accessibility during development.
 */
const config: StorybookConfig = {
    stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx)', '../packages/**/*.mdx', '../**/*.mdx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y', // Accessibility testing in Storybook
    ],
    framework: {
        name: '@storybook/web-components-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    core: {
        disableTelemetry: true,
    },
};

export default config;
