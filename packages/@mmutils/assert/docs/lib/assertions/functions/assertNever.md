[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assertNever

# Function: assertNever()

> **assertNever**(`value`, `error?`): `never`

Defined in: [src/lib/assertions.ts:258](https://github.com/mastermind-0xff/-mm-monorepo/blob/78834c21b24a02741ae7a3119678886e216545e6/packages/@mmutils/assert/src/lib/assertions.ts#L258)

Asserts that exhaustive checks were preformed in control flow and this action
won't execute when new code gets added.

## Parameters

### value

`never`

The value to be checked.

### error?

`string` \| `Error` = `...`

Optional error message or Error instance. Defaults to
AssertError.

## Returns

`never`

## Throws

AssertError, Error, or a custom Error instance.
