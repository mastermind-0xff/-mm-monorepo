**@mmutils/assert**

***

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
  assertIsNumber,
  assertIsObject,
  assertIsString,
  assertIsSymbol,
  isArray,
  isBigInt,
  isBoolean,
  isFunction,
  isNonNullish,
  isNumber,
  isObject,
  isString,
  isSymbol,
} from '@mmutils/assert';
// or
import {
  assert,
  assertIsArray,
  assertIsBigInt,
  assertIsBoolean,
  assertIsFunction,
  assertIsNonNullish,
  assertIsNumber,
  assertIsObject,
  assertIsString,
  assertIsSymbol,
  isArray,
  isBigInt,
  isBoolean,
  isFunction,
  isNonNullish,
  isNumber,
  isObject,
  isString,
  isSymbol,
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
  assertIsNumber,
  assertIsObject,
  assertIsString,
  assertIsSymbol,
  isArray,
  isBigInt,
  isBoolean,
  isFunction,
  isNonNullish,
  isNumber,
  isObject,
  isString,
  isSymbol,
} = require('@mmutils/assert');
// or
const {
  assert,
  assertIsArray,
  assertIsBigInt,
  assertIsBoolean,
  assertIsFunction,
  assertIsNonNullish,
  assertIsNumber,
  assertIsObject,
  assertIsString,
  assertIsSymbol,
  isArray,
  isBigInt,
  isBoolean,
  isFunction,
  isNonNullish,
  isNumber,
  isObject,
  isString,
  isSymbol,
} = require('@mmutils/assert/cjs/');
```

## Changelog

### v0.0.1

Initial release.

## Usage

Check the corresponding [docs](docs/modules.md) for reference guide.

## License

This project is licensed under the MIT License.
