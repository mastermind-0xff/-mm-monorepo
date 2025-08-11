[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [lib/assertions](../README.md) / assertIsBigInt

# Function: assertIsBigInt()

> **assertIsBigInt**(`value`, `error`): `asserts value is bigint`

Defined in: packages/@mmutils/assert/src/lib/assertions.ts:154

Asserts that the given value is a bigint. Throws an Error instance if it's
not.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not a bigint.

### error

Optional error message or Error instance. Defaults to TypeError.

`string` | `Error`

## Returns

`asserts value is bigint`

## Throws

TypeError, Error, or a custom Error instance.
