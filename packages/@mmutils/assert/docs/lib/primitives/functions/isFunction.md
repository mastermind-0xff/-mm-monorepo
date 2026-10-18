[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/primitives](../README.md) / isFunction

# Function: isFunction()

> **isFunction**\<`T`\>(`value`): value is Extract\<T, Callable \| Newable \| Callable & Newable\>

Defined in: [src/lib/primitives.ts:102](https://github.com/mastermind-0xff/-mm-monorepo/blob/78834c21b24a02741ae7a3119678886e216545e6/packages/@mmutils/assert/src/lib/primitives.ts#L102)

Checks the provided value is a function.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

Value to be checked.

## Returns

value is Extract\<T, Callable \| Newable \| Callable & Newable\>

True if value is a function, false otherwise.
