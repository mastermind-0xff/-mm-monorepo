[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsBoolean

# Function: assertIsBoolean()

> **assertIsBoolean**(`value`, `error`): `asserts value is boolean`

Defined in: [packages/@mmutils/assert/src/lib/assertions.ts:126](https://github.com/mastermind-0xff/-mm-monorepo/blob/ca3710bd8bb8c2ee105ac4cbba3822a7d96ba98d/packages/@mmutils/assert/src/lib/assertions.ts#L126)

Asserts that the given value is a boolean. Throws an Error instance if it's
not.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not a boolean.

### error

Optional error message or Error instance. Defaults to TypeError.

`string` | `Error`

## Returns

`asserts value is boolean`

## Throws

TypeError, Error, or a custom Error instance.
