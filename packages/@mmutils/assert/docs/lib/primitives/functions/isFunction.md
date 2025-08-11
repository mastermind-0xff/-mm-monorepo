[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [lib/primitives](../README.md) / isFunction

# Function: isFunction()

> **isFunction**\<`T`\>(`value`): value is Extract\<T, Callable \| Newable \| Callable & Newable\>

Defined in: packages/@mmutils/assert/src/lib/primitives.ts:102

Checks the provided value is a function.

## Type Parameters

• **T**

## Parameters

### value

`T`

Value to be checked.

## Returns

value is Extract\<T, Callable \| Newable \| Callable & Newable\>

True if value is a function, false otherwise.
