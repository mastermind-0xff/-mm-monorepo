[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsObject

# Function: assertIsObject()

> **assertIsObject**(`value`, `error?`): `asserts value is object`

Defined in: [src/lib/assertions.ts:197](https://github.com/mastermind-0xff/-mm-monorepo/blob/78834c21b24a02741ae7a3119678886e216545e6/packages/@mmutils/assert/src/lib/assertions.ts#L197)

Asserts that the given value is an object. Throws an Error instance if it's
not.
**Null is not** included in this assertion.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not an object.

### error?

`string` \| `Error` = `...`

Optional error message or Error instance. Defaults to TypeError.

## Returns

`asserts value is object`

## Throws

TypeError, Error, or a custom Error instance.
