[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsObject

# Function: assertIsObject()

> **assertIsObject**(`value`, `error`): `asserts value is object`

Defined in: [packages/@mmutils/assert/src/lib/assertions.ts:197](https://github.com/mastermind-0xff/-mm-monorepo/blob/ca3710bd8bb8c2ee105ac4cbba3822a7d96ba98d/packages/@mmutils/assert/src/lib/assertions.ts#L197)

Asserts that the given value is an object. Throws an Error instance if it's
not.
**Null is not** included in this assertion.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not an object.

### error

Optional error message or Error instance. Defaults to TypeError.

`string` | `Error`

## Returns

`asserts value is object`

## Throws

TypeError, Error, or a custom Error instance.
