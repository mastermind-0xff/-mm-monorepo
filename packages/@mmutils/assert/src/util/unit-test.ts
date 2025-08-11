import { sec } from 'style-escape-codes';
import { Callable, Newable } from './types';
import { toConsoleString } from './actions';

// <----------- Test against types start here
export type PrimitiveTypes =
  | string
  | number
  | bigint
  | boolean
  | undefined
  | symbol
  | null;

export type ObjectTypes =
  | object
  | Record<string, never>
  | { a: 1; b: 2; c: 3 }
  | { [k: symbol]: true }
  | []
  | [1, 2, 3]
  | number[]
  | string[]
  | boolean[]
  | unknown[];

export type FunctionTypes = Callable | Newable;

export type LiteralTypes =
  | true
  // | false // will broaden true to boolean
  | -1
  | 0
  | 1
  | -1n
  | 0n
  | 1n
  | ''
  | ' '
  | 'true'
  | 'false'
  | '-1'
  | '0'
  | '1'
  | 'abc';

export type NeverType = never;
// eslint-disable-next-line
export type AnyType = any;

export type VoidType = void;

export type UnknownType = unknown;
// <----------- Test against types end here

export const PrimitiveTypeNames = {
  boolean: 'boolean',
  number: 'number',
  bigint: 'bigint',
  string: 'string',
  symbol: 'symbol',
  object: 'object',
  array: 'array',
  function: 'function',
  undefined: 'undefined',
  null: 'null',
} as const;

export type PrimitiveTypeNames = keyof typeof PrimitiveTypeNames;
export type AllowedCategories = PrimitiveTypeNames | 'NaN';

export const primitiveTestData = [
  ['boolean', [true, false]],
  ['number', [1, 0, -1, 123, Infinity, -Infinity]],
  ['NaN', [NaN]],
  ['string', ['abc', '', 'true', 'false', '1', '0', '-1']],
  ['bigint', [-123n, 1n, 0n, -1n, 123n]],
  [
    'array',
    // eslint-disable-next-line
    [[1, 2, 3], [], [1], [0], ['a'], [''], ['1'], ['0'], [[1], [0]], [,], [[]]],
  ],
  [
    'object',
    [
      {},
      { key: 'value' },
      { key: { key: 'value' } },
      { length: 1, 0: 'array like' },
      new Int8Array(),
      // eslint-disable-next-line
      (function (a: any) {
        // eslint-disable-next-line
        return arguments;
      })(123),
      new (class A {})(),
      new Proxy({ a: 'proxy object' }, {}),
      Object(Symbol()),
      Object.create(null),
      /regex/,
    ],
  ],
  [
    'function',
    [
      () => undefined,
      function a() {},
      class A {},
      // eslint-disable-next-line
      new Proxy((a: any) => a, {}),
      function b() {}.bind(null),
      function* () {},
      async function () {},
      Number,
      Date,
      Array,
      RegExp,
    ],
  ],
  ['symbol', [Symbol(), Symbol.iterator, Symbol.for('key')]],
  ['undefined', [undefined]],
  ['null', [null]],
] as const satisfies [AllowedCategories, unknown[]][];

export type PrimitiveTestData = typeof primitiveTestData;

export const styledLog = (
  keyValueTypePairs: [string, unknown, ('red' | 'green' | 'neutral')?][] = []
) => {
  const finalMessage = keyValueTypePairs
    .map(([key, value, type = 'neutral']) =>
      type === 'green' ?
        `${sec.b.u.brightBlue(key)}: ${sec.white.bgGreen(toConsoleString(value))}`
      : type === 'red' ?
        `${sec.b.u.brightBlue(key)}: ${sec.white.bgRed(toConsoleString(value))}`
      : `${sec.b.brightBlue(key)}: ${sec.brightCyan(toConsoleString(value))}`
    )
    .join(' ');

  if (finalMessage) console.log(finalMessage);
};

