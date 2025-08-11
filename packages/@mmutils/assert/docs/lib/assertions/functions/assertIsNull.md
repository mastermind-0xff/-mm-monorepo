[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsNull

# Function: assertIsNull()

> **assertIsNull**(`value`, `error`): `asserts value is null`

Defined in: [packages/@mmutils/assert/src/lib/assertions.ts:99](https://github.com/mastermind-0xff/-mm-monorepo/blob/ae77bebbedeaf68ca437dc22abf389b1b28fc898/packages/@mmutils/assert/src/lib/assertions.ts#L99)

Asserts that the given value is null. Throws an Error instance if it's not.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not null.

### error

Optional error message or Error instance. Defaults to TypeError.

`string` | `Error`

## Returns

`asserts value is null`

## Throws

TypeError, Error, or a custom Error instance.
