[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / MemoryUsage

# Interface: MemoryUsage

Defined in: node\_modules/@types/node/process.d.ts:160

## Properties

### arrayBuffers

> **arrayBuffers**: `number`

Defined in: node\_modules/@types/node/process.d.ts:180

Refers to memory allocated for `ArrayBuffer`s and `SharedArrayBuffer`s, including all Node.js Buffers. This is also included
in the external value. When Node.js is used as an embedded library, this value may be `0` because allocations for `ArrayBuffer`s
may not be tracked in that case.

***

### external

> **external**: `number`

Defined in: node\_modules/@types/node/process.d.ts:174

***

### heapTotal

> **heapTotal**: `number`

Defined in: node\_modules/@types/node/process.d.ts:169

Refers to V8's memory usage.

***

### heapUsed

> **heapUsed**: `number`

Defined in: node\_modules/@types/node/process.d.ts:173

Refers to V8's memory usage.

***

### rss

> **rss**: `number`

Defined in: node\_modules/@types/node/process.d.ts:165

Resident Set Size, is the amount of space occupied in the main memory device (that is a subset of the total allocated memory) for the
process, including all C++ and JavaScript objects and code.
