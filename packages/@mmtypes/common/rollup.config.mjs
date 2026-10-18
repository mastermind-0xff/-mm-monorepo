import { dts } from 'rollup-plugin-dts';

export default [
  // Bundle the declarations into a single file, so there are no relative
  // imports left to resolve. The same content is emitted as .d.cts so that
  // `require` consumers get CJS-flavoured types under node16/nodenext.
  {
    input: './src/index.ts',
    output: [
      { file: './dist/types/index.d.ts', format: 'esm' },
      { file: './dist/types/index.d.cts', format: 'esm' },
    ],
    plugins: [dts({ tsconfig: './tsconfig.json' })],
  },
];
