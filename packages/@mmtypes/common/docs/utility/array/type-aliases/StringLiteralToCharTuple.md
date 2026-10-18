[**@mmtypes/common**](../../../README.md)

***

[@mmtypes/common](../../../modules.md) / [utility/array](../README.md) / StringLiteralToCharTuple

# Type Alias: StringLiteralToCharTuple\<T\>

> **StringLiteralToCharTuple**\<`T`\> = `T` *extends* `` `${infer F}${infer R}` `` ? \[`F`, `...StringLiteralToCharTuple<R>`\] : \[\]

Defined in: [utility/array.ts:63](https://github.com/mastermind-0xff/-mm-monorepo/blob/97c91ccdcd3ee1794a45f999994fea3df2caa9de/packages/@mmtypes/common/src/utility/array.ts#L63)

Converts a string literal to a char literal tuple.

---
_**Examples:**_
```typescript
type T1 = StringLiteralToCharTuple<'abc'>; // ["a", "b", "c"]
```

## Type Parameters

### T

`T` *extends* `string`
