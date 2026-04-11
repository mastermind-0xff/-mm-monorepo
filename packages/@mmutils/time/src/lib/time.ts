/** Descending order. */
export const timeUnits = ['h', 'm', 's', 'ms', 'µs', 'ns'] as const;
export type TimeUnit = (typeof timeUnits)[number];

/**
 * Time units ENUM.
 * How many nanoseconds in a specific unit of time.
 */
export const TimeUnitInNs = {
  h: 3_600_000_000_000, // 1 hour has at least 3_600_000_000_000 ns
  m: 60_000_000_000, // 1 minute has at least 60_000_000_000 ns
  s: 1_000_000_000, // 1 second has at least 1_000_000_000 ns
  ms: 1_000_000, // 1 millisecond has at least 1_000_000 ns
  µs: 1_000, // 1 microsecond has at least 1_000 ns
  ns: 1, // 1-999 nanoseconds
  // @ts-expect-error __proto__ is special property.
  __proto__: null,
} as const satisfies Record<TimeUnit, number>;

/**
 * Shift given time unit N positions up or down.
 *
 * **examples:**
 * ```
 * shiftTimeUnit('s', -10); // 'h'
 * shiftTimeUnit('s', -2); // 'h'
 * shiftTimeUnit('s', -1); // 'm'
 * shiftTimeUnit('s', 0); // 's'
 * shiftTimeUnit('s', 1); // 'ms'
 * shiftTimeUnit('s', 2); // 'µs'
 * shiftTimeUnit('s', 3); // 'ns'
 * shiftTimeUnit('s', 10); // 'ns'
 * ```
 *
 * @param fromUnit Time units to shift from.
 * @param shiftPositions How many position to shift from `fromUnits`. 0 means
 * same unit, 1 means next lower unit.
 * @returns
 */
export const shiftTimeUnit = (
  fromUnit: TimeUnit,
  shiftPositions: number
): TimeUnit =>
  timeUnits[
    Math.min(
      timeUnits.length - 1,
      Math.max(0, timeUnits.indexOf(fromUnit) + Math.round(shiftPositions))
    )
  ]!;

/**
 * Get the highest full time unit available for the current nanoseconds input.
 * Works with positive and negative values.
 *
 * **examples:**
 * ```
 * timeUnitsFromNs(-999); // 'ns'
 * timeUnitsFromNs(999); // 'ns'
 * timeUnitsFromNs(1000); // 'µs'
 * timeUnitsFromNs(1000000); // 'ms'
 * timeUnitsFromNs(-1000000); // 'ms'
 * ```
 * @param timeNs Time in nanoseconds.
 * @returns String representing the highest whole number units.
 */
export const timeUnitFromNs = (timeNs: number): TimeUnit => {
  const absTime = Math.abs(timeNs);
  for (const timeUnit of timeUnits)
    if (absTime >= TimeUnitInNs[timeUnit]) return timeUnit;
  return 'ns';
};

