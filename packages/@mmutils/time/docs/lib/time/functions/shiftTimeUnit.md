[**@mmutils/time**](../../../README.md)

***

[@mmutils/time](../../../modules.md) / [lib/time](../README.md) / shiftTimeUnit

# Function: shiftTimeUnit()

> **shiftTimeUnit**(`fromUnit`, `shiftPositions`): `"h"` \| `"m"` \| `"s"` \| `"ms"` \| `"µs"` \| `"ns"`

Defined in: lib/time.ts:40

Shift given time unit N positions up or down.

**examples:**
```
shiftTimeUnit('s', -10); // 'h'
shiftTimeUnit('s', -2); // 'h'
shiftTimeUnit('s', -1); // 'm'
shiftTimeUnit('s', 0); // 's'
shiftTimeUnit('s', 1); // 'ms'
shiftTimeUnit('s', 2); // 'µs'
shiftTimeUnit('s', 3); // 'ns'
shiftTimeUnit('s', 10); // 'ns'
```

## Parameters

### fromUnit

`"h"` \| `"m"` \| `"s"` \| `"ms"` \| `"µs"` \| `"ns"`

Time units to shift from.

### shiftPositions

`number`

How many position to shift from `fromUnits`. 0 means
same unit, 1 means next lower unit.

## Returns

`"h"` \| `"m"` \| `"s"` \| `"ms"` \| `"µs"` \| `"ns"`
