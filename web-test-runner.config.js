const { playwrightLauncher } = require('@web/test-runner-playwright');
const { esbuildPlugin } = require('@web/dev-server-esbuild');

/**
 * Web Test Runner configuration
 *
 * Uses Playwright for cross-browser testing (Chromium, Firefox, WebKit).
 * Includes coverage reporting and accessibility testing with axe-core.
 */
module.exports = {
    files: 'packages/**/src/**/*.test.{js,ts}',
    nodeResolve: true,
    plugins: [esbuildPlugin({ ts: true, tsx: true })],

    // Test in multiple browsers
    browsers: [
        playwrightLauncher({ product: 'chromium' }),
        playwrightLauncher({ product: 'firefox' }),
        playwrightLauncher({ product: 'webkit' }),
    ],

    // Coverage configuration
    coverage: true,
    coverageConfig: {
        threshold: {
            statements: 70,
            branches: 70,
            functions: 60,
            lines: 70,
        },
    },

    // Test framework timeout
    testsFinishTimeout: 60000,

    // Preserve symlinks
    preserveSymlinks: true,
};
