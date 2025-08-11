[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [lib/assertions](../README.md) / assertIsFunction

# Function: assertIsFunction()

> **assertIsFunction**\<`T`\>(`value`, `error`): asserts value is Extract\<T, Callable \| Newable \| Callable & Newable\>

Defined in: packages/@mmutils/assert/src/lib/assertions.ts:243

Asserts that the given value is a function. Throws an Error instance if it's
not.

## Type Parameters

• **T**

## Parameters

### value

`T`

The value to be checked. Throws an error if not a function.

### error

Optional error message or Error instance. Defaults to TypeError.

`string` | `Error`

## Returns

asserts value is Extract\<T, Callable \| Newable \| Callable & Newable\>

## Throws

TypeError, Error, or a custom Error instance.
