[**@mmtypes/common**](../../../README.md)

***

[@mmtypes/common](../../../modules.md) / [utility/comparison](../README.md) / IfNumberLiteral

# Type Alias: IfNumberLiteral\<T, Y, N\>

> **IfNumberLiteral**\<`T`, `Y`, `N`\>: `number` *extends* `T` ? `N` : \[`T`\] *extends* \[`never`\] ? `N` : \[`T`\] *extends* \[`number`\] ? `Y` : `N`

Defined in: utility/comparison.ts:13

Returns Y type if T is number literal and N type if it's not.

---
_**Examples:**_
```typescript
type T1 = IfNumberLiteral<number>; // false
type T2 = IfNumberLiteral<1>; // true
type T3 = IfNumberLiteral<1, { a: 1 }, { b: 2 }>; // { a: 1 }
```

## Type Parameters

• **T**

• **Y** = `true`

• **N** = `false`
