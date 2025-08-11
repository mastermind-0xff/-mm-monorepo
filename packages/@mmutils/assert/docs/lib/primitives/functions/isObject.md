[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [lib/primitives](../README.md) / isObject

# Function: isObject()

> **isObject**(`value`): `value is object`

Defined in: packages/@mmutils/assert/src/lib/primitives.ts:77

Checks the provided value is an object of any type. Excludes null to match
TypeScript's object and null type separation.

## Parameters

### value

`unknown`

Value to be checked.

## Returns

`value is object`

True if value is an object, false otherwise.
