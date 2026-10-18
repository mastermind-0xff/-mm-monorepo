[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsArray

# Function: assertIsArray()

> **assertIsArray**(`value`, `error?`): `asserts value is unknown[]`

Defined in: [packages/@mmutils/assert/src/lib/assertions.ts:229](https://github.com/mastermind-0xff/-mm-monorepo/blob/0c1e0a87a311ce2ea91722e4fbc94791a49b0cbb/packages/@mmutils/assert/src/lib/assertions.ts#L229)

Asserts that the given value is an array. Throws an Error instance if it's
not.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not an array.

### error?

`string` \| `Error` = `...`

Optional error message or Error instance. Defaults to TypeError.

## Returns

`asserts value is unknown[]`

## Throws

TypeError, Error, or a custom Error instance.
