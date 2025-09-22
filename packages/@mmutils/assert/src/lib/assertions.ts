import {
  isBoolean,
  isNumber,
  isString,
  isSymbol,
  isObject,
  isArray,
  isFunction,
  isNullish,
  isBigInt,
  isNull,
  isUndefined,
  isNullableObject,
} from './primitives';
import { asError, generateError } from '../util/actions';
import { AssertError } from '../util/errors';
import { Callable, Newable } from '../util/types';

/**
 * Asserts a condition. Throws an Error instance if the condition is not met.
 * ___
 * @param condition The condition to be checked. Throws an error if false.
 * @param error Optional error message or Error instance to be thrown. Defaults
 * to AssertError.
 * @throws AssertError, Error, or a custom Error instance.
 * ___
 * @example
 * *example 1:*
 * ```typescript
 * (x: number) => {
 *   assert(x === 5);
 *   x; // type of x is 5, not number
 * };
 * ```
 *
 * *example 2:*
 * ```typescript
 * type Data =
 *   | { type: 'important'; value: 42 }
 *   | { type: 'other'; value?: string };
 *
 * const logValue = (userRole: 'admin' | 'guest', data?: Data) => {
 *   if (userRole === 'admin') {
 *     assert(
 *       data != null && data.type === 'important',
 *       'Important data missing!'
 *     );
 *     console.log('value:', data.value); // data.value's type is 42
 *   } else {
 *     console.log('value:', data?.value ?? 'no value provided');
 *   }
 * };
 * ```
 */
export function assert(
  condition: boolean,
  error: string | Error = new AssertError('Assert condition not met!')
): asserts condition {
  if (!condition) throw asError(error);
}

/**
 * Asserts that the given value is nullish. Throws an Error instance if it's not.
 * @param value The value to be checked. Throws an error if not null or
 * undefined.
 * @param error Optional error message or Error instance. Defaults to TypeError.
 * @throws TypeError, Error, or a custom Error instance.
 */
export function assertIsNullish(
  value: unknown,
  error: string | Error = generateError(
    `'value' is not null or undefined!`,
    value
  )
): asserts value is null | undefined {
  if (!isNullish(value)) throw asError(error);
}

/**
 * Asserts that the given value is non-nullish. Throws an Error instance if it's
 * not.
 * @param value The value to be checked. Throws an error if null or undefined.
 * @param error Optional error message or Error instance. Defaults to TypeError.
 * @throws TypeError, Error, or a custom Error instance.
 */
export function assertIsNonNullish<T>(
  value: T,
  error: string | Error = generateError(`'value' is null or undefined!`, value)
): asserts value is NonNullable<T> {
  if (isNullish(value)) throw asError(error);
}

/**
 * Asserts that the given value is null. Throws an Error instance if it's not.
 * @param value The value to be checked. Throws an error if not null.
 * @param error Optional error message or Error instance. Defaults to TypeError.
 * @throws TypeError, Error, or a custom Error instance.
 */
export function assertIsNull(
  value: unknown,
  error: string | Error = generateError(`'value' is not null!`, value)
): asserts value is null {
  if (!isNull(value)) throw asError(error);
}
/**
 * Asserts that the given value is undefined. Throws an Error instance if it's
 * not.
 * @param value The value to be checked. Throws an error if not undefined.
 * @param error Optional error message or Error instance. Defaults to TypeError.
 * @throws TypeError, Error, or a custom Error instance.
 */
export function assertIsUndefined(
  value: unknown,
  error: string | Error = generateError(`'value' is not undefined!`, value)
): asserts value is undefined {
  if (!isUndefined(value)) throw asError(error);
}

/**
 * Asserts that the given value is a boolean. Throws an Error instance if it's
 * not.
 * @param value The value to be checked. Throws an error if not a boolean.
 * @param error Optional error message or Error instance. Defaults to TypeError.
 * @throws TypeError, Error, or a custom Error instance.
 */
export function assertIsBoolean(
  value: unknown,
  error: string | Error = generateError(`'value' is not boolean!`, value)
): asserts value is boolean {
  if (!isBoolean(value)) throw asError(error);
}

/**
 * Asserts that the given value is a number. Throws an Error instance if it's
 * not. Nan is not included in the check by default.
 * @param value The value to be checked. Throws an error if not a number.
 * @param error Optional error message or Error instance. Defaults to TypeError.
 * @throws TypeError, Error, or a custom Error instance.
 */
