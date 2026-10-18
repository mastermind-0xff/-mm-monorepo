[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsString

# Function: assertIsString()

> **assertIsString**(`value`, `error?`): `asserts value is string`

Defined in: [src/lib/assertions.ts:168](https://github.com/mastermind-0xff/-mm-monorepo/blob/15c53393182e77c18f7ab63c27f8a96727021afe/packages/@mmutils/assert/src/lib/assertions.ts#L168)

Asserts that the given value is a string. Throws an Error instance if it's
not.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not a string.

### error?

`string` \| `Error` = `...`

Optional error message or Error instance. Defaults to TypeError.

## Returns

`asserts value is string`

## Throws

TypeError, Error, or a custom Error instance.
