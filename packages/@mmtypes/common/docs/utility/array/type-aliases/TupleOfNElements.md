[**@mmtypes/common**](../../../README.md)

***

[@mmtypes/common](../../../modules.md) / [utility/array](../README.md) / TupleOfNElements

# Type Alias: TupleOfNElements\<N, AsString, Aggregate\>

> **TupleOfNElements**\<`N`, `AsString`, `Aggregate`\> = `Aggregate`\[`"length"`\] *extends* `N` ? `Aggregate` : `TupleOfNElements`\<`N`, `AsString`, \[`...Aggregate`, `AsString` *extends* `true` ? `` `${Aggregate["length"]}` `` : `Aggregate`\[`"length"`\]\]\>

Defined in: [utility/array.ts:14](https://github.com/mastermind-0xff/-mm-monorepo/blob/9183ce548bcc4fccff7ed80ba5a34f5f37094be0/packages/@mmtypes/common/src/utility/array.ts#L14)

Provide a number N to generate numbered tuple of N elements. If AsString is
false, the tuple elements are number literals.

---
_**Examples:**_
```typescript
type T1 = TupleOfNElements<3>; // ['0','1','2']
type T2 = TupleOfNElements<3, true>; // ['0','1','2']
type T3 = TupleOfNElements<3, false>; // [0,1,2]
```

## Type Parameters

### N

`N` *extends* `number`

### AsString

`AsString` *extends* `boolean` = `true`

### Aggregate

`Aggregate` *extends* `unknown`[] = \[\]
