[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/primitives](../README.md) / isNullableObject

# Function: isNullableObject()

> **isNullableObject**(`value`): value is object \| null

Defined in: [src/lib/primitives.ts:86](https://github.com/mastermind-0xff/-mm-monorepo/blob/78834c21b24a02741ae7a3119678886e216545e6/packages/@mmutils/assert/src/lib/primitives.ts#L86)

Checks the provided value is an object. Includes null, reflecting
JavaScript’s typeof null === 'object' behavior.

## Parameters

### value

`unknown`

Value to be checked.

## Returns

value is object \| null

True if value is an object, false otherwise.
