import { envToBoolean } from '../util/actions';

/**
 * Configurable settings object. Sets the default behavior of some of the
 * basic methods.
 */
export const AssertPrimitiveOptions = {
  /**
   * _default_: **true**.
   *
   * If true, isNumber won't threat NaN as a number.
   */
  numberExcludeNaN: envToBoolean(process.env.AP_NUMBER_EXCLUDE_NAN ?? 'true'),
};
