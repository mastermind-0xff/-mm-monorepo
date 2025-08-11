[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / RequireResolveOptions

# Interface: RequireResolveOptions

Defined in: node\_modules/@types/node/module.d.ts:617

## Properties

### paths?

> `optional` **paths**: `string`[]

Defined in: node\_modules/@types/node/module.d.ts:629

Paths to resolve module location from. If present, these
paths are used instead of the default resolution paths, with the exception
of
[GLOBAL\_FOLDERS](https://nodejs.org/docs/latest-v22.x/api/modules.html#loading-from-the-global-folders)
like `$HOME/.node_modules`, which are
always included. Each of these paths is used as a starting point for
the module resolution algorithm, meaning that the `node_modules` hierarchy
is checked from this location.

#### Since

v8.9.0
