[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [lib/primitives](../README.md) / isNumber

# Function: isNumber()

> **isNumber**(`value`, `excludeNaN`): `value is number`

Defined in: packages/@mmutils/assert/src/lib/primitives.ts:42

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
