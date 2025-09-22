[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertNever

# Function: assertNever()

> **assertNever**(`value`, `error`): `never`

Defined in: [packages/@mmutils/assert/src/lib/assertions.ts:258](https://github.com/mastermind-0xff/-mm-monorepo/blob/3e4b2477717eab2e4a04b9b069db2113414b3f32/packages/@mmutils/assert/src/lib/assertions.ts#L258)

Asserts that exhaustive checks were preformed in control flow and this action
won't execute when new code gets added.

## Parameters

### value

`never`

The value to be checked.

### error

Optional error message or Error instance. Defaults to
AssertError.

`string` | `Error`

## Returns

`never`

## Throws

AssertError, Error, or a custom Error instance.
