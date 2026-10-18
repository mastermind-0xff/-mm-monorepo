[**@mmutils/time**](../../../README.md)

***

[@mmutils/time](../../../modules.md) / [lib/time](../README.md) / shiftTimeUnit

# Function: shiftTimeUnit()

> **shiftTimeUnit**(`fromUnit`, `shiftPositions`): `"h"` \| `"m"` \| `"s"` \| `"ms"` \| `"µs"` \| `"ns"`

Defined in: [lib/time.ts:43](https://github.com/mastermind-0xff/-mm-monorepo/blob/764679d6d450a0f8d6e6d0cdfa45b73a36b1e5f7/packages/@mmutils/time/src/lib/time.ts#L43)

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
