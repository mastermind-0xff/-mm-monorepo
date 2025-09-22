[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsUndefined

# Function: assertIsUndefined()

> **assertIsUndefined**(`value`, `error`): `asserts value is undefined`

Defined in: [packages/@mmutils/assert/src/lib/assertions.ts:112](https://github.com/mastermind-0xff/-mm-monorepo/blob/3e4b2477717eab2e4a04b9b069db2113414b3f32/packages/@mmutils/assert/src/lib/assertions.ts#L112)

Asserts that the given value is undefined. Throws an Error instance if it's
not.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not undefined.

### error

Optional error message or Error instance. Defaults to TypeError.

`string` | `Error`

## Returns

`asserts value is undefined`

## Throws

TypeError, Error, or a custom Error instance.
