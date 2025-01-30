**@mmtypes/common**

***

# Common TypeScript types

Collection of common reusable types for TypeScript.

## Installation

### Install the package

```sh
npm install @mmtypes/common
# or
yarn add @mmtypes/common
```

### Import

```typescript
import type {
  AtLeastOneItem,
  AtLeastOneProperty,
  EmptyObject,
  IfNumberLiteral,
  NumberedTupleSplicer,
  ObjectEntries,
  StringLiteralToCharTuple,
  TupleOfNElements,
} from '@mmtypes/common';
```

## Changelog

### v0.0.1

Initial release.

## Usage

### type `AtLeastOneItem`:

At least one item from a tuple or an array T is required.

```typescript
type T1 = AtLeastOneItem<[]>; // [never, ...never[]]
type T2 = AtLeastOneItem<[1]>; // [1, ...1[]]
type T3 = AtLeastOneItem<[1, 2, 3]>; // [1 | 2 | 3, ...(1 | 2 | 3)[]]

const x1: AtLeastOneItem<[1, 2, 3]> = []; // NOT ok
const x2: AtLeastOneItem<[1, 2, 3]> = [2]; // ok
const x3: AtLeastOneItem<[1, 2, 3]> = [3, 1, 2]; // ok
const x4: AtLeastOneItem<[1, 2, 3]> = [3, 1, 2, 4]; // NOT ok
```

### type `AtLeastOneProperty`:

At least one property from the provided object T is required.

```typescript
const x1: AtLeastOneProperty<{ a: number; b: number }> = {}; // NOT ok
const x2: AtLeastOneProperty<{ a: number; b: number }> = { a: 1 }; // ok
const x3: AtLeastOneProperty<{ a: number; b: number }> = { b: 2 }; // ok
const x4: AtLeastOneProperty<{ a: number; b: number }> = { a: 1, b: 2, c: 3 }; // NOT ok
```

### type `EmptyObject`:

Accepts only empty object '{}'.

```typescript
const x1: EmptyObject = {}; // ok
const x2: EmptyObject = []; // NOT ok
const x3: EmptyObject = { a: 1 }; // NOT ok
```

### type `IfNumberLiteral`:

eturns Y type if T is number literal and N type if it's not.

```typescript
type T1 = IfNumberLiteral<number>; // false
type T2 = IfNumberLiteral<1>; // true
type T3 = IfNumberLiteral<1, { a: 1 }, { b: 2 }>; // { a: 1 }
```

### type `NumberedTupleSplicer`:

Creates tuple of type [NumsTuple[n], ValuesTuple[NumsTuple[n]]] the intersecting keys from ValuesTuple and NumsTuple values. The resulting 0 index tuple element will have the type of NumsTuple[n].

```typescript
type T1 = NumberedTupleSplicer<['a', 'b', 'c']>; // (["0", "a"] | ["1", "b"] | ["2", "c"])[]
type T2 = NumberedTupleSplicer<['a', 'b', 'c'], [0, 1, 2]>; // ([0, "a"] | [1, "b"] | [2, "c"])[]
type T3 = NumberedTupleSplicer<['a', 'b', 'c', 'd'], ['1', '3', '5']>; // (["1", "b"] | ["3", "d"])[]
```

### type `ObjectEntries`:

Narrower return type for Object.entries based on the input type, what JS returns and what are the build in types from TypeScript.

WARNING: Do not use this type if you are not certain that the object you iterate over won't change during runtime.

```typescript
type T1 = ObjectEntries<{ a: number; b: string }>; // (["a", number] | ["b", string])[]
type T2 = ObjectEntries<{ a: 123; b: 'abc' }>; // (["a", 123] | ["b", "abc"])[]
type T3 = ObjectEntries<{}>; // [string, unknown][]
type T4 = ObjectEntries<[]>; // [string, never][]
type T5 = ObjectEntries<'abc'>; // (["0", "a"] | ["1", "b"] | ["2", "c"])[]
type T6 = ObjectEntries<string>; // [string, string][]
type T7 = ObjectEntries<readonly ['a', 'b']>; // (["0", "a"] | ["1", "b"])[]
type T8 = ObjectEntries<[string, number, ...boolean[]]>; // [string, string | number | boolean][]
type T9 = ObjectEntries<number | boolean | bigint>; // [string, any][]
```

### type `StringLiteralToCharTuple`:

Converts a string literal to a char literal tuple.

```typescript
type T1 = StringLiteralToCharTuple<'abc'>; // ["a", "b", "c"]
```

### type `TupleOfNElements`:

Provide a number N to generate numbered tuple of N elements. If AsString is false, the tuple elements are number literals.

```typescript
type T1 = TupleOfNElements<3>; // ['0','1','2']
type T2 = TupleOfNElements<3, true>; // ['0','1','2']
type T3 = TupleOfNElements<3, false>; // [0,1,2]
```

## License

This project is licensed under the MIT License.
