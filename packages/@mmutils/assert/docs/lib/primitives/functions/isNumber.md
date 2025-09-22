[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/primitives](../README.md) / isNumber

# Function: isNumber()

> **isNumber**(`value`, `excludeNaN`): `value is number`

Defined in: [packages/@mmutils/assert/src/lib/primitives.ts:42](https://github.com/mastermind-0xff/-mm-monorepo/blob/3e4b2477717eab2e4a04b9b069db2113414b3f32/packages/@mmutils/assert/src/lib/primitives.ts#L42)

Checks the provided value is a number. Excludes NaN by default.

## Parameters

### value

`unknown`

Value to be checked.

### excludeNaN

`boolean` = `AssertPrimitiveOptions.numberExcludeNaN`

If true, excludes NaN from the check. Defaults to the value
of the options object for the NaN property.

## Returns

`value is number`

True if value is a number, false otherwise.
