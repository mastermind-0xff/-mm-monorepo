[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [util/actions](../README.md) / generateError

# Function: generateError()

> **generateError**(`messagePrefix`, `value`, `ErrorClass`): `Error`

Defined in: packages/@mmutils/assert/src/util/actions.ts:35

Generate error object based on prefix string and value. Value is converted to
string representation.

## Parameters

### messagePrefix

`string`

String to attach debug data to.

### value

`unknown`

Value leading to the error.

### ErrorClass

(`message`?) => `Error`

Type of the error. Defaults to TypeError.

## Returns

`Error`

new ErrorClass with message set as the prefix and string
representation of the value.
