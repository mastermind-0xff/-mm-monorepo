import {} from './primitives';
import {
  PrimitiveTypes,
  LiteralTypes,
  ObjectTypes,
  FunctionTypes,
  NeverType,
  AnyType,
  VoidType,
  UnknownType,
} from '../util/unit-test';
import { expectTypeOf } from 'vitest';
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
} from './assertions';
import { Callable, Newable } from '../util/types';

describe('assert', () => {
  test('narrows to condition', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      functionTypes2: FunctionTypes,
      literalTypes: LiteralTypes,
      unknownType: UnknownType
    ) => {
      assert(typeof primitiveTypes === 'string');
      expectTypeOf(primitiveTypes).toEqualTypeOf<string>();

      assert('b' in objectTypes);
      expectTypeOf(objectTypes).toEqualTypeOf<
        | Record<string, never>
        | {
            a: 1;
            b: 2;
            c: 3;
          }
      >();

      const f1 = () => undefined;
      const f2 = class F {};
      assert(functionTypes === f1);
      assert(functionTypes2 === f2);
      expectTypeOf(functionTypes).toEqualTypeOf<Callable>();
      expectTypeOf(functionTypes2).toEqualTypeOf<Newable>();

      assert(literalTypes === true);
      expectTypeOf(literalTypes).toEqualTypeOf<true>();

      assert(unknownType === 'abc');
      expectTypeOf(unknownType).toEqualTypeOf<string>();
    };
  });
});

describe('assertIsNullish', () => {
  test('narrows to null or undefined', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      literalTypes: LiteralTypes,
      neverType: NeverType,
      anyType: AnyType,
      voidType: VoidType,
      unknownType: UnknownType
    ) => {
      assertIsNullish(primitiveTypes);
      assertIsNullish(objectTypes);
      assertIsNullish(functionTypes);
      assertIsNullish(literalTypes);
      assertIsNullish(neverType);
      assertIsNullish(anyType);
      assertIsNullish(voidType);
      assertIsNullish(unknownType);

      expectTypeOf(primitiveTypes).toEqualTypeOf<null | undefined>();
      expectTypeOf(objectTypes).toEqualTypeOf<never>();
      expectTypeOf(functionTypes).toEqualTypeOf<never>();
      expectTypeOf(literalTypes).toEqualTypeOf<never>();
      expectTypeOf(neverType).toEqualTypeOf<never>();
      expectTypeOf(anyType).toEqualTypeOf<null | undefined>();
      expectTypeOf(voidType).toEqualTypeOf<undefined>();
      expectTypeOf(unknownType).toEqualTypeOf<null | undefined>();
    };
  });
});

describe('assertIsNonNullish', () => {
  test('narrows to NON null or undefined', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      literalTypes: LiteralTypes,
      neverType: NeverType,
      anyType: AnyType,
      voidType: VoidType,
      unknownType: UnknownType
    ) => {
      assertIsNonNullish(primitiveTypes);
      assertIsNonNullish(objectTypes);
      assertIsNonNullish(functionTypes);
      assertIsNonNullish(literalTypes);
      assertIsNonNullish(neverType);
      assertIsNonNullish(anyType);
      assertIsNonNullish(voidType);
      assertIsNonNullish(unknownType);

      expectTypeOf(primitiveTypes).toEqualTypeOf<
        string | number | bigint | boolean | symbol
      >();
      expectTypeOf(objectTypes).toEqualTypeOf<ObjectTypes>();
      expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes>();
      expectTypeOf(literalTypes).toEqualTypeOf<LiteralTypes>();
      expectTypeOf(neverType).toEqualTypeOf<never>();
      expectTypeOf(anyType).toEqualTypeOf<any>();
      expectTypeOf(voidType).toEqualTypeOf<NonNullable<void>>();
      expectTypeOf(unknownType).toEqualTypeOf<{}>();
    };
  });
});

