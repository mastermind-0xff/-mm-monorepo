[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / ProcessReport

# Interface: ProcessReport

Defined in: node\_modules/@types/node/process.d.ts:553

## Properties

### compact

> **compact**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:559

Write reports in a compact format, single-line JSON, more easily consumable by log processing systems
than the default multi-line format designed for human consumption.

#### Since

v13.12.0, v12.17.0

***

### directory

> **directory**: `string`

Defined in: node\_modules/@types/node/process.d.ts:565

Directory where the report is written.
The default value is the empty string, indicating that reports are written to the current
working directory of the Node.js process.

***

### excludeEnv

> **excludeEnv**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:597

If true, a diagnostic report is generated without the environment variables.

#### Default

```ts
false
```

***

### filename

> **filename**: `string`

Defined in: node\_modules/@types/node/process.d.ts:570

Filename where the report is written. If set to the empty string, the output filename will be comprised
of a timestamp, PID, and sequence number. The default value is the empty string.

***

### reportOnFatalError

> **reportOnFatalError**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:581

If true, a diagnostic report is generated on fatal errors,
such as out of memory errors or failed C++ assertions.

#### Default

```ts
false
```

***

### reportOnSignal

> **reportOnSignal**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:587

If true, a diagnostic report is generated when the process
receives the signal specified by process.report.signal.

#### Default

```ts
false
```

***

### reportOnUncaughtException

> **reportOnUncaughtException**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:592

If true, a diagnostic report is generated on uncaught exception.

#### Default

```ts
false
```

***

### signal

> **signal**: [`Signals`](../type-aliases/Signals.md)

Defined in: node\_modules/@types/node/process.d.ts:602

The signal used to trigger the creation of a diagnostic report.

#### Default

```ts
'SIGUSR2'
```

## Methods

### getReport()

> **getReport**(`err?`): `object`

Defined in: node\_modules/@types/node/process.d.ts:575

Returns a JavaScript Object representation of a diagnostic report for the running process.
The report's JavaScript stack trace is taken from `err`, if present.

#### Parameters

##### err?

`Error`

#### Returns

`object`

***

### writeReport()

#### Call Signature

> **writeReport**(`fileName?`, `err?`): `string`

Defined in: node\_modules/@types/node/process.d.ts:617

Writes a diagnostic report to a file. If filename is not provided, the default filename
includes the date, time, PID, and a sequence number.
The report's JavaScript stack trace is taken from `err`, if present.

If the value of filename is set to `'stdout'` or `'stderr'`, the report is written
to the stdout or stderr of the process respectively.

##### Parameters

###### fileName?

`string`

Name of the file where the report is written.
This should be a relative path, that will be appended to the directory specified in
`process.report.directory`, or the current working directory of the Node.js process,
if unspecified.

###### err?

`Error`

A custom error used for reporting the JavaScript stack.

##### Returns

`string`

Filename of the generated report.

#### Call Signature

> **writeReport**(`err?`): `string`

Defined in: node\_modules/@types/node/process.d.ts:618

##### Parameters

###### err?

`Error`

##### Returns

`string`