export function assertIsNumber(
  value: unknown,
  error: string | Error = generateError(`'value' is not number!`, value)
): asserts value is number {
  if (!isNumber(value)) throw asError(error);
}

/**
 * Asserts that the given value is a bigint. Throws an Error instance if it's
 * not.
 * @param value The value to be checked. Throws an error if not a bigint.
 * @param error Optional error message or Error instance. Defaults to TypeError.
 * @throws TypeError, Error, or a custom Error instance.
 */
export function assertIsBigInt(
  value: unknown,
  error: string | Error = generateError(`'value' is not bigint!`, value)
): asserts value is bigint {
  if (!isBigInt(value)) throw asError(error);
}

/**
 * Asserts that the given value is a string. Throws an Error instance if it's
 * not.
 * @param value The value to be checked. Throws an error if not a string.
 * @param error Optional error message or Error instance. Defaults to TypeError.
 * @throws TypeError, Error, or a custom Error instance.
 */
export function assertIsString(
  value: unknown,
  error: string | Error = generateError(`'value' is not string!`, value)
): asserts value is string {
  if (!isString(value)) throw asError(error);
}

/**
 * Asserts that the given value is a symbol. Throws an Error instance if it's
 * not.
 * @param value The value to be checked. Throws an error if not a symbol.
 * @param error Optional error message or Error instance. Defaults to TypeError.
 * @throws TypeError, Error, or a custom Error instance.
 */
export function assertIsSymbol(
  value: unknown,
  error: string | Error = generateError(`'value' is not symbol!`, value)
): asserts value is symbol {
  if (!isSymbol(value)) throw asError(error);
}

/**
 * Asserts that the given value is an object. Throws an Error instance if it's
 * not.
 * **Null is not** included in this assertion.
 * @param value The value to be checked. Throws an error if not an object.
 * @param error Optional error message or Error instance. Defaults to TypeError.
 * @throws TypeError, Error, or a custom Error instance.
 */
export function assertIsObject(
  value: unknown,
  error: string | Error = generateError(`'value' is not object!`, value)
): asserts value is object {
  if (!isObject(value)) throw asError(error);
}

/**
 * Asserts that the given value is an object. Throws an Error instance if it's
 * not.
 * **Null is** included in this assertion.
 * @param value The value to be checked. Throws an error if not an object.
 * @param error Optional error message or Error instance. Defaults to TypeError.
 * @throws TypeError, Error, or a custom Error instance.
 */
export function assertIsNullableObject(
  value: unknown,
  error: string | Error = generateError(
    `'value' is not nullable object!`,
    value
  )
): asserts value is object | null {
  if (!isNullableObject(value)) throw asError(error);
}

/**
 * Asserts that the given value is an array. Throws an Error instance if it's
 * not.
 * @param value The value to be checked. Throws an error if not an array.
 * @param error Optional error message or Error instance. Defaults to TypeError.
 * @throws TypeError, Error, or a custom Error instance.
 */
export function assertIsArray(
  value: unknown,
  error: string | Error = generateError(`'value' is not array!`, value)
): asserts value is Array<unknown> {
  if (!isArray(value)) throw asError(error);
}

/**
 * Asserts that the given value is a function. Throws an Error instance if it's
 * not.
 * @param value The value to be checked. Throws an error if not a function.
 * @param error Optional error message or Error instance. Defaults to TypeError.
 * @throws TypeError, Error, or a custom Error instance.
 */
export function assertIsFunction<T>(
  value: T,
  error: string | Error = generateError(`'value' is not function!`, value)
): asserts value is Extract<T, Callable | Newable | (Callable & Newable)> {
  if (!isFunction(value)) throw asError(error);
}

/**
 * Asserts that exhaustive checks were preformed in control flow and this action
 * won't execute when new code gets added.
 * @param value The value to be checked.
 * @param error Optional error message or Error instance. Defaults to
 * AssertError.
 * @throws AssertError, Error, or a custom Error instance.
 */
export function assertNever(
  value: never,
  error: string | Error = generateError(
    `'value' is not never. This line should not execute!`,
    value,
    AssertError
  )
): never {
  throw asError(error);
}
