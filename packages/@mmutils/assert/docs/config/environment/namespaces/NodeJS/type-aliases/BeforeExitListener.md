[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / BeforeExitListener

# ~~Type Alias: BeforeExitListener~~

> **BeforeExitListener** = (...`args`) => `void`

Defined in: node\_modules/@types/node/process.d.ts:355

## Parameters

### args

...`ProcessEventMap`\[`"beforeExit"`\]

## Returns

`void`

## Deprecated

Global listener types will be removed in a future version.
Callbacks passed directly to `process`'s EventEmitter methods
have their parameter types inferred automatically.

`process` event types are also available via `ProcessEventMap`:

```ts
import type { ProcessEventMap } from 'node:process';
const listener = (...args: ProcessEventMap['beforeExit']) => { ... };
```
