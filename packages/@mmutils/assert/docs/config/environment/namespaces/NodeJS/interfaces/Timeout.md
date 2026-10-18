[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / Timeout

# Interface: Timeout

Defined in: node\_modules/@types/node/timers.d.ts:76

This object is created internally and is returned from `setTimeout()` and
`setInterval()`. It can be passed to either `clearTimeout()` or
`clearInterval()` in order to cancel the scheduled actions.

By default, when a timer is scheduled using either `setTimeout()` or
`setInterval()`, the Node.js event loop will continue running as long as the
timer is active. Each of the `Timeout` objects returned by these functions
export both `timeout.ref()` and `timeout.unref()` functions that can be used to
control this default behavior.

## Extends

- [`RefCounted`](RefCounted.md)
- `Disposable`
- [`Timer`](Timer.md)

## Methods

### \_onTimeout()

> **\_onTimeout**(...`args`): `void`

Defined in: node\_modules/@types/node/timers.d.ts:135

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: node\_modules/@types/node/timers.d.ts:134

Cancels the timeout.

#### Returns

`void`

#### Since

v20.5.0, v18.18.0

#### Overrides

`Disposable.[dispose]`

***

### \[toPrimitive\]()

> **\[toPrimitive\]**(): `number`

Defined in: node\_modules/@types/node/timers.d.ts:129

Coerce a `Timeout` to a primitive. The primitive can be used to
clear the `Timeout`. The primitive can only be used in the
same thread where the timeout was created. Therefore, to use it
across `worker_threads` it must first be passed to the correct
thread. This allows enhanced compatibility with browser
`setTimeout()` and `setInterval()` implementations.

#### Returns

`number`

#### Since

v14.9.0, v12.19.0

#### Overrides

[`Timer`](Timer.md).[`[toPrimitive]`](Timer.md#toprimitive)

***

### close()

> **close**(): `this`

Defined in: node\_modules/@types/node/timers.d.ts:83

Cancels the timeout.

#### Returns

`this`

a reference to `timeout`

#### Since

v0.9.1

#### Legacy

Use `clearTimeout()` instead.

***

### hasRef()

> **hasRef**(): `boolean`

Defined in: node\_modules/@types/node/timers.d.ts:88

If true, the `Timeout` object will keep the Node.js event loop active.

#### Returns

`boolean`

#### Since

v11.0.0

#### Overrides

[`Timer`](Timer.md).[`hasRef`](Timer.md#hasref)

***

### ref()

> **ref**(): `this`

Defined in: node\_modules/@types/node/timers.d.ts:98

When called, requests that the Node.js event loop _not_ exit so long as the
`Timeout` is active. Calling `timeout.ref()` multiple times will have no effect.

By default, all `Timeout` objects are "ref'ed", making it normally unnecessary
to call `timeout.ref()` unless `timeout.unref()` had been called previously.

#### Returns

`this`

a reference to `timeout`

#### Since

v0.9.1

#### Overrides

[`RefCounted`](RefCounted.md).[`ref`](RefCounted.md#ref)

***

### refresh()

> **refresh**(): `this`

Defined in: node\_modules/@types/node/timers.d.ts:110

Sets the timer's start time to the current time, and reschedules the timer to
call its callback at the previously specified duration adjusted to the current
time. This is useful for refreshing a timer without allocating a new
JavaScript object.

Using this on a timer that has already called its callback will reactivate the
timer.

#### Returns

`this`

a reference to `timeout`

#### Since

v10.2.0

#### Overrides

[`Timer`](Timer.md).[`refresh`](Timer.md#refresh)

***

### unref()

> **unref**(): `this`

Defined in: node\_modules/@types/node/timers.d.ts:119

When called, the active `Timeout` object will not require the Node.js event loop
to remain active. If there is no other activity keeping the event loop running,
the process may exit before the `Timeout` object's callback is invoked. Calling
`timeout.unref()` multiple times will have no effect.

#### Returns

`this`

a reference to `timeout`

#### Since

v0.9.1

#### Overrides

[`RefCounted`](RefCounted.md).[`unref`](RefCounted.md#unref)
