import { formatHighResTime, shiftTimeUnit, timeUnitFromNs } from './time';

describe('shiftTimeUnit', () => {
  test('works within range', () => {
    expect(shiftTimeUnit('s', -2)).toStrictEqual('h');
    expect(shiftTimeUnit('s', -1)).toStrictEqual('m');
    expect(shiftTimeUnit('s', 0)).toStrictEqual('s');
    expect(shiftTimeUnit('s', 1)).toStrictEqual('ms');
    expect(shiftTimeUnit('s', 2)).toStrictEqual('µs');
    expect(shiftTimeUnit('s', 3)).toStrictEqual('ns');
  });
  test('works out of range', () => {
    expect(shiftTimeUnit('s', -10)).toStrictEqual('h');
    expect(shiftTimeUnit('s', -1)).toStrictEqual('m');
    expect(shiftTimeUnit('s', 5)).toStrictEqual('ns');
    expect(shiftTimeUnit('s', 10)).toStrictEqual('ns');
  });
  test('works with fractions', () => {
    expect(shiftTimeUnit('s', 0.4)).toStrictEqual('s');
    expect(shiftTimeUnit('s', 0.5)).toStrictEqual('ms');
    expect(shiftTimeUnit('s', 1.5)).toStrictEqual('µs');
  });
});

describe('timeUnitFromNs', () => {
  test('works with positive numbers', () => {
    expect(timeUnitFromNs(0)).toStrictEqual('ns');
    expect(timeUnitFromNs(1)).toStrictEqual('ns');
    expect(timeUnitFromNs(999)).toStrictEqual('ns');
    expect(timeUnitFromNs(1_000)).toStrictEqual('µs');
    expect(timeUnitFromNs(999_999)).toStrictEqual('µs');
    expect(timeUnitFromNs(1_000_000)).toStrictEqual('ms');
    expect(timeUnitFromNs(999_999_999)).toStrictEqual('ms');
    expect(timeUnitFromNs(1_000_000_000)).toStrictEqual('s');
    expect(timeUnitFromNs(59_999_999_999)).toStrictEqual('s');
    expect(timeUnitFromNs(60_000_000_000)).toStrictEqual('m');
    expect(timeUnitFromNs(3_599_999_999_999)).toStrictEqual('m');
    expect(timeUnitFromNs(3_600_000_000_000)).toStrictEqual('h');
    expect(timeUnitFromNs(3700e9)).toStrictEqual('h');
    expect(timeUnitFromNs(3700e12)).toStrictEqual('h');
    expect(timeUnitFromNs(Infinity)).toStrictEqual('h');
    expect(timeUnitFromNs(NaN)).toStrictEqual('ns');
  });
  test('works with negative numbers', () => {
    expect(timeUnitFromNs(-1)).toStrictEqual('ns');
    expect(timeUnitFromNs(-3_600_000_000_000)).toStrictEqual('h');
    expect(timeUnitFromNs(-Infinity)).toStrictEqual('h');
  });
});

describe('formatHighResTime', () => {
  test('regular input', () => {
    expect(
      formatHighResTime(1 * 3600e9 + 2 * 60e9 + 3 * 1e9 + 4 * 1e6 + 5 * 1e3 + 6)
    ).toStrictEqual('1h 2m 3s 4ms 5µs 6ns');
    expect(
      formatHighResTime(1 * 3600e9 + 0 * 60e9 + 3 * 1e9 + 0 * 1e6 + 5 * 1e3)
    ).toStrictEqual('1h 3s 5µs');

    expect(formatHighResTime(1_000_000_000_000_000, 'h')).toStrictEqual('278h');
  });
  test('cap capabilities', () => {
    expect(formatHighResTime(1_000_000, 0)).toStrictEqual('1ms');
    expect(formatHighResTime(1_000_000, 1)).toStrictEqual('1ms');
    expect(formatHighResTime(1_100_000, 1)).toStrictEqual('1ms 100µs');

    expect(formatHighResTime(1_100_000, -1)).toStrictEqual('1ms');
    expect(formatHighResTime(1_100_000, 100)).toStrictEqual('1ms 100µs');
  });
  test('negative input', () => {
    expect(formatHighResTime(-1_000_000)).toStrictEqual('-1ms');
    expect(formatHighResTime(-1_100_100)).toStrictEqual('-1ms 100µs 100ns');
  });
  test('overflow', () => {
    expect(formatHighResTime(Number.MAX_SAFE_INTEGER)).toStrictEqual(
      '2501h 59m 59s 254ms 740µs 991ns'
    );
    expect(formatHighResTime(Number.POSITIVE_INFINITY)).toStrictEqual(
      'Infinityh'
    );
  });
  test('edge cases', () => {
    expect(formatHighResTime(0)).toStrictEqual('0ns');
    expect(formatHighResTime(0, 's')).toStrictEqual('0s');
    expect(formatHighResTime(0, undefined, 'm')).toStrictEqual('0m');

    expect(formatHighResTime(0.5)).toStrictEqual('0ns');
    expect(formatHighResTime(0.5, undefined, 'ms')).toStrictEqual('500µs');
    expect(formatHighResTime(0.5, 'ms', 'ms')).toStrictEqual('1ms');

    expect(formatHighResTime(1_000, 'h')).toStrictEqual('0h');
  });
});
