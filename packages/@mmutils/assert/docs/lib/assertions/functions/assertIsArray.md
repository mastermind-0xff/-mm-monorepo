[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsArray

# Function: assertIsArray()

> **assertIsArray**(`value`, `error`): `asserts value is unknown[]`

Defined in: [packages/@mmutils/assert/src/lib/assertions.ts:229](https://github.com/mastermind-0xff/-mm-monorepo/blob/3e4b2477717eab2e4a04b9b069db2113414b3f32/packages/@mmutils/assert/src/lib/assertions.ts#L229)

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
