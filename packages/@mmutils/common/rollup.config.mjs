import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import { dts } from 'rollup-plugin-dts';

// import packageJson from './package.json' assert { type: 'json' };

// const entryFileNameNodeModules = (chunkInfo) => {
//   if (chunkInfo.name.includes('node_modules')) {
//     return chunkInfo.name.replace('node_modules', 'external') + '.js';
//   }

//   return '[name].js';
// };

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
        // entryFileNames: entryFileNameNodeModules,
      },
    ],
    plugins: [
      json(),
      resolve(),
      commonjs(),
      // With allowJs and no outDir, @rollup/plugin-typescript >= 12.3 emits to
      // a temp outDir outside `dir` and then fails its own path check. There
      // are no JS sources, so turn it off for the bundle.
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: { allowJs: false },
      }),
    ],
    // external: (id) => {
    //   if (String(id).indexOf('node_modules') !== -1) return true;
    //   return false;
    // },
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
    plugins: [dts({ tsconfig: './tsconfig.json' })],
  },
];
