[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / AsyncIterator

# Interface: AsyncIterator\<T, TReturn, TNext\>

Defined in: node\_modules/@types/node/compatibility/iterators.d.ts:15

An async iterable iterator returned by the Node.js API.

## Extends

- `AsyncIterator`\<`T`, `TReturn`, `TNext`\>
- `AsyncIteratorObject`\<`T`, `TReturn`, `TNext`\>

## Type Parameters

### T

`T`

### TReturn

`TReturn`

### TNext

`TNext`

## Methods

### \[asyncDispose\]()

> **\[asyncDispose\]**(): `PromiseLike`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.esnext.disposable.d.ts:38

#### Returns

`PromiseLike`\<`void`\>

***

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<`T`, `TReturn`, `TNext`\>

Defined in: node\_modules/@types/node/globals.d.ts:142

#### Returns

`AsyncIterator`\<`T`, `TReturn`, `TNext`\>

***

### next()

> **next**(...`__namedParameters`): `Promise`\<`IteratorResult`\<`T`, `TReturn`\>\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:30

#### Parameters

##### \_\_namedParameters

\[\] \| \[`TNext`\]

#### Returns

`Promise`\<`IteratorResult`\<`T`, `TReturn`\>\>

#### Inherited from

`globalThis.AsyncIterator.next`

***

### return()?

> `optional` **return**(`value?`): `Promise`\<`IteratorResult`\<`T`, `TReturn`\>\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:31

#### Parameters

##### value?

`TReturn` \| `PromiseLike`\<`TReturn`\>

#### Returns

`Promise`\<`IteratorResult`\<`T`, `TReturn`\>\>

#### Inherited from

`globalThis.AsyncIterator.return`

***

### throw()?

> `optional` **throw**(`e?`): `Promise`\<`IteratorResult`\<`T`, `TReturn`\>\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:32

#### Parameters

##### e?

`any`

#### Returns

`Promise`\<`IteratorResult`\<`T`, `TReturn`\>\>

#### Inherited from

`globalThis.AsyncIterator.throw`
