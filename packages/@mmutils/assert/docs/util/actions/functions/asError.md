[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [util/actions](../README.md) / asError

# Function: asError()

> **asError**\<`T`\>(`error`): `Error` \| `T`

Defined in: [packages/@mmutils/assert/src/util/actions.ts:56](https://github.com/mastermind-0xff/-mm-monorepo/blob/ae77bebbedeaf68ca437dc22abf389b1b28fc898/packages/@mmutils/assert/src/util/actions.ts#L56)

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