describe('assertIsNull', () => {
  test('narrows to null', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      literalTypes: LiteralTypes,
      neverType: NeverType,
      anyType: AnyType,
      voidType: VoidType,
      unknownType: UnknownType
    ) => {
      assertIsNull(primitiveTypes);
      assertIsNull(objectTypes);
      assertIsNull(functionTypes);
      assertIsNull(literalTypes);
      assertIsNull(neverType);
      assertIsNull(anyType);
      assertIsNull(voidType);
      assertIsNull(unknownType);

      expectTypeOf(primitiveTypes).toEqualTypeOf<null>();
      expectTypeOf(objectTypes).toEqualTypeOf<never>();
      expectTypeOf(functionTypes).toEqualTypeOf<never>();
      expectTypeOf(literalTypes).toEqualTypeOf<never>();
      expectTypeOf(neverType).toEqualTypeOf<never>();
      expectTypeOf(anyType).toEqualTypeOf<null>();
      expectTypeOf(voidType).toEqualTypeOf<never>();
      expectTypeOf(unknownType).toEqualTypeOf<null>();
    };
  });
});

describe('assertIsUndefined', () => {
  test('narrows to undefined', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      literalTypes: LiteralTypes,
      neverType: NeverType,
      anyType: AnyType,
      voidType: VoidType,
      unknownType: UnknownType
    ) => {
      assertIsUndefined(primitiveTypes);
      assertIsUndefined(objectTypes);
      assertIsUndefined(functionTypes);
      assertIsUndefined(literalTypes);
      assertIsUndefined(neverType);
      assertIsUndefined(anyType);
      assertIsUndefined(voidType);
      assertIsUndefined(unknownType);

      expectTypeOf(primitiveTypes).toEqualTypeOf<undefined>();
      expectTypeOf(objectTypes).toEqualTypeOf<never>();
      expectTypeOf(functionTypes).toEqualTypeOf<never>();
      expectTypeOf(literalTypes).toEqualTypeOf<never>();
      expectTypeOf(neverType).toEqualTypeOf<never>();
      expectTypeOf(anyType).toEqualTypeOf<undefined>();
      expectTypeOf(voidType).toEqualTypeOf<undefined>();
      expectTypeOf(unknownType).toEqualTypeOf<undefined>();
    };
  });
});

describe('assertIsBoolean', () => {
  test('narrows to boolean', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      literalTypes: LiteralTypes,
      neverType: NeverType,
      anyType: AnyType,
      voidType: VoidType,
      unknownType: UnknownType
    ) => {
      assertIsBoolean(primitiveTypes);
      assertIsBoolean(objectTypes);
      assertIsBoolean(functionTypes);
      assertIsBoolean(literalTypes);
      assertIsBoolean(neverType);
      assertIsBoolean(anyType);
      assertIsBoolean(voidType);
      assertIsBoolean(unknownType);

      expectTypeOf(primitiveTypes).toEqualTypeOf<boolean>();
      expectTypeOf(objectTypes).toEqualTypeOf<ObjectTypes & boolean>(); // never
      expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes & boolean>(); // never
      expectTypeOf(literalTypes).toEqualTypeOf<true>();
      expectTypeOf(neverType).toEqualTypeOf<never>();
      expectTypeOf(anyType).toEqualTypeOf<boolean>();
      expectTypeOf(voidType).toEqualTypeOf<never>();
      expectTypeOf(unknownType).toEqualTypeOf<boolean>();
    };
  });
});

describe('assertIsNumber', () => {
  test('narrows to number', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      literalTypes: LiteralTypes,
      neverType: NeverType,
      anyType: AnyType,
      voidType: VoidType,
      unknownType: UnknownType
    ) => {
      assertIsNumber(primitiveTypes);
      assertIsNumber(objectTypes);
      assertIsNumber(functionTypes);
      assertIsNumber(literalTypes);
      assertIsNumber(neverType);
      assertIsNumber(anyType);
      assertIsNumber(voidType);
      assertIsNumber(unknownType);

      expectTypeOf(primitiveTypes).toEqualTypeOf<number>();
      expectTypeOf(objectTypes).toEqualTypeOf<ObjectTypes & number>(); // never
      expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes & number>(); // never
      expectTypeOf(literalTypes).toEqualTypeOf<0 | 1 | -1>();
      expectTypeOf(neverType).toEqualTypeOf<never>();
      expectTypeOf(anyType).toEqualTypeOf<number>();
      expectTypeOf(voidType).toEqualTypeOf<never>();
      expectTypeOf(unknownType).toEqualTypeOf<number>();
    };
  });
});

