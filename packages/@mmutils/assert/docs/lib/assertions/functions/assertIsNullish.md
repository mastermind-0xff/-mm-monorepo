[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [lib/assertions](../README.md) / assertIsNullish

# Function: assertIsNullish()

> **assertIsNullish**(`value`, `error`): asserts value is undefined \| null

Defined in: packages/@mmutils/assert/src/lib/assertions.ts:69

Asserts that the given value is nullish. Throws an Error instance if it's not.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not null or
undefined.

### error

Optional error message or Error instance. Defaults to TypeError.

`string` | `Error`

## Returns

asserts value is undefined \| null

## Throws

TypeError, Error, or a custom Error instance.
