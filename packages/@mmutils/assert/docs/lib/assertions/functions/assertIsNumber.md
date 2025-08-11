[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [lib/assertions](../README.md) / assertIsNumber

# Function: assertIsNumber()

> **assertIsNumber**(`value`, `error`): `asserts value is number`

Defined in: packages/@mmutils/assert/src/lib/assertions.ts:140

Asserts that the given value is a number. Throws an Error instance if it's
not. Nan is not included in the check by default.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not a number.

### error

Optional error message or Error instance. Defaults to TypeError.

`string` | `Error`

## Returns

`asserts value is number`

## Throws

TypeError, Error, or a custom Error instance.
