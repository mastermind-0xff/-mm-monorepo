import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'] },
  {
    ignores: [
      '.git/**/*',
      'dist/**/*',
      'docs/**/*',
      'node_modules/**/*',
      'src/**/*.spec.*',
      'src/**/*.spec-d.*',
    ],
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
