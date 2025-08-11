[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertNever

# Function: assertNever()

> **assertNever**(`value`, `error`): `asserts value is never`

Defined in: [packages/@mmutils/assert/src/lib/assertions.ts:258](https://github.com/mastermind-0xff/-mm-monorepo/blob/ae77bebbedeaf68ca437dc22abf389b1b28fc898/packages/@mmutils/assert/src/lib/assertions.ts#L258)

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

`asserts value is never`

## Throws

AssertError, Error, or a custom Error instance.
