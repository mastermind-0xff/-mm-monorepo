[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/primitives](../README.md) / isFunction

# Function: isFunction()

> **isFunction**\<`T`\>(`value`): value is Extract\<T, Callable \| Newable \| Callable & Newable\>

Defined in: [src/lib/primitives.ts:102](https://github.com/mastermind-0xff/-mm-monorepo/blob/15c53393182e77c18f7ab63c27f8a96727021afe/packages/@mmutils/assert/src/lib/primitives.ts#L102)

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
