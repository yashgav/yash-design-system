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
            formats: ['es', 'cjs'],
            fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
        },
        rollupOptions: {
            external: ['lit', /^lit\//],
            output: [
                {
                    format: 'es',
                    preserveModules: true,
                    preserveModulesRoot: 'src',
                    entryFileNames: '[name].js',
                    chunkFileNames: '[name].js',
                    assetFileNames: '[name][extname]',
                },
                {
                    format: 'cjs',
                    preserveModules: true,
                    preserveModulesRoot: 'src',
                    entryFileNames: '[name].cjs',
                    chunkFileNames: '[name].cjs',
                    assetFileNames: '[name][extname]',
                },
            ],
        },
        sourcemap: true,
        target: 'es2020',
        minify: 'esbuild',
    },
    optimizeDeps: { include: ['lit'] },
    plugins: [dts({ insertTypesEntry: true, rollupTypes: false })],
});
