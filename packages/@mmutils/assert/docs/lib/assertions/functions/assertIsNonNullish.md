[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsNonNullish

# Function: assertIsNonNullish()

> **assertIsNonNullish**\<`T`\>(`value`, `error`): `asserts value is NonNullable<T>`

Defined in: [packages/@mmutils/assert/src/lib/assertions.ts:86](https://github.com/mastermind-0xff/-mm-monorepo/blob/ae77bebbedeaf68ca437dc22abf389b1b28fc898/packages/@mmutils/assert/src/lib/assertions.ts#L86)

Asserts that the given value is non-nullish. Throws an Error instance if it's
not.

## Type Parameters

• **T**

## Parameters

### value

`T`

The value to be checked. Throws an error if null or undefined.

### error

Optional error message or Error instance. Defaults to TypeError.

`string` | `Error`

## Returns

`asserts value is NonNullable<T>`

## Throws

TypeError, Error, or a custom Error instance.
