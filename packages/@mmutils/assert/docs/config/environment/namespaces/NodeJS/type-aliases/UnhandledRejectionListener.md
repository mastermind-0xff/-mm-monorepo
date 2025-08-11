[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / UnhandledRejectionListener

# Type Alias: UnhandledRejectionListener()

> **UnhandledRejectionListener**: (`reason`, `promise`) => `void`

Defined in: node\_modules/@types/node/process.d.ts:332

Most of the time the unhandledRejection will be an Error, but this should not be relied upon
as *anything* can be thrown/rejected, it is therefore unsafe to assume that the value is an Error.

## Parameters

### reason

`unknown`

### promise

`Promise`\<`unknown`\>

## Returns

`void`
