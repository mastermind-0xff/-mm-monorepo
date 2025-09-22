# Typed assert utility functions

Assert and type guard functions that utilize TypeScript's type predicates and asserts to narrow down types in Control Flow Analysis at compile time and add fail safe at runtime. Makes refactoring easy and keeps the code clean, no clutter conditions. Supports all primitive types and just a few more to keep the package
clean and light.

## Highlights

Comes in two flavours. assertIs[Type] utilizing asserts and is[Type] utilizing type guards. Under the hood assertIs[Type] uses is[Type].

Assert flavour:

```typescript
const x = (param?: string) => {
  param; // param is string | undefined
  assertIsNonNullish(param); // throws and error if param is undefined or null
  param; // param is string for the rest of the function body
};
```

Condition flavour:

```typescript
const x = (param?: string | string[]) => {
  param; // param is string | string[] | undefined
  if (isNonNullish(param)) {
    param; // param is string | string[] in this code block
  } else if (isArray(param)) {
    param; // param is string[] in this code block
  } else if (isString(param)) {
    param; // param is string in this code block
  }
};
```

## Installation

### Install the package

```sh
npm install @mmutils/assert
# or
yarn add @mmutils/assert
```

### Load as module

```javascript
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
} from '@mmutils/assert';
// or
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
} from '@mmutils/assert/esm/';
```

### Load as commonjs

```javascript
const {
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
} = require('@mmutils/assert');
// or
const {
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
} = require('@mmutils/assert/cjs/');
```

## API

### Usage:

#### is`Type`(`<value>`)

**Type** is one of `<Array | BigInt | Boolean | Function | Null | NullableObject | Nullish | Number | Object | String | Symbol | Undefined>`.  
**value** is of unknown type.

_**examples:**_

```typescript
const math = (x?: number | bigint) => {
  if (isNullish(x)) {
    x; // undefined, notice argument x can't be null
    console.log('Please, provide x. x is undefined or null.');
  } else if (isNumber(x)) {
    x; // number
    console.log('Performing math. x is number.');
    return x * x;
  } else if (isBigInt(x)) {
    x; // bigint
    console.log('Performing big math. x is bigint.');
    return x * x * x;
  }
};
```

#### assert(`<condition>`);

**condition** is a condition to assert or to narrow a type.

_**examples:**_

```typescript
// assert usage

const funcX = (x: unknown) => {
  x; // unknown
  assert(typeof x === 'number'); // throws if x is not number
  x; // number
};

const
```

#### assertNever(`<never-value>`);

**never-value** must be of never type

```typescript
// assertNever usage

const funcY = (x: 'a' | 'b' | 'c') => {
  switch (x) {
    case 'a':
    case 'b':
      // case 'c' not handled
      return x;
    default:
      assertNever(x); // ts error, Argument of type '"c"' is not assignable to parameter of type 'never'.
  }
};

const funcY_fixed = (x: 'a' | 'b' | 'c') => {
  switch (x) {
    case 'a':
    case 'b':
    case 'c':
      return x; // all cases handled
    default:
      assertNever(x); // unreachable default
  }
};
```

#### assertIs`Type`(`value`)

**Type** is one of `<Array | BigInt | Boolean | Function | NonNullish | Null | NullableObject | Nullish | Number | Object | String | Symbol | Undefined>`

**value** is of unknown type.

```typescript
// assert[IsType]

const funcZ = (type: 'a' | 'b', x?: number) => {
  switch (type) {
    case 'a':
      return 1;
    case 'b':
      const math = x * 2; // ts error, x is possibly undefined
      assertIsNumber(x); // throws if x is not number
      const math_safe = x * 2; // x is number
      return math_safe;
  }
};
```

## Changelog

### v0.0.5

- assertNever fixed return type.

### v0.0.4

- Documentation changes.

### v0.0.3

- Removed redundant files.

### v0.0.2

- Documentation changes.

### v0.0.1

- Initial release.

## Usage

Check the corresponding [docs](docs/modules.md) for reference guide.

## License

This project is licensed under the MIT License.
