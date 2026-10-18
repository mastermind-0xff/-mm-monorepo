[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertIsNullish

# Function: assertIsNullish()

> **assertIsNullish**(`value`, `error?`): asserts value is null \| undefined

Defined in: [src/lib/assertions.ts:69](https://github.com/mastermind-0xff/-mm-monorepo/blob/15c53393182e77c18f7ab63c27f8a96727021afe/packages/@mmutils/assert/src/lib/assertions.ts#L69)

Asserts that the given value is nullish. Throws an Error instance if it's not.

## Parameters

### value

`unknown`

The value to be checked. Throws an error if not null or
undefined.

### error?

`string` \| `Error` = `...`

Optional error message or Error instance. Defaults to TypeError.

## Returns

asserts value is null \| undefined

## Throws

TypeError, Error, or a custom Error instance.
