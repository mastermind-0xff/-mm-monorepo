[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [lib/assertions](../README.md) / assertIsString

# Function: assertIsString()

> **assertIsString**(`value`, `error`): `asserts value is string`

Defined in: packages/@mmutils/assert/src/lib/assertions.ts:168

Asserts that the given value is a string. Throws an Error instance if it's
not.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not a string.

### error

Optional error message or Error instance. Defaults to TypeError.

`string` | `Error`

## Returns

`asserts value is string`

## Throws

TypeError, Error, or a custom Error instance.
