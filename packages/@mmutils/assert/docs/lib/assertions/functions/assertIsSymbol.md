[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsSymbol

# Function: assertIsSymbol()

> **assertIsSymbol**(`value`, `error?`): `asserts value is symbol`

Defined in: [src/lib/assertions.ts:182](https://github.com/mastermind-0xff/-mm-monorepo/blob/78834c21b24a02741ae7a3119678886e216545e6/packages/@mmutils/assert/src/lib/assertions.ts#L182)

Asserts that the given value is a symbol. Throws an Error instance if it's
not.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not a symbol.

### error?

`string` \| `Error` = `...`

Optional error message or Error instance. Defaults to TypeError.

## Returns

`asserts value is symbol`

## Throws

TypeError, Error, or a custom Error instance.
