[**@mmutils/assert-primitive**](../../../../../README.md)

***

[@mmutils/assert-primitive](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / Module

# Interface: Module

Defined in: node\_modules/@types/node/module.d.ts:516

## Properties

### children

> **children**: [`Module`](Module.md)[]

Defined in: node\_modules/@types/node/module.d.ts:521

The module objects required for the first time by this one.

#### Since

v0.1.16

***

### exports

> **exports**: `any`

Defined in: node\_modules/@types/node/module.d.ts:528

The `module.exports` object is created by the `Module` system. Sometimes this is
not acceptable; many want their module to be an instance of some class. To do
this, assign the desired export object to `module.exports`.

#### Since

v0.1.16

***

### filename

> **filename**: `string`

Defined in: node\_modules/@types/node/module.d.ts:533

The fully resolved filename of the module.

#### Since

v0.1.16

***

### id

> **id**: `string`

Defined in: node\_modules/@types/node/module.d.ts:539

The identifier for the module. Typically this is the fully resolved
filename.

#### Since

v0.1.16

***

### isPreloading

> **isPreloading**: `boolean`

Defined in: node\_modules/@types/node/module.d.ts:545

`true` if the module is running during the Node.js preload
phase.

#### Since

v15.4.0, v14.17.0

***

### loaded

> **loaded**: `boolean`

Defined in: node\_modules/@types/node/module.d.ts:551

Whether or not the module is done loading, or is in the process of
loading.

#### Since

v0.1.16

***

### ~~parent~~

> **parent**: `undefined` \| `null` \| [`Module`](Module.md)

Defined in: node\_modules/@types/node/module.d.ts:559

The module that first required this one, or `null` if the current module is the
entry point of the current process, or `undefined` if the module was loaded by
something that is not a CommonJS module (e.g. REPL or `import`).

#### Since

v0.1.16

#### Deprecated

Please use `require.main` and `module.children` instead.

***

### path

> **path**: `string`

Defined in: node\_modules/@types/node/module.d.ts:565

The directory name of the module. This is usually the same as the
`path.dirname()` of the `module.id`.

#### Since

v11.14.0

***

### paths

> **paths**: `string`[]

Defined in: node\_modules/@types/node/module.d.ts:570

The search paths for the module.

#### Since

v0.4.0

## Methods

### require()

> **require**(`id`): `any`

Defined in: node\_modules/@types/node/module.d.ts:576

The `module.require()` method provides a way to load a module as if
`require()` was called from the original module.

#### Parameters

##### id

`string`

#### Returns

`any`

#### Since

v0.5.1
