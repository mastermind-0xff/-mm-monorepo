import { AssertPrimitiveOptions } from '../config/options';
import {
  isArray,
  isBigInt,
  isBoolean,
  isFunction,
  isNull,
  isNullableObject,
  isNullish,
  isNumber,
  isObject,
  isString,
  isSymbol,
  isUndefined,
} from './primitives';
import {
  testAgainst,
  primitiveTestData,
  AllowedCategories,
  DebugMode,
} from '../util/unit-test';
import { describe, test, expect, afterEach } from 'vitest';

expect.extend({
  toBeTrueFor(
    received: (v: unknown) => boolean,
    expected: AllowedCategories[],
    debug: DebugMode = 'auto'
  ) {
    return {
      pass: testAgainst(received, primitiveTestData, expected, debug),
      message: () =>
        `${received} returns unexpected result in full test. Check log.`,
    };
  },
});

declare module 'vitest' {
  export interface Assertion {
    toBeTrueFor(categories: AllowedCategories[], debug?: DebugMode): Assertion;
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

describe('isNullish', () => {
  test('returns true only for null and undefined', () => {
    expect(isNullish).toBeTrueFor(['null', 'undefined'], DEBUG_MODE);
  });
});

describe('isNull', () => {
  test('returns true only for null', () => {
    expect(isNull).toBeTrueFor(['null'], DEBUG_MODE);
  });
});

describe('isUndefined', () => {
  test('returns true only for undefined', () => {
    expect(isUndefined).toBeTrueFor(['undefined'], DEBUG_MODE);
  });
});

describe('isBoolean', () => {
  test('returns true only for true and false', () => {
    expect(isBoolean).toBeTrueFor(['boolean'], DEBUG_MODE);
  });
});

describe('isNumber', () => {
  test('returns true only for number primitive type (numberExcludeNaN: true)', () => {
    AssertPrimitiveOptions.numberExcludeNaN = true;
    expect(isNumber).toBeTrueFor(['number'], DEBUG_MODE);
  });
  test('returns true only for number primitive type (numberExcludeNaN: false)', () => {
    AssertPrimitiveOptions.numberExcludeNaN = false;
    expect(isNumber).toBeTrueFor(['number', 'NaN'], DEBUG_MODE);
  });
});

describe('isBigInt', () => {
  test('returns true only for bigint primitive type', () => {
    expect(isBigInt).toBeTrueFor(['bigint'], DEBUG_MODE);
  });
});

describe('isString', () => {
  test('returns true only for string primitive type', () => {
    expect(isString).toBeTrueFor(['string'], DEBUG_MODE);
  });
});

describe('isSymbol', () => {
  test('returns true only for symbol primitive type', () => {
    expect(isSymbol).toBeTrueFor(['symbol'], DEBUG_MODE);
  });
});

describe('isObject', () => {
  test('returns true only for objects and arrays', () => {
    expect(isObject).toBeTrueFor(['object', 'array'], DEBUG_MODE);
  });
});

describe('isNullableObject', () => {
  test('returns true only for objects, arrays and null', () => {
    expect(isNullableObject).toBeTrueFor(
      ['object', 'array', 'null'],
      DEBUG_MODE
    );
  });
});

describe('isArray', () => {
  test('returns true only for arrays', () => {
    expect(isArray).toBeTrueFor(['array'], DEBUG_MODE);
  });
});

describe('isFunction', () => {
  test('returns true only for functions (callable objects or classes)', () => {
    expect(isFunction).toBeTrueFor(['function'], DEBUG_MODE);
  });
});


