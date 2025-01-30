[**@mmtypes/common**](../../../README.md)

***

[@mmtypes/common](../../../modules.md) / [utility/array](../README.md) / AtLeastOneItem

# Type Alias: AtLeastOneItem\<T\>

> **AtLeastOneItem**\<`T`\>: \[`T`\[`number`\], `...T[number][]`\]

Defined in: utility/array.ts:82

At least one item from a tuple or an array T is required.

---
_**Examples:**_
```typescript
type T1 = AtLeastOneItem<[]>; // [never, ...never[]]
type T2 = AtLeastOneItem<[1]>; // [1, ...1[]]
type T3 = AtLeastOneItem<[1,2,3]>; // [1 | 2 | 3, ...(1 | 2 | 3)[]]

const x1: AtLeastOneItem<[1,2,3]> = []; // NOT ok
const x2: AtLeastOneItem<[1,2,3]> = [2]; // ok
const x3: AtLeastOneItem<[1,2,3]> = [3,1,2]; // ok
const x4: AtLeastOneItem<[1,2,3]> = [3,1,2,4]; // NOT ok
```

## Type Parameters

• **T** *extends* `unknown`[] \| readonly `unknown`[]
