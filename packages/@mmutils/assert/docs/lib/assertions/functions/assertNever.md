[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [lib/assertions](../README.md) / assertNever

# Function: assertNever()

> **assertNever**(`value`, `error`): `asserts value is never`

Defined in: packages/@mmutils/assert/src/lib/assertions.ts:258

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
