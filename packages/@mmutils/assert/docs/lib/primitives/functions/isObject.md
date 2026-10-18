[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/primitives](../README.md) / isObject

# Function: isObject()

> **isObject**(`value`): `value is object`

Defined in: [packages/@mmutils/assert/src/lib/primitives.ts:77](https://github.com/mastermind-0xff/-mm-monorepo/blob/0c1e0a87a311ce2ea91722e4fbc94791a49b0cbb/packages/@mmutils/assert/src/lib/primitives.ts#L77)

Checks the provided value is an object of any type. Excludes null to match
TypeScript's object and null type separation.

## Parameters

### value

`unknown`

Value to be checked.

## Returns

`value is object`

True if value is an object, false otherwise.
