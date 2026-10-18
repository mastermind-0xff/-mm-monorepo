[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsNullableObject

# Function: assertIsNullableObject()

> **assertIsNullableObject**(`value`, `error?`): asserts value is object \| null

Defined in: [packages/@mmutils/assert/src/lib/assertions.ts:212](https://github.com/mastermind-0xff/-mm-monorepo/blob/0c1e0a87a311ce2ea91722e4fbc94791a49b0cbb/packages/@mmutils/assert/src/lib/assertions.ts#L212)

Asserts that the given value is an object. Throws an Error instance if it's
not.
**Null is** included in this assertion.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not an object.

### error?

`string` \| `Error` = `...`

Optional error message or Error instance. Defaults to TypeError.

## Returns

asserts value is object \| null

## Throws

TypeError, Error, or a custom Error instance.
