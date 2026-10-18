[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsFunction

# Function: assertIsFunction()

> **assertIsFunction**\<`T`\>(`value`, `error?`): asserts value is Extract\<T, Callable \| Newable \| Callable & Newable\>

Defined in: [src/lib/assertions.ts:243](https://github.com/mastermind-0xff/-mm-monorepo/blob/78834c21b24a02741ae7a3119678886e216545e6/packages/@mmutils/assert/src/lib/assertions.ts#L243)

Asserts that the given value is a function. Throws an Error instance if it's
not.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

The value to be checked. Throws an error if not a function.

### error?

`string` \| `Error` = `...`

Optional error message or Error instance. Defaults to TypeError.

## Returns

asserts value is Extract\<T, Callable \| Newable \| Callable & Newable\>

## Throws

TypeError, Error, or a custom Error instance.
