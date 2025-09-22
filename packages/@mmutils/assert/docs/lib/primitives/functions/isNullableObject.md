[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/primitives](../README.md) / isNullableObject

# Function: isNullableObject()

> **isNullableObject**(`value`): value is null \| object

Defined in: [packages/@mmutils/assert/src/lib/primitives.ts:86](https://github.com/mastermind-0xff/-mm-monorepo/blob/3e4b2477717eab2e4a04b9b069db2113414b3f32/packages/@mmutils/assert/src/lib/primitives.ts#L86)

Checks the provided value is an object. Includes null, reflecting
JavaScript’s typeof null === 'object' behavior.

## Parameters

### value

`unknown`

Value to be checked.

## Returns

value is null \| object

True if value is an object, false otherwise.
