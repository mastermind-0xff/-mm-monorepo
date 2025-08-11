[**@mmutils/assert-primitive**](../../../../../README.md)

***

[@mmutils/assert-primitive](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / HRTime

# Interface: HRTime()

Defined in: node\_modules/@types/node/process.d.ts:352

> **HRTime**(`time`?): \[`number`, `number`\]

Defined in: node\_modules/@types/node/process.d.ts:385

This is the legacy version of [()](HRTime.md#bigint)
before bigint was introduced in JavaScript.

The `process.hrtime()` method returns the current high-resolution real time in a `[seconds, nanoseconds]` tuple `Array`,
where `nanoseconds` is the remaining part of the real time that can't be represented in second precision.

`time` is an optional parameter that must be the result of a previous `process.hrtime()` call to diff with the current time.
If the parameter passed in is not a tuple `Array`, a TypeError will be thrown.
Passing in a user-defined array instead of the result of a previous call to `process.hrtime()` will lead to undefined behavior.

These times are relative to an arbitrary time in the past,
and not related to the time of day and therefore not subject to clock drift.
The primary use is for measuring performance between intervals:
```js
const { hrtime } = require('node:process');
const NS_PER_SEC = 1e9;
const time = hrtime();
// [ 1800216, 25 ]

setTimeout(() => {
  const diff = hrtime(time);
  // [ 1, 552 ]

  console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
  // Benchmark took 1000000552 nanoseconds
}, 1000);
```

## Parameters

### time?

\[`number`, `number`\]

The result of a previous call to `process.hrtime()`

## Returns

\[`number`, `number`\]

## Since

0.7.6

## Legacy

Use [()](HRTime.md#bigint) instead.

## Methods

### bigint()

> **bigint**(): `bigint`

Defined in: node\_modules/@types/node/process.d.ts:406

The `bigint` version of the [()](Process.md#hrtime) method returning the current high-resolution real time in nanoseconds as a `bigint`.

Unlike [()](Process.md#hrtime), it does not support an additional time argument since the difference can just be computed directly by subtraction of the two `bigint`s.
```js
import { hrtime } from 'node:process';

const start = hrtime.bigint();
// 191051479007711n

setTimeout(() => {
  const end = hrtime.bigint();
  // 191052633396993n

  console.log(`Benchmark took ${end - start} nanoseconds`);
  // Benchmark took 1154389282 nanoseconds
}, 1000);
```

#### Returns

`bigint`

#### Since

v10.7.0
