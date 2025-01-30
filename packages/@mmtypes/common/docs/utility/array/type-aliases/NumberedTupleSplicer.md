[**@mmtypes/common**](../../../README.md)

***

[@mmtypes/common](../../../modules.md) / [utility/array](../README.md) / NumberedTupleSplicer

# Type Alias: NumberedTupleSplicer\<ValuesTuple, NumsTuple, R\>

> **NumberedTupleSplicer**\<`ValuesTuple`, `NumsTuple`, `R`\>: `R`\[keyof `R`\][]

Defined in: utility/array.ts:43

Creates tuple of type [NumsTuple[n], ValuesTuple[NumsTuple[n]]] the
intersecting keys from ValuesTuple and NumsTuple values. The resulting 0
index tuple element will have the type of NumsTuple[n].

---
_**Examples:**_
```typescript
type T1 = NumberedTupleSplicer<['a', 'b', 'c']>; // (["0", "a"] | ["1", "b"] | ["2", "c"])[]
type T2 = NumberedTupleSplicer<['a', 'b', 'c'], [0, 1, 2]>; // ([0, "a"] | [1, "b"] | [2, "c"])[]
type T3 = NumberedTupleSplicer<['a', 'b', 'c', 'd'], ['1', '3', '5']>; // (["1", "b"] | ["3", "d"])[]
```

## Type Parameters

• **ValuesTuple** *extends* `ArrayLike`\<`unknown`\>

• **NumsTuple** *extends* `ArrayLike`\<`string` \| `number`\> = [`TupleOfNElements`](TupleOfNElements.md)\<`ValuesTuple`\[`"length"`\]\>

• **R** = `{ [K in Extract<NumsTuple[number], keyof ValuesTuple>]: [K, ValuesTuple[K]] }`
