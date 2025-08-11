import { AssertPrimitiveOptions } from '../config/options';
import type { Callable, Newable } from '../util/types';

/**
 * Checks the provided value is nullish.
 * @param value Value to be checked.
 * @returns True if value is nullish, false otherwise.
 */
export const isNullish = (value: unknown): value is null | undefined =>
  value == null;

/**
 * Checks the provided value is null.
 * @param value Value to be checked.
 * @returns True if value is null, false otherwise.
 */
export const isNull = (value: unknown): value is null => value === null;

/**
 * Checks the provided value is undefined.
 * @param value Value to be checked.
 * @returns True if value is undefined, false otherwise.
 */
export const isUndefined = (value: unknown): value is undefined =>
  value === undefined;

/**
 * Checks the provided value is a boolean.
 * @param value Value to be checked.
 * @returns True if value is a boolean, false otherwise.
 */
export const isBoolean = (value: unknown): value is boolean =>
  typeof value === 'boolean';

/**
 * Checks the provided value is a number. Excludes NaN by default.
 * @param value Value to be checked.
 * @param excludeNaN If true, excludes NaN from the check. Defaults to the value
 * of the options object for the NaN property.
 * @returns True if value is a number, false otherwise.
 */
export const isNumber = (
  value: unknown,
  excludeNaN: boolean = AssertPrimitiveOptions.numberExcludeNaN
): value is number =>
  typeof value === 'number' && (excludeNaN ? !Number.isNaN(value) : true);
/**
 * Checks the provided value is a bigint.
 * @param value Value to be checked.
 * @returns True if value is a bigint, false otherwise.
 */
export const isBigInt = (value: unknown): value is bigint =>
  typeof value === 'bigint';

/**
 * Checks the provided value is a string.
 * @param value Value to be checked.
 * @returns True if value is a string, false otherwise.
 */
export const isString = (value: unknown): value is string =>
  typeof value === 'string';

/**
 * Checks the provided value is a symbol.
 * @param value Value to be checked.
 * @returns True if value is a symbol, false otherwise.
 */
export const isSymbol = (value: unknown): value is symbol =>
  typeof value === 'symbol';

/**
 * Checks the provided value is an object of any type. Excludes null to match
 * TypeScript's object and null type separation.
 * @param value Value to be checked.
 * @returns True if value is an object, false otherwise.
 */
export const isObject = (value: unknown): value is object =>
  typeof value === 'object' && value !== null;

/**
 * Checks the provided value is an object. Includes null, reflecting
 * JavaScript’s typeof null === 'object' behavior.
 * @param value Value to be checked.
 * @returns True if value is an object, false otherwise.
 */
export const isNullableObject = (value: unknown): value is object | null =>
  typeof value === 'object';

/**
 * Checks the provided value is an array.
 * @param value Value to be checked.
 * @returns True if value is an array, false otherwise.
 */
export const isArray = (value: unknown): value is Array<unknown> =>
  Array.isArray(value);

/**
 * Checks the provided value is a function.
 * @param value Value to be checked.
 * @returns True if value is a function, false otherwise.
 */
export const isFunction = <T>(
  value: T
): value is Extract<T, Callable | Newable | (Callable & Newable)> =>
  typeof value === 'function';
