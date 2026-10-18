[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / Immediate

# Interface: Immediate

Defined in: node\_modules/@types/node/timers.d.ts:24

This object is created internally and is returned from `setImmediate()`. It
can be passed to `clearImmediate()` in order to cancel the scheduled
actions.

By default, when an immediate is scheduled, the Node.js event loop will continue
running as long as the immediate is active. The `Immediate` object returned by
`setImmediate()` exports both `immediate.ref()` and `immediate.unref()`
functions that can be used to control this default behavior.

## Extends

- [`RefCounted`](RefCounted.md)
- `Disposable`

## Methods

### \_onImmediate()

> **\_onImmediate**(...`args`): `void`

Defined in: node\_modules/@types/node/timers.d.ts:55

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: node\_modules/@types/node/timers.d.ts:54

Cancels the immediate. This is similar to calling `clearImmediate()`.

#### Returns

`void`

#### Since

v20.5.0, v18.18.0

#### Overrides

`Disposable.[dispose]`

***

### hasRef()

> **hasRef**(): `boolean`

Defined in: node\_modules/@types/node/timers.d.ts:29

If true, the `Immediate` object will keep the Node.js event loop active.

#### Returns

`boolean`

#### Since

v11.0.0

***

### ref()

> **ref**(): `this`

Defined in: node\_modules/@types/node/timers.d.ts:40

When called, requests that the Node.js event loop _not_ exit so long as the
`Immediate` is active. Calling `immediate.ref()` multiple times will have no
effect.

By default, all `Immediate` objects are "ref'ed", making it normally unnecessary
to call `immediate.ref()` unless `immediate.unref()` had been called previously.

#### Returns

`this`

a reference to `immediate`

#### Since

v9.7.0

#### Overrides

[`RefCounted`](RefCounted.md).[`ref`](RefCounted.md#ref)

***

### unref()

> **unref**(): `this`

Defined in: node\_modules/@types/node/timers.d.ts:49

When called, the active `Immediate` object will not require the Node.js event
loop to remain active. If there is no other activity keeping the event loop
running, the process may exit before the `Immediate` object's callback is
invoked. Calling `immediate.unref()` multiple times will have no effect.

#### Returns

`this`

a reference to `immediate`

#### Since

v9.7.0

#### Overrides

[`RefCounted`](RefCounted.md).[`unref`](RefCounted.md#unref)
