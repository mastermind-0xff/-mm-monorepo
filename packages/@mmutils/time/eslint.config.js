import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'] },
  {
    ignores: ['.git/**/*', 'dist/**/*', 'docs/**/*', 'node_modules/**/*'],
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // typescript-eslint is hoisted and shared by all packages; set the root
  // explicitly, inference is ambiguous when several configs share a process.
  {
    languageOptions: {
      parserOptions: { tsconfigRootDir: import.meta.dirname },
    },
  },
];
