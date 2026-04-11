[**@mmutils/time**](../../../README.md)

***

[@mmutils/time](../../../modules.md) / [lib/time](../README.md) / formatHighResTime

# Function: formatHighResTime()

> **formatHighResTime**(`time`, `capTo?`, `timeUnit?`): `string`

Defined in: lib/time.ts:149

Format time value from nanoseconds, microseconds, milliseconds, seconds,
minutes or hours to a more readable string. Provide a duration value and
optionally specify in what units the value is expressed. Default is
nanoseconds. Fractions will leak down to lower order units. You can cap the
output to a specific unit type or to a unit that is N positions lower than
the current highest whole unit.

This function uses Number, not BigInt, to make use of
the built-in hardware (FPU) to speed up math operations.

**caution:**
- Using integers will give you an approximate maximum value of 2501 hours as
the value is always converted to nanoseconds (2^53-1 in nanoseconds). Consult
Number.MAX_SAFE_INTEGER. Processing values above that might work, might not,
might produce unknown results.
- time is floored after converting to nanoseconds (0.5ns = 0ns)
- if all units have zero value, `'0[capTo || timeUnit]'` is displayed.

**examples:**
```
formatHighResTime(0, 'ms') // '0ms'
formatHighResTime(0, undefined, 's') // '0s'
formatHighResTime(0.5, 'ns') // '0ns'
formatHighResTime(0.5, undefined, 'ms') // '500µs'
formatHighResTime(0.5, 'ms', 'ms') // '1ms'
formatHighResTime(1 * 60 * 60 * 1_000_000_000) // '1h' default timeUnit: 'ns'
formatHighResTime(2 * 60 * 1_000_000_000) // '2m'
formatHighResTime(3 * 1_000_000_000) // '3s'
formatHighResTime(4 * 1_000_000) // '4ms'
formatHighResTime(5 * 1_000) // '5µs'
formatHighResTime(6) // '6ns'
formatHighResTime(
  1 * 60 * 60 * 1_000_000_000 +
  2 * 60 * 1_000_000_000 +
  3 * 1_000_000_000 +
  4 * 1_000_000 +
  5 * 1_000 +
  6
); // '1h 2m 3s 4ms 5µs 6ns'
formatHighResTime(
  1 * 1_000_000_000 +
  2 * 1_000_000 +
  3 * 1_000 +
  4,
  'µs'
); // '1s 2ms 3µs'
formatHighResTime(
  1 * 1_000_000_000 +
  2 * 1_000_000 +
  3 * 1_000 +
  4,
  2
); // '1s 2ms 3µs'
formatHighResTime(1 * 1_000_000 + 2 * 1_000 + 3); // '1ms 2µs 3ns'
formatHighResTime(1 * 1_000_000 + 0 * 1_000 + 3); // '1ms 3ns'
formatHighResTime(1 * 1_000, undefined, 'ms'); // '1s'
formatHighResTime(1 * 1_000 + 1, 'h'); // '0h'
formatHighResTime(1 * 1_000 + 1, 'µs'); // '1µs'
formatHighResTime(1 * 1_000 + 1, 'ns'); // '1µs 1ns'
formatHighResTime(-1_100_100); // '-1ms 100µs 100ns'
```

## Parameters

### time

`number`

Time value. Value is converted to nanoseconds, floored and then
formatted.

### capTo?

`number` \| `"h"` \| `"m"` \| `"s"` \| `"ms"` \| `"µs"` \| `"ns"`

If set, caps the output to a specific unit or positions down
from the highest whole unit of the current time value. It effectively
'floors' the output to a specific unit. Negative values are not allowed as
they would always produce `'0[unit]'` output.
`formatHighResTime(1 * 1_000 + 1, 'µs'); // '1µs'`

### timeUnit?

`"h"` \| `"m"` \| `"s"` \| `"ms"` \| `"µs"` \| `"ns"`

Time value's unit. Specify in what unit `time` is expressed.
Defaults to `'ns'`.

## Returns

`string`

Formatted string with units of time. If a unit's value is
zero, it's omitted. If all units are omitted - `'0[capTo || timeUnit]'`
is displayed. If time is negative value, leading '-' is added.
