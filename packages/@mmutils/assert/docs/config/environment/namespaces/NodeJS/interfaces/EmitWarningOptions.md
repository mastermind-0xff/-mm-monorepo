[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / EmitWarningOptions

# Interface: EmitWarningOptions

Defined in: node\_modules/@types/node/process.d.ts:514

## Properties

### code?

> `optional` **code**: `string`

Defined in: node\_modules/@types/node/process.d.ts:524

A unique identifier for the warning instance being emitted.

***

### ctor?

> `optional` **ctor**: `Function`

Defined in: node\_modules/@types/node/process.d.ts:530

When `warning` is a `string`, `ctor` is an optional function used to limit the generated stack trace.

#### Default

```ts
process.emitWarning
```

***

### detail?

> `optional` **detail**: `string`

Defined in: node\_modules/@types/node/process.d.ts:534

Additional text to include with the error.

***

### type?

> `optional` **type**: `string`

Defined in: node\_modules/@types/node/process.d.ts:520

When `warning` is a `string`, `type` is the name to use for the _type_ of warning being emitted.

#### Default

```ts
'Warning'
```