/**
 * Format time value from nanoseconds, microseconds, milliseconds, seconds,
 * minutes or hours to a more readable string. Provide a duration value and
 * optionally specify in what units the value is expressed. Default is
 * nanoseconds. Fractions will leak down to lower order units. You can cap the
 * output to a specific unit type or to a unit that is N positions lower than
 * the current highest whole unit.
 *
 * This function uses Number, not BigInt, to make use of
 * the built-in hardware (FPU) to speed up math operations.
 *
 * **caution:**
 * - Using integers will give you an approximate maximum value of 2501 hours as
 * the value is always converted to nanoseconds (2^53-1 in nanoseconds). Consult
 * Number.MAX_SAFE_INTEGER. Processing values above that might work, might not,
 * might produce unknown results.
 * - time is floored after converting to nanoseconds (0.5ns = 0ns)
 * - if all units have zero value, `'0[capTo || timeUnit]'` is displayed.
 *
 * **examples:**
 * ```
 * formatHighResTime(0, 'ms') // '0ms'
 * formatHighResTime(0, undefined, 's') // '0s'
 * formatHighResTime(0.5, 'ns') // '0ns'
 * formatHighResTime(0.5, undefined, 'ms') // '500µs'
 * formatHighResTime(0.5, 'ms', 'ms') // '1ms'
 * formatHighResTime(1 * 60 * 60 * 1_000_000_000) // '1h' default timeUnit: 'ns'
 * formatHighResTime(2 * 60 * 1_000_000_000) // '2m'
 * formatHighResTime(3 * 1_000_000_000) // '3s'
 * formatHighResTime(4 * 1_000_000) // '4ms'
 * formatHighResTime(5 * 1_000) // '5µs'
 * formatHighResTime(6) // '6ns'
 * formatHighResTime(
 *   1 * 60 * 60 * 1_000_000_000 +
 *   2 * 60 * 1_000_000_000 +
 *   3 * 1_000_000_000 +
 *   4 * 1_000_000 +
 *   5 * 1_000 +
 *   6
 * ); // '1h 2m 3s 4ms 5µs 6ns'
 * formatHighResTime(
 *   1 * 1_000_000_000 +
 *   2 * 1_000_000 +
 *   3 * 1_000 +
 *   4,
 *   'µs'
 * ); // '1s 2ms 3µs'
 * formatHighResTime(
 *   1 * 1_000_000_000 +
 *   2 * 1_000_000 +
 *   3 * 1_000 +
 *   4,
 *   2
 * ); // '1s 2ms 3µs'
 * formatHighResTime(1 * 1_000_000 + 2 * 1_000 + 3); // '1ms 2µs 3ns'
 * formatHighResTime(1 * 1_000_000 + 0 * 1_000 + 3); // '1ms 3ns'
 * formatHighResTime(1 * 1_000, undefined, 'ms'); // '1s'
 * formatHighResTime(1 * 1_000 + 1, 'h'); // '0h'
 * formatHighResTime(1 * 1_000 + 1, 'µs'); // '1µs'
 * formatHighResTime(1 * 1_000 + 1, 'ns'); // '1µs 1ns'
 * formatHighResTime(-1_100_100); // '-1ms 100µs 100ns'
 * ```
 *
 * @param time Time value. Value is converted to nanoseconds, floored and then
 * formatted.
 * @param capTo If set, caps the output to a specific unit or positions down
 * from the highest whole unit of the current time value. It effectively
 * 'floors' the output to a specific unit. Negative values are not allowed as
 * they would always produce `'0[unit]'` output.
 * `formatHighResTime(1 * 1_000 + 1, 'µs'); // '1µs'`
 * @param timeUnit Time value's unit. Specify in what unit `time` is expressed.
 * Defaults to `'ns'`.
 * @returns Formatted string with units of time. If a unit's value is
 * zero, it's omitted. If all units are omitted - `'0[capTo || timeUnit]'`
 * is displayed. If time is negative value, leading '-' is added.
 */
export const formatHighResTime = (
  time: number,
  capTo?: TimeUnit | number,
  timeUnit: TimeUnit = 'ns'
) => {
  const sign = time < 0 ? '-' : '';
  // convert to ns
  time = Math.abs(time) * TimeUnitInNs[timeUnit];
  // shift the time unit if cap is number
  if (typeof capTo === 'number')
    capTo = shiftTimeUnit(timeUnitFromNs(time), Math.max(0, capTo));

  if (capTo)
    time = Math.round(time / TimeUnitInNs[capTo]) * TimeUnitInNs[capTo];
  return (
    sign +
      Object.entries({
        h: Math.floor(time / TimeUnitInNs['h']),
        m: Math.floor((time % TimeUnitInNs['h']) / TimeUnitInNs['m']),
        s: Math.floor((time % TimeUnitInNs['m']) / TimeUnitInNs['s']),
        ms: Math.floor((time % TimeUnitInNs['s']) / TimeUnitInNs['ms']),
        µs: Math.floor((time % TimeUnitInNs['ms']) / TimeUnitInNs['µs']),
        ns: Math.floor(time) % TimeUnitInNs['µs'],
      })
        .map(([n, v]) => (v ? ` ${v}${n}` : ''))
        .join('')
        .substring(1) || `0${capTo || timeUnit}`
  );
};
