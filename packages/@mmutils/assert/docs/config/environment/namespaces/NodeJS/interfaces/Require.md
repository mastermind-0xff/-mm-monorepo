[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / Require

# Interface: Require()

Defined in: node\_modules/@types/node/module.d.ts:578

> **Require**(`id`): `any`

Defined in: node\_modules/@types/node/module.d.ts:583

Used to import modules, `JSON`, and local files.

## Parameters

### id

`string`

## Returns

`any`

## Since

v0.1.13

## Properties

### cache

> **cache**: [`Dict`](Dict.md)\<[`Module`](Module.md)\>

Defined in: node\_modules/@types/node/module.d.ts:592

Modules are cached in this object when they are required. By deleting a key
value from this object, the next `require` will reload the module.
This does not apply to
[native addons](https://nodejs.org/docs/latest-v22.x/api/addons.html),
for which reloading will result in an error.

#### Since

v0.3.0

***

### ~~extensions~~

> **extensions**: [`RequireExtensions`](RequireExtensions.md)

Defined in: node\_modules/@types/node/module.d.ts:598

Instruct `require` on how to handle certain file extensions.

#### Since

v0.3.0

#### Deprecated

***

### main

> **main**: `undefined` \| [`Module`](Module.md)

Defined in: node\_modules/@types/node/module.d.ts:605

The `Module` object representing the entry script loaded when the Node.js
process launched, or `undefined` if the entry point of the program is not a
CommonJS module.

#### Since

v0.1.17

***

### resolve

> **resolve**: [`RequireResolve`](RequireResolve.md)

Defined in: node\_modules/@types/node/module.d.ts:609

#### Since

v0.3.0
