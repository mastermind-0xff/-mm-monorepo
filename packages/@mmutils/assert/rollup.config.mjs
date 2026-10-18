import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import ts from 'typescript';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import { dts } from 'rollup-plugin-dts';

export default [
  {
    input: './src/index.ts',
    watch: false,
    output: [
      {
        dir: './dist/cjs',
        format: 'cjs',
        sourcemap: true,
        preserveModules: true,
        exports: 'auto',
        preserveModulesRoot: 'src',
        entryFileNames: '[name].cjs',
      },
      {
        dir: './dist/esm',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        exports: 'auto',
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      json(),
      resolve(),
      commonjs(),
      // Compile with this package's TypeScript, not whichever version the
      // plugin resolves from the hoisted root node_modules.
      typescript({
        typescript: ts,
        tsconfig: './tsconfig.build.json',
      }),
    ],
  },

  // Bundle the declarations into a single file, so there are no relative
  // imports left to resolve. The same content is emitted as .d.cts so that
  // `require` consumers get CJS-flavoured types under node16/nodenext.
  {
    input: './src/index.ts',
    output: [
      { file: './dist/types/index.d.ts', format: 'esm' },
      { file: './dist/types/index.d.cts', format: 'esm' },
    ],
    external: [/^node:/],
    plugins: [dts({ tsconfig: './tsconfig.build.json' })],
  },
];
