[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [lib/primitives](../README.md) / isNullableObject

# Function: isNullableObject()

> **isNullableObject**(`value`): value is null \| object

Defined in: packages/@mmutils/assert/src/lib/primitives.ts:86

Checks the provided value is an object. Includes null, reflecting
JavaScript’s typeof null === 'object' behavior.

## Parameters

### value

`unknown`

Value to be checked.

## Returns

value is null \| object

True if value is an object, false otherwise.
