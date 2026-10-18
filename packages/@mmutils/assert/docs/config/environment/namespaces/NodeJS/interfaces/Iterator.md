[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / Iterator

# Interface: Iterator\<T, TReturn, TNext\>

Defined in: node\_modules/@types/node/compatibility/iterators.d.ts:14

An iterable iterator returned by the Node.js API.

## Extends

- `Iterator`\<`T`, `TReturn`, `TNext`\>
- `IteratorObject`\<`T`, `TReturn`, `TNext`\>

## Type Parameters

### T

`T`

### TReturn

`TReturn`

### TNext

`TNext`

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: node\_modules/typescript/lib/lib.esnext.disposable.d.ts:34

#### Returns

`void`

***

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`T`, `TReturn`, `TNext`\>

Defined in: node\_modules/@types/node/globals.d.ts:137

#### Returns

`Iterator`\<`T`, `TReturn`, `TNext`\>

***

### next()

> **next**(...`__namedParameters`): `IteratorResult`\<`T`, `TReturn`\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:41

#### Parameters

##### \_\_namedParameters

\[\] \| \[`TNext`\]

#### Returns

`IteratorResult`\<`T`, `TReturn`\>

#### Inherited from

`globalThis.Iterator.next`

***

### return()?

> `optional` **return**(`value?`): `IteratorResult`\<`T`, `TReturn`\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:42

#### Parameters

##### value?

`TReturn`

#### Returns

`IteratorResult`\<`T`, `TReturn`\>

#### Inherited from

`globalThis.Iterator.return`

***

### throw()?

> `optional` **throw**(`e?`): `IteratorResult`\<`T`, `TReturn`\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:43

#### Parameters

##### e?

`any`

#### Returns

`IteratorResult`\<`T`, `TReturn`\>

#### Inherited from

`globalThis.Iterator.throw`
