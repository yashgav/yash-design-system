import type { Preview } from '@storybook/web-components';
import 'yash-design-system-tokens/styles/tokens.css';
import 'yash-design-system-tokens/styles/themes/light.css';
import 'yash-design-system-tokens/styles/themes/dark.css';

/**
 * Storybook preview configuration
 *
 * Global parameters and decorators for all stories.
 */
export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'contrast',
            items: [
                { value: 'light', title: 'Light' },
                { value: 'dark', title: 'Dark' },
            ],
            dynamicTitle: true,
        },
    },
};

const withTheme = (Story, context) => {
    const theme = context.globals.theme || 'light';
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.remove('yash-theme-light', 'yash-theme-dark');
    root.classList.add(theme === 'dark' ? 'yash-theme-dark' : 'yash-theme-light');
    return Story();
};

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        // Configure a11y addon
        a11y: {
            config: {
                rules: [
                    {
                        // Example: customize axe-core rules
                        id: 'color-contrast',
                        enabled: true,
                    },
                ],
            },
        },
    },
    decorators: [withTheme],
};

export default preview;
