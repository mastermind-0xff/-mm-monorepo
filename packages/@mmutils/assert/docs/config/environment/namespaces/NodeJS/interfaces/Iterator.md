[**@mmutils/assert-primitive**](../../../../../README.md)

***

[@mmutils/assert-primitive](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / Iterator

# Interface: Iterator\<T, TReturn, TNext\>

Defined in: node\_modules/@types/node/compatibility/iterators.d.ts:14

An iterable iterator returned by the Node.js API.

## Extends

- `Iterator`\<`T`, `TReturn`, `TNext`\>.`IteratorObject`\<`T`, `TReturn`, `TNext`\>

## Type Parameters

• **T**

• **TReturn**

• **TNext**

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:134

## Methods

### \[dispose\]()

#### Call Signature

> **\[dispose\]**(): `void`

Defined in: node\_modules/typescript/lib/lib.esnext.disposable.d.ts:36

##### Returns

`void`

#### Call Signature

> **\[dispose\]**(): `void`

Defined in: node\_modules/@types/node/compatibility/disposable.d.ts:11

##### Returns

`void`

***

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](Iterator.md)\<`T`, `TReturn`, `TNext`\>

Defined in: node\_modules/@types/node/globals.d.ts:441

#### Returns

[`Iterator`](Iterator.md)\<`T`, `TReturn`, `TNext`\>

***

### drop()

> **drop**(`count`): `IteratorObject`\<`T`, `undefined`\>

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:74

Creates an iterator whose values are the values from this iterator after skipping the provided count.

#### Parameters

##### count

`number`

The number of values to drop.

#### Returns

`IteratorObject`\<`T`, `undefined`\>

***

### every()

> **every**(`predicate`): `boolean`

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:122

Determines whether all the members of this iterator satisfy the specified test.

#### Parameters

##### predicate

(`value`, `index`) => `unknown`

A function that accepts up to two arguments. The every method calls
the predicate function for each element in this iterator until the predicate returns
false, or until the end of this iterator.

#### Returns

`boolean`

***

### filter()

#### Call Signature

> **filter**\<`S`\>(`predicate`): `IteratorObject`\<`S`, `undefined`\>

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:56

Creates an iterator whose values are those from this iterator for which the provided predicate returns true.

##### Type Parameters

• **S**

##### Parameters

###### predicate

(`value`, `index`) => `value is S`

A function that accepts up to two arguments to be used to test values from the underlying iterator.

##### Returns

`IteratorObject`\<`S`, `undefined`\>

#### Call Signature

> **filter**(`predicate`): `IteratorObject`\<`T`, `undefined`\>

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:62

Creates an iterator whose values are those from this iterator for which the provided predicate returns true.

##### Parameters

###### predicate

(`value`, `index`) => `unknown`

A function that accepts up to two arguments to be used to test values from the underlying iterator.

##### Returns

`IteratorObject`\<`T`, `undefined`\>

***

### find()

#### Call Signature

> **find**\<`S`\>(`predicate`): `undefined` \| `S`

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:131

Returns the value of the first element in this iterator where predicate is true, and undefined
otherwise.

##### Type Parameters

• **S**

##### Parameters

###### predicate

(`value`, `index`) => `value is S`

find calls predicate once for each element of this iterator, in
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

##### Returns

`undefined` \| `S`

#### Call Signature

> **find**(`predicate`): `undefined` \| `T`

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:132

##### Parameters

###### predicate

(`value`, `index`) => `unknown`

##### Returns

`undefined` \| `T`

***

### flatMap()

> **flatMap**\<`U`\>(`callback`): `IteratorObject`\<`U`, `undefined`\>

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:80

Creates an iterator whose values are the result of applying the callback to the values from this iterator and then flattening the resulting iterators or iterables.

#### Type Parameters

• **U**

#### Parameters

##### callback

(`value`, `index`) => `Iterator`\<`U`, `unknown`, `undefined`\> \| `Iterable`\<`U`, `unknown`, `undefined`\>

A function that accepts up to two arguments to be used to transform values from the underlying iterator into new iterators or iterables to be flattened into the result.

#### Returns

`IteratorObject`\<`U`, `undefined`\>

***

### forEach()

> **forEach**(`callbackfn`): `void`

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:106

Performs the specified action for each element in the iterator.

#### Parameters

##### callbackfn

(`value`, `index`) => `void`

A function that accepts up to two arguments. forEach calls the callbackfn function one time for each element in the iterator.

#### Returns

`void`

***

### map()

> **map**\<`U`\>(`callbackfn`): `IteratorObject`\<`U`, `undefined`\>

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:50

Creates an iterator whose values are the result of applying the callback to the values from this iterator.

#### Type Parameters

• **U**

#### Parameters

##### callbackfn

(`value`, `index`) => `U`

A function that accepts up to two arguments to be used to transform values from the underlying iterator.

#### Returns

`IteratorObject`\<`U`, `undefined`\>

***

### next()

> **next**(...`__namedParameters`): `IteratorResult`\<`T`, `TReturn`\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:43

#### Parameters

##### \_\_namedParameters

\[\] | \[`TNext`\]

#### Returns

`IteratorResult`\<`T`, `TReturn`\>

#### Inherited from

`globalThis.Iterator.next`

***

### reduce()

#### Call Signature

> **reduce**(`callbackfn`): `T`

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:87

Calls the specified callback function for all the elements in this iterator. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`) => `T`

A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the iterator.

##### Returns

`T`

#### Call Signature

> **reduce**(`callbackfn`, `initialValue`): `T`

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:88

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`) => `T`

###### initialValue

`T`

##### Returns

`T`

#### Call Signature

> **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:95

Calls the specified callback function for all the elements in this iterator. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

• **U**

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`) => `U`

A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the iterator.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of a value from the iterator.

##### Returns

`U`

***

### return()?

> `optional` **return**(`value`?): `IteratorResult`\<`T`, `TReturn`\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:44

#### Parameters

##### value?

`TReturn`

#### Returns

`IteratorResult`\<`T`, `TReturn`\>

#### Inherited from

`globalThis.Iterator.return`

***

### some()

> **some**(`predicate`): `boolean`

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:114

Determines whether the specified callback function returns true for any element of this iterator.

#### Parameters

##### predicate

(`value`, `index`) => `unknown`

A function that accepts up to two arguments. The some method calls
the predicate function for each element in this iterator until the predicate returns a value
true, or until the end of the iterator.

#### Returns

`boolean`

***

### take()

> **take**(`limit`): `IteratorObject`\<`T`, `undefined`\>

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:68

Creates an iterator whose values are the values from this iterator, stopping once the provided limit is reached.

#### Parameters

##### limit

`number`

The maximum number of values to yield.

#### Returns

`IteratorObject`\<`T`, `undefined`\>

***

### throw()?

> `optional` **throw**(`e`?): `IteratorResult`\<`T`, `TReturn`\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:45

#### Parameters

##### e?

`any`

#### Returns

`IteratorResult`\<`T`, `TReturn`\>

#### Inherited from

`globalThis.Iterator.throw`

***

### toArray()

> **toArray**(): `T`[]

Defined in: node\_modules/typescript/lib/lib.esnext.iterator.d.ts:100

Creates a new array from the values yielded by this iterator.

#### Returns

`T`[]