describe('assertIsBigInt', () => {
  test('narrows to bigint', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      literalTypes: LiteralTypes,
      neverType: NeverType,
      anyType: AnyType,
      voidType: VoidType,
      unknownType: UnknownType
    ) => {
      assertIsBigInt(primitiveTypes);
      assertIsBigInt(objectTypes);
      assertIsBigInt(functionTypes);
      assertIsBigInt(literalTypes);
      assertIsBigInt(neverType);
      assertIsBigInt(anyType);
      assertIsBigInt(voidType);
      assertIsBigInt(unknownType);

      expectTypeOf(primitiveTypes).toEqualTypeOf<bigint>();
      expectTypeOf(objectTypes).toEqualTypeOf<ObjectTypes & bigint>(); // never
      expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes & bigint>(); // never
      expectTypeOf(literalTypes).toEqualTypeOf<0n | 1n | -1n>();
      expectTypeOf(neverType).toEqualTypeOf<never>();
      expectTypeOf(anyType).toEqualTypeOf<bigint>();
      expectTypeOf(voidType).toEqualTypeOf<never>();
      expectTypeOf(unknownType).toEqualTypeOf<bigint>();
    };
  });
});

describe('assertIsString', () => {
  test('narrows to string', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      literalTypes: LiteralTypes,
      neverType: NeverType,
      anyType: AnyType,
      voidType: VoidType,
      unknownType: UnknownType
    ) => {
      assertIsString(primitiveTypes);
      assertIsString(objectTypes);
      assertIsString(functionTypes);
      assertIsString(literalTypes);
      assertIsString(neverType);
      assertIsString(anyType);
      assertIsString(voidType);
      assertIsString(unknownType);

      expectTypeOf(primitiveTypes).toEqualTypeOf<string>();
      expectTypeOf(objectTypes).toEqualTypeOf<ObjectTypes & string>(); // never
      expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes & string>(); // never
      expectTypeOf(literalTypes).toEqualTypeOf<
        '' | ' ' | 'true' | 'false' | '-1' | '0' | '1' | 'abc'
      >();
      expectTypeOf(neverType).toEqualTypeOf<never>();
      expectTypeOf(anyType).toEqualTypeOf<string>();
      expectTypeOf(voidType).toEqualTypeOf<never>();
      expectTypeOf(unknownType).toEqualTypeOf<string>();
    };
  });
});

describe('assertIsSymbol', () => {
  test('narrows to symbol', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      literalTypes: LiteralTypes,
      neverType: NeverType,
      anyType: AnyType,
      voidType: VoidType,
      unknownType: UnknownType
    ) => {
      assertIsSymbol(primitiveTypes);
      assertIsSymbol(objectTypes);
      assertIsSymbol(functionTypes);
      assertIsSymbol(literalTypes);
      assertIsSymbol(neverType);
      assertIsSymbol(anyType);
      assertIsSymbol(voidType);
      assertIsSymbol(unknownType);

      expectTypeOf(primitiveTypes).toEqualTypeOf<symbol>();
      expectTypeOf(objectTypes).toEqualTypeOf<ObjectTypes & symbol>(); // never
      expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes & symbol>(); // never
      expectTypeOf(literalTypes).toEqualTypeOf<never>();
      expectTypeOf(neverType).toEqualTypeOf<never>();
      expectTypeOf(anyType).toEqualTypeOf<symbol>();
      expectTypeOf(voidType).toEqualTypeOf<never>();
      expectTypeOf(unknownType).toEqualTypeOf<symbol>();
    };
  });
});

describe('assertIsObject', () => {
  test('narrows to object', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      literalTypes: LiteralTypes,
      neverType: NeverType,
      anyType: AnyType,
      voidType: VoidType,
      unknownType: UnknownType
    ) => {
      assertIsObject(primitiveTypes);
      assertIsObject(objectTypes);
      assertIsObject(functionTypes);
      assertIsObject(literalTypes);
      assertIsObject(neverType);
      assertIsObject(anyType);
      assertIsObject(voidType);
      assertIsObject(unknownType);

      expectTypeOf(primitiveTypes).toEqualTypeOf<never>();
      expectTypeOf(objectTypes).toEqualTypeOf<ObjectTypes>();
      expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes>();
      expectTypeOf(literalTypes).toEqualTypeOf<never>();
      expectTypeOf(neverType).toEqualTypeOf<never>();
      expectTypeOf(anyType).toEqualTypeOf<object>();
      expectTypeOf(voidType).toEqualTypeOf<never>();
      expectTypeOf(unknownType).toEqualTypeOf<object>();
    };
  });
});

