[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsBoolean

# Function: assertIsBoolean()

> **assertIsBoolean**(`value`, `error?`): `asserts value is boolean`

Defined in: [packages/@mmutils/assert/src/lib/assertions.ts:126](https://github.com/mastermind-0xff/-mm-monorepo/blob/0c1e0a87a311ce2ea91722e4fbc94791a49b0cbb/packages/@mmutils/assert/src/lib/assertions.ts#L126)

Asserts that the given value is a boolean. Throws an Error instance if it's
not.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not a boolean.

### error?

`string` \| `Error` = `...`

Optional error message or Error instance. Defaults to TypeError.

## Returns

`asserts value is boolean`

## Throws

TypeError, Error, or a custom Error instance.
