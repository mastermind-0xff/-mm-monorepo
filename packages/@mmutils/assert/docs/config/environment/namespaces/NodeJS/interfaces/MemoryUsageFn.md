[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / MemoryUsageFn

# Interface: MemoryUsageFn()

Defined in: node\_modules/@types/node/process.d.ts:127

> **MemoryUsageFn**(): [`MemoryUsage`](MemoryUsage.md)

Defined in: node\_modules/@types/node/process.d.ts:132

The `process.memoryUsage()` method iterate over each page to gather informations about memory
usage which can be slow depending on the program memory allocations.

## Returns

[`MemoryUsage`](MemoryUsage.md)

## Methods

### rss()

> **rss**(): `number`

Defined in: node\_modules/@types/node/process.d.ts:136

method returns an integer representing the Resident Set Size (RSS) in bytes.

#### Returns

`number`