describe('assertIsNullableObject', () => {
  test('narrows to object or null', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      literalTypes: LiteralTypes,
      neverType: NeverType,
      anyType: AnyType,
      voidType: VoidType,
      unknownType: UnknownType
    ) => {
      assertIsNullableObject(primitiveTypes);
      assertIsNullableObject(objectTypes);
      assertIsNullableObject(functionTypes);
      assertIsNullableObject(literalTypes);
      assertIsNullableObject(neverType);
      assertIsNullableObject(anyType);
      assertIsNullableObject(voidType);
      assertIsNullableObject(unknownType);

      expectTypeOf(primitiveTypes).toEqualTypeOf<null>();
      expectTypeOf(objectTypes).toEqualTypeOf<ObjectTypes>();
      expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes>();
      expectTypeOf(literalTypes).toEqualTypeOf<never>();
      expectTypeOf(neverType).toEqualTypeOf<never>();
      expectTypeOf(anyType).toEqualTypeOf<object | null>();
      expectTypeOf(voidType).toEqualTypeOf<never>();
      expectTypeOf(unknownType).toEqualTypeOf<object | null>();
    };
  });
});

describe('assertIsArray', () => {
  test('narrows to array', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      literalTypes: LiteralTypes,
      neverType: NeverType,
      anyType: AnyType,
      voidType: VoidType,
      unknownType: UnknownType
    ) => {
      assertIsArray(primitiveTypes);
      assertIsArray(objectTypes);
      assertIsArray(functionTypes);
      assertIsArray(literalTypes);
      assertIsArray(neverType);
      assertIsArray(anyType);
      assertIsArray(voidType);
      assertIsArray(unknownType);

      expectTypeOf(primitiveTypes).toEqualTypeOf<PrimitiveTypes & unknown[]>(); // never
      expectTypeOf(objectTypes).toEqualTypeOf<
        [] | [1, 2, 3] | number[] | string[] | boolean[] | unknown[]
      >();
      expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes & unknown[]>(); // never
      expectTypeOf(literalTypes).toEqualTypeOf<LiteralTypes & unknown[]>();
      expectTypeOf(neverType).toEqualTypeOf<never>();
      expectTypeOf(anyType).toEqualTypeOf<unknown[]>();
      expectTypeOf(voidType).toEqualTypeOf<void & unknown[]>();
      expectTypeOf(unknownType).toEqualTypeOf<unknown[]>();
    };
  });
});

describe('assertIsFunction', () => {
  test('narrows to function', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      literalTypes: LiteralTypes,
      neverType: NeverType,
      anyType: AnyType,
      voidType: VoidType,
      unknownType: UnknownType
    ) => {
      assertIsFunction(primitiveTypes);
      assertIsFunction(objectTypes);
      assertIsFunction(functionTypes);
      assertIsFunction(literalTypes);
      assertIsFunction(neverType);
      assertIsFunction(anyType);
      assertIsFunction(voidType);
      assertIsFunction(unknownType);

      expectTypeOf(primitiveTypes).toEqualTypeOf<never>();
      expectTypeOf(objectTypes).toEqualTypeOf<never>();
      expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes>();
      expectTypeOf(literalTypes).toEqualTypeOf<never>();
      expectTypeOf(neverType).toEqualTypeOf<never>();
      expectTypeOf(anyType).toEqualTypeOf<any>();
      expectTypeOf(voidType).toEqualTypeOf<never>();
      expectTypeOf(unknownType).toEqualTypeOf<never>();
    };
  });
});

describe('assertIsNever', () => {
  test('narrows to never', () => {
    (
      primitiveTypes: PrimitiveTypes,
      objectTypes: ObjectTypes,
      functionTypes: FunctionTypes,
      literalTypes: LiteralTypes,
      neverType: NeverType,
      anyType: AnyType,
      voidType: VoidType,
      unknownType: UnknownType
    ) => {
      // only never allowed
      assertNever(neverType);
      // @ts-expect-error no arguments allowed
      assertNever(primitiveTypes);
      // @ts-expect-error no arguments allowed
      assertNever(objectTypes);
      // @ts-expect-error no arguments allowed
      assertNever(functionTypes);
      // @ts-expect-error no arguments allowed
      assertNever(literalTypes);
      // @ts-expect-error no arguments allowed
      assertNever(anyType);
      // @ts-expect-error no arguments allowed
      assertNever(voidType);
      // @ts-expect-error no arguments allowed
      assertNever(unknownType);
    };
  });
});
