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

describe('isNullish', () => {
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
      if (
        isNullish(primitiveTypes) &&
        isNullish(objectTypes) &&
        isNullish(functionTypes) &&
        isNullish(literalTypes) &&
        isNullish(neverType) &&
        isNullish(anyType) &&
        isNullish(voidType) &&
        isNullish(unknownType)
      ) {
        expectTypeOf(primitiveTypes).toEqualTypeOf<null | undefined>();
        expectTypeOf(objectTypes).toEqualTypeOf<never>();
        expectTypeOf(functionTypes).toEqualTypeOf<never>();
        expectTypeOf(literalTypes).toEqualTypeOf<never>();
        expectTypeOf(neverType).toEqualTypeOf<never>();
        expectTypeOf(anyType).toEqualTypeOf<null | undefined>();
        expectTypeOf(voidType).toEqualTypeOf<undefined>();
        expectTypeOf(unknownType).toEqualTypeOf<null | undefined>();
      }
    };
  });
});

describe('isNull', () => {
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
      if (
        isNull(primitiveTypes) &&
        isNull(objectTypes) &&
        isNull(functionTypes) &&
        isNull(literalTypes) &&
        isNull(neverType) &&
        isNull(anyType) &&
        isNull(voidType) &&
        isNull(unknownType)
      ) {
        expectTypeOf(primitiveTypes).toEqualTypeOf<null>();
        expectTypeOf(objectTypes).toEqualTypeOf<never>();
        expectTypeOf(functionTypes).toEqualTypeOf<never>();
        expectTypeOf(literalTypes).toEqualTypeOf<never>();
        expectTypeOf(neverType).toEqualTypeOf<never>();
        expectTypeOf(anyType).toEqualTypeOf<null>();
        expectTypeOf(voidType).toEqualTypeOf<never>();
        expectTypeOf(unknownType).toEqualTypeOf<null>();
      }
    };
  });
});

describe('isUndefined', () => {
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
      if (
        isUndefined(primitiveTypes) &&
        isUndefined(objectTypes) &&
        isUndefined(functionTypes) &&
        isUndefined(literalTypes) &&
        isUndefined(neverType) &&
        isUndefined(anyType) &&
        isUndefined(voidType) &&
        isUndefined(unknownType)
      ) {
        expectTypeOf(primitiveTypes).toEqualTypeOf<undefined>();
        expectTypeOf(objectTypes).toEqualTypeOf<never>();
        expectTypeOf(functionTypes).toEqualTypeOf<never>();
        expectTypeOf(literalTypes).toEqualTypeOf<never>();
        expectTypeOf(neverType).toEqualTypeOf<never>();
        expectTypeOf(anyType).toEqualTypeOf<undefined>();
        expectTypeOf(voidType).toEqualTypeOf<undefined>();
        expectTypeOf(unknownType).toEqualTypeOf<undefined>();
      }
    };
  });
});

describe('isBoolean', () => {
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
      if (
        isBoolean(primitiveTypes) &&
        isBoolean(objectTypes) &&
        isBoolean(functionTypes) &&
        isBoolean(literalTypes) &&
        isBoolean(neverType) &&
        isBoolean(anyType) &&
        isBoolean(voidType) &&
        isBoolean(unknownType)
      ) {
        expectTypeOf(primitiveTypes).toEqualTypeOf<boolean>();
        expectTypeOf(objectTypes).toEqualTypeOf<ObjectTypes & boolean>(); // never
        expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes & boolean>(); // never
        expectTypeOf(literalTypes).toEqualTypeOf<true>();
        expectTypeOf(neverType).toEqualTypeOf<never>();
        expectTypeOf(anyType).toEqualTypeOf<boolean>();
        expectTypeOf(voidType).toEqualTypeOf<never>();
        expectTypeOf(unknownType).toEqualTypeOf<boolean>();
      }
    };
  });
});

describe('isNumber', () => {
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
      if (
        isNumber(primitiveTypes) &&
        isNumber(objectTypes) &&
        isNumber(functionTypes) &&
        isNumber(literalTypes) &&
        isNumber(neverType) &&
        isNumber(anyType) &&
        isNumber(voidType) &&
        isNumber(unknownType)
      ) {
        expectTypeOf(primitiveTypes).toEqualTypeOf<number>();
        expectTypeOf(objectTypes).toEqualTypeOf<ObjectTypes & number>(); // never
        expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes & number>(); // never
        expectTypeOf(literalTypes).toEqualTypeOf<0 | 1 | -1>();
        expectTypeOf(neverType).toEqualTypeOf<never>();
        expectTypeOf(anyType).toEqualTypeOf<number>();
        expectTypeOf(voidType).toEqualTypeOf<never>();
        expectTypeOf(unknownType).toEqualTypeOf<number>();
      }
    };
  });
});

describe('isBigInt', () => {
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
      if (
        isBigInt(primitiveTypes) &&
        isBigInt(objectTypes) &&
        isBigInt(functionTypes) &&
        isBigInt(literalTypes) &&
        isBigInt(neverType) &&
        isBigInt(anyType) &&
        isBigInt(voidType) &&
        isBigInt(unknownType)
      ) {
        expectTypeOf(primitiveTypes).toEqualTypeOf<bigint>();
        expectTypeOf(objectTypes).toEqualTypeOf<ObjectTypes & bigint>(); // never
        expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes & bigint>(); // never
        expectTypeOf(literalTypes).toEqualTypeOf<0n | 1n | -1n>();
        expectTypeOf(neverType).toEqualTypeOf<never>();
        expectTypeOf(anyType).toEqualTypeOf<bigint>();
        expectTypeOf(voidType).toEqualTypeOf<never>();
        expectTypeOf(unknownType).toEqualTypeOf<bigint>();
      }
    };
  });
});

