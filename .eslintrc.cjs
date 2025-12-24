module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-types': ['error', { types: { '{}': false } }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    'prefer-const': 'error',
    // Note: `eslint-plugin-lit` removed due to registry availability; consider
    // re-adding if your registry allows installing `eslint-plugin-lit`.
    'no-restricted-syntax': [
      'warn',
      {
        selector: "CallExpression[callee.object.name='document'][callee.property.name='querySelector']",
        message: 'Avoid querying document from inside components; use local DOM or refs instead.',
      },
    ],
    // aria plugin removed (not available in registry); ensure ARIA best-practices manually or via separate tooling
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {},
    },
    {
      files: ['*.mdx', '**/*.stories.*'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      files: ['**/test/**', '**/*.test.*', '**/*.spec.*'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off'
      },
    },
  ],
};
