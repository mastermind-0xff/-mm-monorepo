import { describe, test, expectTypeOf } from 'vitest';
import { ObjectEntries } from './entries';

const asOE = <T>(data: T) => {
  return data as ObjectEntries<T>;
};

describe('ObjectEntries', () => {
  test('simple object input', () => {
    expectTypeOf(asOE({ a: 123, b: 'abc' })).toMatchTypeOf<
      (['a', number] | ['b', string])[]
    >;
  });

  test('readonly object input', () => {
    expectTypeOf(asOE({ a: 123, b: 'abc' } as const)).toMatchTypeOf<
      (['a', 123] | ['b', 'abc'])[]
    >;
  });

  test('empty object input', () => {
    expectTypeOf(asOE({})).toMatchTypeOf<[string, unknown][]>;
  });

  test('empty array input', () => {
    expectTypeOf(asOE([])).toMatchTypeOf<[string, never][]>;
  });

  test('string literal input', () => {
    expectTypeOf(asOE('abc' as const)).toMatchTypeOf<
      (['0', 'a'] | ['1', 'b'] | ['2', 'c'])[]
    >;
  });

  test('string input', () => {
    expectTypeOf(asOE('abc' as string)).toMatchTypeOf<[string, string][]>;
  });

  test('readonly array input', () => {
    expectTypeOf(asOE(['a', 'b'] as const)).toMatchTypeOf<
      (['0', 'a'] | ['1', 'b'])[]
    >;
  });

  test('mixed array input', () => {
    expectTypeOf(
      asOE(['abc', 123, true, false] as [string, number, ...boolean[]])
    ).toMatchTypeOf<[string, string | number | boolean][]>;
  });

  test('number primitive input', () => {
    expectTypeOf(asOE(1)).toMatchTypeOf<[string, any][]>;
  });

  test('boolean primitive input', () => {
    expectTypeOf(asOE(false)).toMatchTypeOf<[string, any][]>;
  });

  test('bigint primitive input', () => {
    expectTypeOf(asOE(1n)).toMatchTypeOf<[string, any][]>;
  });
});
