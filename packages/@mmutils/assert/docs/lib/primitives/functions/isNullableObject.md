[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/primitives](../README.md) / isNullableObject

# Function: isNullableObject()

> **isNullableObject**(`value`): value is object \| null

Defined in: [packages/@mmutils/assert/src/lib/primitives.ts:86](https://github.com/mastermind-0xff/-mm-monorepo/blob/0c1e0a87a311ce2ea91722e4fbc94791a49b0cbb/packages/@mmutils/assert/src/lib/primitives.ts#L86)

Checks the provided value is an object. Includes null, reflecting
JavaScript’s typeof null === 'object' behavior.

## Parameters

### value

`unknown`

Value to be checked.

## Returns

value is object \| null

True if value is an object, false otherwise.
