[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [util/actions](../README.md) / generateError

# Function: generateError()

> **generateError**(`messagePrefix`, `value`, `ErrorClass?`): `Error`

Defined in: [packages/@mmutils/assert/src/util/actions.ts:35](https://github.com/mastermind-0xff/-mm-monorepo/blob/0c1e0a87a311ce2ea91722e4fbc94791a49b0cbb/packages/@mmutils/assert/src/util/actions.ts#L35)

Generate error object based on prefix string and value. Value is converted to
string representation.

## Parameters

### messagePrefix

`string`

String to attach debug data to.

### value

`unknown`

Value leading to the error.

### ErrorClass?

(`message?`, `options?`) => `Error`

Type of the error. Defaults to TypeError.

## Returns

`Error`

new ErrorClass with message set as the prefix and string
representation of the value.
