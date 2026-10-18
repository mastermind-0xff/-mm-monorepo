[**@mmtypes/common**](../../../README.md)

***

[@mmtypes/common](../../../modules.md) / [utility/comparison](../README.md) / IfNumberLiteral

# Type Alias: IfNumberLiteral\<T, Y, N\>

> **IfNumberLiteral**\<`T`, `Y`, `N`\> = `number` *extends* `T` ? `N` : \[`T`\] *extends* \[`never`\] ? `N` : \[`T`\] *extends* \[`number`\] ? `Y` : `N`

Defined in: [utility/comparison.ts:13](https://github.com/mastermind-0xff/-mm-monorepo/blob/9183ce548bcc4fccff7ed80ba5a34f5f37094be0/packages/@mmtypes/common/src/utility/comparison.ts#L13)

Returns Y type if T is number literal and N type if it's not.

---
_**Examples:**_
```typescript
type T1 = IfNumberLiteral<number>; // false
type T2 = IfNumberLiteral<1>; // true
type T3 = IfNumberLiteral<1, { a: 1 }, { b: 2 }>; // { a: 1 }
```

## Type Parameters

### T

`T`

### Y

`Y` = `true`

### N

`N` = `false`
