[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / ProcessPermission

# Interface: ProcessPermission

Defined in: node\_modules/@types/node/process.d.ts:408

## Methods

### has()

> **has**(`scope`, `reference`?): `boolean`

Defined in: node\_modules/@types/node/process.d.ts:432

Verifies that the process is able to access the given scope and reference.
If no reference is provided, a global scope is assumed, for instance, `process.permission.has('fs.read')`
will check if the process has ALL file system read permissions.

The reference has a meaning based on the provided scope. For example, the reference when the scope is File System means files and folders.

The available scopes are:

* `fs` - All File System
* `fs.read` - File System read operations
* `fs.write` - File System write operations
* `child` - Child process spawning operations
* `worker` - Worker thread spawning operation

```js
// Check if the process has permission to read the README file
process.permission.has('fs.read', './README.md');
// Check if the process has read permission operations
process.permission.has('fs.read');
```

#### Parameters

##### scope

`string`

##### reference?

`string`

#### Returns

`boolean`

#### Since

v20.0.0
