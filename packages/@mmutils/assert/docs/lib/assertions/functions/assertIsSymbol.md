[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsSymbol

# Function: assertIsSymbol()

> **assertIsSymbol**(`value`, `error`): `asserts value is symbol`

Defined in: [packages/@mmutils/assert/src/lib/assertions.ts:182](https://github.com/mastermind-0xff/-mm-monorepo/blob/ca3710bd8bb8c2ee105ac4cbba3822a7d96ba98d/packages/@mmutils/assert/src/lib/assertions.ts#L182)

Asserts that the given value is a symbol. Throws an Error instance if it's
not.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not a symbol.

### error

Optional error message or Error instance. Defaults to TypeError.

`string` | `Error`

## Returns

`asserts value is symbol`

## Throws

TypeError, Error, or a custom Error instance.
