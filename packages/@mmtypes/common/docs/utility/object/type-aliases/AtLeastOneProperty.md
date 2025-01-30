[**@mmtypes/common**](../../../README.md)

***

[@mmtypes/common](../../../modules.md) / [utility/object](../README.md) / AtLeastOneProperty

# Type Alias: AtLeastOneProperty\<T\>

> **AtLeastOneProperty**\<`T`\>: `{ [K in keyof T]: { [P in K]: T[K] } }`\[keyof `T`\]

Defined in: utility/object.ts:27

At least one property from the provided object T is required.

---
_**Examples:**_
```typescript
const x1: AtLeastOneProperty<{ a: number; b: number }> = { }; // NOT ok
const x2: AtLeastOneProperty<{ a: number; b: number }> = { a: 1 }; // ok
const x3: AtLeastOneProperty<{ a: number; b: number }> = { b: 2 }; // ok
const x4: AtLeastOneProperty<{ a: number; b: number }> = { a: 1, b: 2, c: 3 }; // NOT ok
```

## Type Parameters

• **T**
