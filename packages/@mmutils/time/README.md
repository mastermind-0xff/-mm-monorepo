# @mmutils/time

Common reusable, typed, JavasScript time related utility functions built with TypeScript.

Currently supports high resolution time like nanoseconds all the way up to hours. Makes they visual display of high resolution time easier and tidier.

## Installation

### Install the package

```sh
npm install @mmutils/time
# or
yarn add @mmutils/time
```

### Load as module (ESM) or CommonJS

```javascript
import {
  TimeUnitInNs,
  shiftTimeUnit,
  timeUnitFromNs,
  formatHighResTime,
} from '@mmutils/time';
```

or

```javascript
const {
  TimeUnitInNs,
  shiftTimeUnit,
  timeUnitFromNs,
  formatHighResTime,
} = require('@mmutils/time');
```

## Changelog

### v0.0.1

Initial release.

## Quick reference guide / API

### `const timeUnits`

Descending order time units list.

```typescript
const timeUnits: readonly[('h', 'm', 's', 'ms', 'µs', 'ns')];
```

### `type TimeUnit`

```typescript
type TimeUnit = 'h' | 'm' | 's' | 'ms' | 'µs' | 'ns';
```

### `const TimeUnitInNs`

Enum containing the minimum value in nanoseconds for each unit of time. Note the range [0,1) is not covered by this Enum.

```typescript
TimeUnitInNs: {
    readonly h: 3600000000000;
    readonly m: 60000000000;
    readonly s: 1000000000;
    readonly ms: 1000000;
    readonly µs: 1000;
    readonly ns: 1;
    readonly __proto__: null;
}
```

### `function shiftTimeUnit`

Shift given time unit N positions up or down.

```typescript
const shiftTimeUnit: (fromUnit: TimeUnit, shiftPositions: number) => TimeUnit;
```

**examples:**

```typescript
shiftTimeUnit('s', -10); // 'h'
shiftTimeUnit('s', -2); // 'h'
shiftTimeUnit('s', -1); // 'm'
shiftTimeUnit('s', 0); // 's'
shiftTimeUnit('s', 1); // 'ms'
shiftTimeUnit('s', 2); // 'µs'
shiftTimeUnit('s', 3); // 'ns'
shiftTimeUnit('s', 10); // 'ns'
```

### `function timeUnitFromNs`

Get the highest full time unit available for the current nanoseconds input. Works with positive and negative values.

```typescript
const timeUnitFromNs: (timeNs: number) => TimeUnit;
```

**examples:**

```typescript
timeUnitsFromNs(-999); // 'ns'
timeUnitsFromNs(999); // 'ns'
timeUnitsFromNs(1000); // 'µs'
timeUnitsFromNs(1000000); // 'ms'
timeUnitsFromNs(-1000000); // 'ms'
```

### `function formatHighResTime`

```typescript
const formatHighResTime: (
  time: number,
  capTo?: TimeUnit | number,
  timeUnit?: TimeUnit
) => string;
```

Format time value from nanoseconds, microseconds, milliseconds, seconds,
minutes or hours to a more readable string. Provide a duration value and
optionally specify in what units the value is expressed. Default is
nanoseconds. Fractions will leak down to lower order units. You can cap the
output to a specific unit type or to a unit that is N positions lower than
the current highest whole unit.

**examples:**

```typescript
formatHighResTime(0, 'ms'); // '0ms'
formatHighResTime(0, undefined, 's'); // '0s'
formatHighResTime(0.5, 'ns'); // '0ns'
formatHighResTime(0.5, undefined, 'ms'); // '500µs'
formatHighResTime(0.5, 'ms', 'ms'); // '1ms'
formatHighResTime(1 * 60 * 60 * 1_000_000_000); // '1h' default timeUnit: 'ns'
formatHighResTime(2 * 60 * 1_000_000_000); // '2m'
formatHighResTime(3 * 1_000_000_000); // '3s'
formatHighResTime(4 * 1_000_000); // '4ms'
formatHighResTime(5 * 1_000); // '5µs'
formatHighResTime(6); // '6ns'
formatHighResTime(
  1 * 60 * 60 * 1_000_000_000 +
    2 * 60 * 1_000_000_000 +
    3 * 1_000_000_000 +
    4 * 1_000_000 +
    5 * 1_000 +
    6
); // '1h 2m 3s 4ms 5µs 6ns'
formatHighResTime(1 * 1_000_000_000 + 2 * 1_000_000 + 3 * 1_000 + 4, 'µs'); // '1s 2ms 3µs'
formatHighResTime(1 * 1_000_000_000 + 2 * 1_000_000 + 3 * 1_000 + 4, 2); // '1s 2ms 3µs'
formatHighResTime(1 * 1_000_000 + 2 * 1_000 + 3); // '1ms 2µs 3ns'
formatHighResTime(1 * 1_000_000 + 0 * 1_000 + 3); // '1ms 3ns'
formatHighResTime(1 * 1_000, undefined, 'ms'); // '1s'
formatHighResTime(1 * 1_000 + 1, 'h'); // '0h'
formatHighResTime(1 * 1_000 + 1, 'µs'); // '1µs'
formatHighResTime(1 * 1_000 + 1, 'ns'); // '1µs 1ns'
formatHighResTime(-1_100_100); // '-1ms 100µs 100ns'
```

## License

This project is licensed under the MIT License.
