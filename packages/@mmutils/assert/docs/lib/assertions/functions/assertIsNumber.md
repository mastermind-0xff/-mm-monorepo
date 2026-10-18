[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsNumber

# Function: assertIsNumber()

> **assertIsNumber**(`value`, `error?`): `asserts value is number`

Defined in: [src/lib/assertions.ts:140](https://github.com/mastermind-0xff/-mm-monorepo/blob/78834c21b24a02741ae7a3119678886e216545e6/packages/@mmutils/assert/src/lib/assertions.ts#L140)

Asserts that the given value is a number. Throws an Error instance if it's
not. Nan is not included in the check by default.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not a number.

### error?

`string` \| `Error` = `...`

Optional error message or Error instance. Defaults to TypeError.

## Returns

`asserts value is number`

## Throws

TypeError, Error, or a custom Error instance.
