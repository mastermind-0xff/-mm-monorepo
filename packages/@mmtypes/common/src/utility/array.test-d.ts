import { describe, test, expectTypeOf } from 'vitest';
import {
  AtLeastOneItem,
  NumberedTupleSplicer,
  StringLiteralToCharTuple,
  TupleOfNElements,
} from './array';

describe('TupleOfNElements', () => {
  test('creates numbered tuple using default values', () => {
    expectTypeOf<['0', '1']>().toEqualTypeOf<TupleOfNElements<2>>;
  });
  test('create numbered tuple as string', () => {
    expectTypeOf<['0', '1', '2']>().toEqualTypeOf<TupleOfNElements<3, true>>;
  });
  test('create numbered tuple as integer', () => {
    expectTypeOf<[0, 1, 2, 3]>().toEqualTypeOf<TupleOfNElements<4, false>>;
  });
});

describe('NumberedTupleSplicer', () => {
  test('splices string literals into a tuple', () => {
    expectTypeOf<[['0', 'a'], ['1', 'b']]>().toMatchTypeOf<
      NumberedTupleSplicer<['a', 'b']>
    >;
  });
  test('splices number literals and string literals into a tuple', () => {
    expectTypeOf<[[0, 'a'], [1, 'b'], [2, 'c']]>().toMatchTypeOf<
      NumberedTupleSplicer<['a', 'b', 'c'], [0, 1, 2]>
    >;
    expectTypeOf<[[1, 'b'], [0, 'a'], [2, 'c']]>().toMatchTypeOf<
      NumberedTupleSplicer<['a', 'b', 'c'], [0, 1, 2]>
    >;
  });
  test('splices unordered string literals and string literals into a tuple', () => {
    expectTypeOf<(['1', 'b'] | ['3', 'd'])[]>().toEqualTypeOf<
      NumberedTupleSplicer<['a', 'b', 'c', 'd'], ['1', '3', '5']>
    >;
  });

  describe('StringLiteralToCharTuple', () => {
    test('creates char tuple from string literal', () => {
      expectTypeOf<['a', 'b', 'c']>().toEqualTypeOf<
        StringLiteralToCharTuple<'abc'>
      >;
    });
    test('only string input allowed', () => {
      // @ts-expect-error only string allowed
      expectTypeOf<[]>().toEqualTypeOf<StringLiteralToCharTuple<123>>;
      expectTypeOf<[]>().toEqualTypeOf<StringLiteralToCharTuple<string>>;
    });
  });

  describe('AtLeastOneItem', () => {
    test('empty array returns never', () => {
      expectTypeOf<[never, ...never[]]>().toEqualTypeOf<AtLeastOneItem<[]>>;
    });
    test('at least one item is required', () => {
      // @ts-expect-error at least one item is required
      expectTypeOf<[]>().toMatchTypeOf<AtLeastOneItem<[1, 2, 3]>>;
      expectTypeOf<[1]>().toMatchTypeOf<AtLeastOneItem<[1, 2, 3]>>;
      // this is additional effect of AtLeastOne that is not wrong
      expectTypeOf<[1, 1, 1, 1]>().toMatchTypeOf<AtLeastOneItem<[1, 2, 3]>>;
      expectTypeOf<[2]>().toMatchTypeOf<AtLeastOneItem<[1, 2, 3]>>;
      // @ts-expect-error 4 is missing in the required list
      expectTypeOf<[4]>().toMatchTypeOf<AtLeastOneItem<[1, 2, 3]>>;
    });
    test('random items order allowed', () => {
      expectTypeOf<[1, 3, 2]>().toMatchTypeOf<AtLeastOneItem<[1, 2, 3]>>;
    });
    test('only items in the list allowed', () => {
      // @ts-expect-error 4 is missing in the required list
      expectTypeOf<[1, 3, 2, 4]>().toMatchTypeOf<AtLeastOneItem<[1, 2, 3]>>;
    });
  });
});
