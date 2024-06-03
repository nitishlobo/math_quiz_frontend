const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'), // should always be first in extends - see https://github.com/vercel/style-guide?tab=readme-ov-file#eslint
    require.resolve('@vercel/style-guide/eslint/node'), // should always be first in extends
    'eslint:recommended',
    'plugin:react/recommended', // https://github.com/jsx-eslint/eslint-plugin-react
    'plugin:react/jsx-runtime', // https://github.com/jsx-eslint/eslint-plugin-react
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/jest'),
    require.resolve('@vercel/style-guide/eslint/jest-react'), // includes rules for @testing-library/react
    require.resolve('@vercel/style-guide/eslint/playwright-test'),
    require.resolve('@vercel/style-guide/eslint/vitest'),
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};
