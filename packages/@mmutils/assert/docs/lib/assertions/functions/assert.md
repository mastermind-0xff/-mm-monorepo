[**@mmutils/assert**](../../../README.md)

***

[@mmutils/assert](../../../modules.md) / [lib/assertions](../README.md) / assert

# Function: assert()

> **assert**(`condition`, `error`): `asserts condition`

Defined in: [packages/@mmutils/assert/src/lib/assertions.ts:55](https://github.com/mastermind-0xff/-mm-monorepo/blob/3e4b2477717eab2e4a04b9b069db2113414b3f32/packages/@mmutils/assert/src/lib/assertions.ts#L55)

Asserts a condition. Throws an Error instance if the condition is not met.
___

## Parameters

### condition

`boolean`

The condition to be checked. Throws an error if false.

### error

Optional error message or Error instance to be thrown. Defaults
to AssertError.

`string` | `Error`

## Returns

`asserts condition`

## Throws

AssertError, Error, or a custom Error instance.
___

## Example

*example 1:*
```typescript
(x: number) => {
  assert(x === 5);
  x; // type of x is 5, not number
};
```

*example 2:*
```typescript
type Data =
  | { type: 'important'; value: 42 }
  | { type: 'other'; value?: string };

const logValue = (userRole: 'admin' | 'guest', data?: Data) => {
  if (userRole === 'admin') {
    assert(
      data != null && data.type === 'important',
      'Important data missing!'
    );
    console.log('value:', data.value); // data.value's type is 42
  } else {
    console.log('value:', data?.value ?? 'no value provided');
  }
};
```
