[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [lib/assertions](../README.md) / assertIsNullableObject

# Function: assertIsNullableObject()

> **assertIsNullableObject**(`value`, `error`): asserts value is null \| object

Defined in: packages/@mmutils/assert/src/lib/assertions.ts:212

Asserts that the given value is an object. Throws an Error instance if it's
not.
**Null is** included in this assertion.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not an object.

### error

Optional error message or Error instance. Defaults to TypeError.

`string` | `Error`

## Returns

asserts value is null \| object

## Throws

TypeError, Error, or a custom Error instance.
