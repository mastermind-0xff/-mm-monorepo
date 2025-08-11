[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [util/actions](../README.md) / asError

# Function: asError()

> **asError**\<`T`\>(`error`): `Error` \| `T`

Defined in: packages/@mmutils/assert/src/util/actions.ts:51

Convert string to an Error or use the provided error object and return the
result.

## Type Parameters

• **T** *extends* `Error`

## Parameters

### error

String or any instance of Error constructor.

`string` | `T`

## Returns

`Error` \| `T`

New Error or error object of the given constructor.

## Throws

TypeError if error is not string or Error instance.
