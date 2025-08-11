import { AssertPrimitiveOptions } from '../config/options';
import {
  assert,
  assertIsArray,
  assertIsBigInt,
  assertIsBoolean,
  assertIsFunction,
  assertIsNonNullish,
  assertIsNull,
  assertIsNullableObject,
  assertIsNullish,
  assertIsNumber,
  assertIsObject,
  assertIsString,
  assertIsSymbol,
  assertIsUndefined,
  assertNever,
} from './assertions.ts';
import {
  testAgainst,
  primitiveTestData,
  AllowedCategories,
  assertAgainst,
  DebugMode,
} from '../util/unit-test';
import { describe, test, expect, afterEach, expectTypeOf } from 'vitest';

expect.extend({
  toNotThrowFor(
    received: (v: unknown, e?: Error | string) => undefined | never,
    expected: AllowedCategories[],
    throwMessagePrefix: string,
    debugMode: DebugMode = 'auto'
  ) {
    return {
      pass: assertAgainst(
        received,
        primitiveTestData,
        expected,
        throwMessagePrefix,
        debugMode
      ),
      message: () =>
        `${received} returns unexpected result in full test. Check log.`,
    };
  },
});

declare module 'vitest' {
  export interface Assertion {
    toNotThrowFor(
      categories: AllowedCategories[],
      throwMessagePrefix: string,
      debugMode?: DebugMode
    ): Assertion;
  }
}

const DEBUG_MODE: DebugMode = 'auto';

const AssertPrimitiveOptionsDefault = {
  numberExcludeNaN: AssertPrimitiveOptions.numberExcludeNaN,
};

afterEach(() => {
  AssertPrimitiveOptions.numberExcludeNaN =
    AssertPrimitiveOptionsDefault.numberExcludeNaN;
});

describe('assert', () => {
  test('asserts condition', () => {
    expect(() => {
      assert(true);
    }).not.toThrow();

    expect(() => {
      assert(false);
    }).toThrow('Assert condition not met!');
  });
});

describe('assertIsNullish', () => {
  test('does not throw only for null and undefined', () => {
    expect(assertIsNullish).toNotThrowFor(
      ['null', 'undefined'],
      `'value' is not null or undefined!`,
      DEBUG_MODE
    );
  });
});

describe('assertIsNonNullish', () => {
  test('throws only for null and undefined', () => {
    expect(assertIsNonNullish).toNotThrowFor(
      [
        'boolean',
        'number',
        'NaN',
        'string',
        'bigint',
        'array',
        'object',
        'function',
        'symbol',
      ],
      `'value' is null or undefined!`,
      DEBUG_MODE
    );
  });
});

describe('assertIsNull', () => {
  test('does not throw only for null', () => {
    expect(assertIsNull).toNotThrowFor(
      ['null'],
      `'value' is not null!`,
      DEBUG_MODE
    );
  });
});

describe('assertIsUndefined', () => {
  test('does not throw only for undefined', () => {
    expect(assertIsUndefined).toNotThrowFor(
      ['undefined'],
      `'value' is not undefined!`,
      DEBUG_MODE
    );
  });
});

describe('assertIsBoolean', () => {
  test('does not throw only for true and false', () => {
    expect(assertIsBoolean).toNotThrowFor(
      ['boolean'],
      `'value' is not boolean!`,
      DEBUG_MODE
    );
  });
});

describe('assertIsNumber', () => {
  test('does not throw only for number primitive type (numberExcludeNaN: true)', () => {
    AssertPrimitiveOptions.numberExcludeNaN = true;
    expect(assertIsNumber).toNotThrowFor(
      ['number'],
      `'value' is not number!`,
      DEBUG_MODE
    );
  });

  test('does not throw only for number primitive type (numberExcludeNaN: false)', () => {
    AssertPrimitiveOptions.numberExcludeNaN = false;
    expect(assertIsNumber).toNotThrowFor(
      ['number', 'NaN'],
      `'value' is not number!`,
      DEBUG_MODE
    );
  });
});

describe('assertIsBigInt', () => {
  test('does not throw only for bigint primitive type', () => {
    expect(assertIsBigInt).toNotThrowFor(
      ['bigint'],
      `'value' is not bigint!`,
      DEBUG_MODE
    );
  });
});

describe('assertIsString', () => {
  test('does not throw only for string primitive type', () => {
    expect(assertIsString).toNotThrowFor(
      ['string'],
      `'value' is not string!`,
      DEBUG_MODE
    );
  });
});

describe('assertIsSymbol', () => {
  test('does not throw only for symbol primitive type', () => {
    expect(assertIsSymbol).toNotThrowFor(
      ['symbol'],
      `'value' is not symbol!`,
      DEBUG_MODE
    );
  });
});

describe('assertIsObject', () => {
  test('does not throw only for objects and arrays', () => {
    expect(assertIsObject).toNotThrowFor(
      ['object', 'array'],
      `'value' is not object!`,
      DEBUG_MODE
    );
  });
});

describe('assertIsNullableObject', () => {
  test('does not throw only for objects, arrays and null', () => {
    expect(assertIsNullableObject).toNotThrowFor(
      ['object', 'array', 'null'],
      `'value' is not nullable object!`,
      DEBUG_MODE
    );
  });
});

describe('assertIsArray', () => {
  test('does not throw only for arrays', () => {
    expect(assertIsArray).toNotThrowFor(
      ['array'],
      `'value' is not array!`,
      DEBUG_MODE
    );
  });
});

describe('assertIsFunction', () => {
  test('does not throw only for functions (callable objects or classes)', () => {
    expect(assertIsFunction).toNotThrowFor(
      ['function'],
      `'value' is not function!`,
      DEBUG_MODE
    );
  });
});

describe('assertIsNever', () => {
  test('always throws', () => {
    expect(assertNever).toNotThrowFor([], `'value' is not never`, DEBUG_MODE);
  });
});