/**
 * __auto__ - output only on mismatch or error
 * __on__ - always output
 * __off__ - no output
 */
export type DebugMode = 'auto' | 'on' | 'off';

/**
 * Check a given type-guard function against set of values.
 * @param fn Function to test all values against.
 * @param sampleData Test data ordered by categories containing list of values.
 * @param whatReturnsTrue For what categories from the sample data should the fn
 * return true (false for all others).
 * @param debug Output message for every check.
 * @returns Returns true if fn returns true for the selected categories and
 * false for all other categories. Returns false otherwise.
 */
export const testAgainst = (
  fn: (v: unknown) => boolean,
  sampleData: PrimitiveTestData,
  whatReturnsTrue: readonly AllowedCategories[],
  debug: DebugMode = 'auto'
): boolean => {
  for (const [category, categoryValues] of sampleData) {
    for (const value of categoryValues) {
      const expected = whatReturnsTrue.includes(category);
      const actual = fn(value);
      const mismatchResult = expected != actual;
      // eslint-disable-next-line
      ((debug === 'auto' && mismatchResult) || debug === 'on') &&
        styledLog([
          [
            '>',
            mismatchResult ? 'FAIL' : 'OK',
            mismatchResult ? 'red' : 'green',
          ],
          ['fn', fn.name],
          ['value', value],
          ['expected', expected, mismatchResult ? 'green' : 'neutral'],
          ['actual', actual, mismatchResult ? 'red' : 'neutral'],
          ['category', category],
        ]);

      if (mismatchResult) return false;
    }
  }
  return true;
};

/**
 * Check a given assert function against set of values.
 * @param fn Function to test all values against.
 * @param sampleData Test data ordered by categories containing list of values.
 * @param whatDoesNotThrow For what categories from the sample data should the fn
 * not throw an error.
 * @param debug Output message for every check.
 * @returns Returns true if fn does not throw for the selected categories and
 * throws for all other categories. Returns false otherwise.
 */
export const assertAgainst = (
  fn: (v: unknown, e?: Error | string) => undefined | never,
  sampleData: PrimitiveTestData,
  whatDoesNotThrow: readonly AllowedCategories[],
  errorMessagePrefix: string,
  debug: DebugMode = 'auto'
): boolean => {
  for (const [category, categoryValues] of sampleData) {
    const throwsExpected = !whatDoesNotThrow.includes(category);
    for (const value of categoryValues) {
      let throwsActual: boolean;
      let unexpectedError: Error | undefined = undefined;
      try {
        // test conducted with the default error type and message
        fn(value);
        throwsActual = false;
        // eslint-disable-next-line
      } catch (e: any) {
        if (e.message.indexOf(errorMessagePrefix) !== 0) unexpectedError = e;
        throwsActual = true;
      }
      const mismatchResult = throwsExpected !== throwsActual;
      // eslint-disable-next-line
      ((debug === 'auto' && (mismatchResult || !!unexpectedError)) ||
        debug === 'on') &&
        styledLog([
          [
            '>',
            mismatchResult || unexpectedError ? 'FAIL' : 'OK',
            mismatchResult || unexpectedError ? 'red' : 'green',
          ],
          ['fn', fn.name],
          ['value', value],
          [
            'throws expected',
            throwsExpected,
            mismatchResult ? 'green' : 'neutral',
          ],
          ['throws actual', throwsActual, mismatchResult ? 'red' : 'neutral'],
          ['category', category],
          ['whatDoesNotThrow', whatDoesNotThrow],
        ]);

      if (mismatchResult || unexpectedError) {
        if ((debug === 'auto' || debug === 'on') && unexpectedError) {
          styledLog([['expected error prefix', errorMessagePrefix, 'green']]);
          styledLog([
            ['unexpected error thrown', unexpectedError.message, 'red'],
          ]);
          styledLog([['stack', unexpectedError.stack]]);
        }
        return false;
      }
    }
  }
  return true;
};
