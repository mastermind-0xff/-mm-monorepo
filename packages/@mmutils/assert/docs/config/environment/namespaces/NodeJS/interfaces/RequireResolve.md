[**@mmutils/assert-primitive**](../../../../../README.md)

***

[@mmutils/assert-primitive](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / RequireResolve

# Interface: RequireResolve()

Defined in: node\_modules/@types/node/module.d.ts:631

> **RequireResolve**(`request`, `options`?): `string`

Defined in: node\_modules/@types/node/module.d.ts:640

Use the internal `require()` machinery to look up the location of a module,
but rather than loading the module, just return the resolved filename.

If the module can not be found, a `MODULE_NOT_FOUND` error is thrown.

## Parameters

### request

`string`

The module path to resolve.

### options?

[`RequireResolveOptions`](RequireResolveOptions.md)

## Returns

`string`

## Since

v0.3.0

## Methods

### paths()

> **paths**(`request`): `null` \| `string`[]

Defined in: node\_modules/@types/node/module.d.ts:648

Returns an array containing the paths searched during resolution of `request` or
`null` if the `request` string references a core module, for example `http` or
`fs`.

#### Parameters

##### request

`string`

The module path whose lookup paths are being retrieved.

#### Returns

`null` \| `string`[]

#### Since

v8.9.0
