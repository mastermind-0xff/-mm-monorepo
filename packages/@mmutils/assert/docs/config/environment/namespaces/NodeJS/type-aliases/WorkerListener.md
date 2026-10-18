[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / WorkerListener

# ~~Type Alias: WorkerListener~~

> **WorkerListener** = (...`args`) => `void`

Defined in: node\_modules/@types/node/process.d.ts:465

## Parameters

### args

...`ProcessEventMap`\[`"worker"`\]

## Returns

`void`

## Deprecated

Global listener types will be removed in a future version.
Callbacks passed directly to `process`'s EventEmitter methods
have their parameter types inferred automatically.

`process` event types are also available via `ProcessEventMap`:

```ts
import type { ProcessEventMap } from 'node:process';
const listener = (...args: ProcessEventMap['worker']) => { ... };
```
