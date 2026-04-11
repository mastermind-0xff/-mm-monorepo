import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';

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
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
    ],
  },

  // {
  //   input: './dist/esm/types/index.d.ts',
  //   output: [{ file: './dist/index.d.ts', format: 'esm' }],
  //   plugins: [dts()],
  // },
];
