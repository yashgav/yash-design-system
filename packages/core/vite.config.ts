import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

/**
 * Vite configuration for building the core Web Component library
 */
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'YashDesignSystem',
            formats: ['es', 'umd'],
            fileName: (format) => (format === 'es' ? 'index.js' : 'index.umd.cjs'),
        },
        rollupOptions: {
            external: ['lit', /^lit\//],
            output: {
                preserveModules: true,
                preserveModulesRoot: 'src',
                globals: { lit: 'Lit' },
            },
        },
        sourcemap: true,
        target: 'es2020',
        minify: 'esbuild',
    },
    plugins: [dts({ insertTypesEntry: true, rollupTypes: false })],
    optimizeDeps: { include: ['lit'] },
});
