[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [lib/assertions](../README.md) / assertIsArray

# Function: assertIsArray()

> **assertIsArray**(`value`, `error`): `asserts value is unknown[]`

Defined in: packages/@mmutils/assert/src/lib/assertions.ts:229

Asserts that the given value is an array. Throws an Error instance if it's
not.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not an array.

### error

Optional error message or Error instance. Defaults to TypeError.

`string` | `Error`

## Returns

`asserts value is unknown[]`

## Throws

TypeError, Error, or a custom Error instance.
