[**@mmtypes/common**](../../../README.md)

***

[@mmtypes/common](../../../modules.md) / [object/entries](../README.md) / ObjectEntries

# Type Alias: ObjectEntries\<T\>

> **ObjectEntries**\<`T`\>: `T` *extends* `undefined` \| `null` ? `never` : `T` *extends* \[\] ? \[`string`, `never`\][] : `T` *extends* [`EmptyObject`](../../../utility/object/type-aliases/EmptyObject.md) ? `ReturnType`\<*typeof* `Object.entries`\> : `T` *extends* `` `${infer Chars}` `` ? [`NumberedTupleSplicer`](../../../utility/array/type-aliases/NumberedTupleSplicer.md)\<[`StringLiteralToCharTuple`](../../../utility/array/type-aliases/StringLiteralToCharTuple.md)\<`Chars`\>\> : `T` *extends* `string` ? \[`string`, `string`\][] : `T` *extends* `ReadonlyArray`\<infer KeysType\> ? [`IfNumberLiteral`](../../../utility/comparison/type-aliases/IfNumberLiteral.md)\<`T`\[`"length"`\], [`NumberedTupleSplicer`](../../../utility/array/type-aliases/NumberedTupleSplicer.md)\<`T`\>, \[`string`, `KeysType`\][]\> : `T` *extends* `object` ? `Exclude`\<`{ [K in (...)]: (...) }`\[... & ...\], `undefined`\>[] : `ReturnType`\<*typeof* `Object.entries`\>

Defined in: object/entries.ts:29

Narrower return type for Object.entries based on the input type, what JS
returns and what are the build in types from TypeScript.

_**WARNING**: Do not use this type if you are not certain that the object you
iterate over won't change during runtime._

---
_**Examples:**_
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

## Type Parameters

• **T**
