[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsNonNullish

# Function: assertIsNonNullish()

> **assertIsNonNullish**\<`T`\>(`value`, `error?`): `asserts value is NonNullable<T>`

Defined in: [src/lib/assertions.ts:86](https://github.com/mastermind-0xff/-mm-monorepo/blob/15c53393182e77c18f7ab63c27f8a96727021afe/packages/@mmutils/assert/src/lib/assertions.ts#L86)

Asserts that the given value is non-nullish. Throws an Error instance if it's
not.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

The value to be checked. Throws an error if null or undefined.

### error?

`string` \| `Error` = `...`

Optional error message or Error instance. Defaults to TypeError.

## Returns

`asserts value is NonNullable<T>`

## Throws

TypeError, Error, or a custom Error instance.