describe('isString', () => {
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
      if (
        isString(primitiveTypes) &&
        isString(objectTypes) &&
        isString(functionTypes) &&
        isString(literalTypes) &&
        isString(neverType) &&
        isString(anyType) &&
        isString(voidType) &&
        isString(unknownType)
      ) {
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
      }
    };
  });
});

describe('isSymbol', () => {
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
      if (
        isSymbol(primitiveTypes) &&
        isSymbol(objectTypes) &&
        isSymbol(functionTypes) &&
        isSymbol(literalTypes) &&
        isSymbol(neverType) &&
        isSymbol(anyType) &&
        isSymbol(voidType) &&
        isSymbol(unknownType)
      ) {
        expectTypeOf(primitiveTypes).toEqualTypeOf<symbol>();
        expectTypeOf(objectTypes).toEqualTypeOf<ObjectTypes & symbol>(); // never
        expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes & symbol>(); // never
        expectTypeOf(literalTypes).toEqualTypeOf<never>();
        expectTypeOf(neverType).toEqualTypeOf<never>();
        expectTypeOf(anyType).toEqualTypeOf<symbol>();
        expectTypeOf(voidType).toEqualTypeOf<never>();
        expectTypeOf(unknownType).toEqualTypeOf<symbol>();
      }
    };
  });
});

describe('isObject', () => {
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
      if (
        isObject(primitiveTypes) &&
        isObject(objectTypes) &&
        isObject(functionTypes) &&
        isObject(literalTypes) &&
        isObject(neverType) &&
        isObject(anyType) &&
        isObject(voidType) &&
        isObject(unknownType)
      ) {
        expectTypeOf(primitiveTypes).toEqualTypeOf<never>();
        expectTypeOf(objectTypes).toEqualTypeOf<ObjectTypes>();
        expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes>();
        expectTypeOf(literalTypes).toEqualTypeOf<never>();
        expectTypeOf(neverType).toEqualTypeOf<never>();
        expectTypeOf(anyType).toEqualTypeOf<object>();
        expectTypeOf(voidType).toEqualTypeOf<never>();
        expectTypeOf(unknownType).toEqualTypeOf<object>();
      }
    };
  });
});

describe('isNullableObject', () => {
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
      if (
        isNullableObject(primitiveTypes) &&
        isNullableObject(objectTypes) &&
        isNullableObject(functionTypes) &&
        isNullableObject(literalTypes) &&
        isNullableObject(neverType) &&
        isNullableObject(anyType) &&
        isNullableObject(voidType) &&
        isNullableObject(unknownType)
      ) {
        expectTypeOf(primitiveTypes).toEqualTypeOf<null>();
        expectTypeOf(objectTypes).toEqualTypeOf<ObjectTypes>();
        expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes>();
        expectTypeOf(literalTypes).toEqualTypeOf<never>();
        expectTypeOf(neverType).toEqualTypeOf<never>();
        expectTypeOf(anyType).toEqualTypeOf<object | null>();
        expectTypeOf(voidType).toEqualTypeOf<never>();
        expectTypeOf(unknownType).toEqualTypeOf<object | null>();
      }
    };
  });
});

describe('isArray', () => {
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
      if (
        isArray(primitiveTypes) &&
        isArray(objectTypes) &&
        isArray(functionTypes) &&
        isArray(literalTypes) &&
        isArray(neverType) &&
        isArray(anyType) &&
        isArray(voidType) &&
        isArray(unknownType)
      ) {
        expectTypeOf(primitiveTypes).toEqualTypeOf<
          PrimitiveTypes & unknown[]
        >(); // never
        expectTypeOf(objectTypes).toEqualTypeOf<
          [] | [1, 2, 3] | number[] | string[] | boolean[] | unknown[]
        >();
        expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes & unknown[]>(); // never
        expectTypeOf(literalTypes).toEqualTypeOf<LiteralTypes & unknown[]>(); // never
        expectTypeOf(neverType).toEqualTypeOf<never>();
        expectTypeOf(anyType).toEqualTypeOf<unknown[]>();
        expectTypeOf(voidType).toEqualTypeOf<void & unknown[]>(); // never
        expectTypeOf(unknownType).toEqualTypeOf<unknown[]>();
      }
    };
  });
});

describe('isFunction', () => {
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
      if (
        isFunction(primitiveTypes) &&
        isFunction(objectTypes) &&
        isFunction(functionTypes) &&
        isFunction(literalTypes) &&
        isFunction(neverType) &&
        isFunction(anyType) &&
        isFunction(voidType) &&
        isFunction(unknownType)
      ) {
        expectTypeOf(primitiveTypes).toEqualTypeOf<never>();
        expectTypeOf(objectTypes).toEqualTypeOf<never>();
        expectTypeOf(functionTypes).toEqualTypeOf<FunctionTypes>();
        expectTypeOf(literalTypes).toEqualTypeOf<never>();
        expectTypeOf(neverType).toEqualTypeOf<never>();
        expectTypeOf(anyType).toEqualTypeOf<any>();
        expectTypeOf(voidType).toEqualTypeOf<never>();
        expectTypeOf(unknownType).toEqualTypeOf<never>();
      }
    };
  });
});
