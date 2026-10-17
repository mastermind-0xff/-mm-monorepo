[**@mmutils/time**](../../../README.md)

***

[@mmutils/time](../../../modules.md) / [lib/time](../README.md) / timeUnitFromNs

# Function: timeUnitFromNs()

> **timeUnitFromNs**(`timeNs`): `"h"` \| `"m"` \| `"s"` \| `"ms"` \| `"µs"` \| `"ns"`

Defined in: [lib/time.ts:69](https://github.com/mastermind-0xff/-mm-monorepo/blob/9423122f075886eeeb38fbba39b66e0904725ef6/packages/@mmutils/time/src/lib/time.ts#L69)

Get the highest full time unit available for the current nanoseconds input.
Works with positive and negative values.

**examples:**
```
timeUnitsFromNs(-999); // 'ns'
timeUnitsFromNs(999); // 'ns'
timeUnitsFromNs(1000); // 'µs'
timeUnitsFromNs(1000000); // 'ms'
timeUnitsFromNs(-1000000); // 'ms'
```

## Parameters

### timeNs

`number`

Time in nanoseconds.

## Returns

`"h"` \| `"m"` \| `"s"` \| `"ms"` \| `"µs"` \| `"ns"`

String representing the highest whole number units.
