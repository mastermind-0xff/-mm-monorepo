[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [util/actions](../README.md) / asError

# Function: asError()

> **asError**\<`T`\>(`error`): `Error` \| `T`

Defined in: [src/util/actions.ts:56](https://github.com/mastermind-0xff/-mm-monorepo/blob/78834c21b24a02741ae7a3119678886e216545e6/packages/@mmutils/assert/src/util/actions.ts#L56)

Convert string to an Error or use the provided error object and return the
result.

## Type Parameters

### T

`T` *extends* `Error`

## Parameters

### error

`string` \| `T`

String or any instance of Error constructor.

## Returns

`Error` \| `T`

New Error or error object of the given constructor.

## Throws

TypeError if error is not string or Error instance.
