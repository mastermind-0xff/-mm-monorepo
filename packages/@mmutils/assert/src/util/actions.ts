/**
 * Represent a value of any kind as a string suitable for console output.
 * @param value Value to output as a string.
 * @returns String.
 */
export const toConsoleString = (value: unknown): string => {
  switch (typeof value) {
    case 'string':
      return `'${value}'`;
    case 'bigint':
      return value.toString() + 'n';
    case 'number':
    case 'boolean':
    case 'symbol':
    case 'undefined':
      return String(value);
    case 'function':
      return Function.prototype.toString.call(value);
    default:
      return JSON.stringify(value, (k, v) =>
        typeof v === 'bigint' ? v.toString() + 'n' : v
      );
  }
};

/**
 * Generate error object based on prefix string and value. Value is converted to
 * string representation.
 * @param messagePrefix String to attach debug data to.
 * @param value Value leading to the error.
 * @param ErrorClass Type of the error. Defaults to TypeError.
 * @returns new ErrorClass with message set as the prefix and string
 * representation of the value.
 */
export const generateError = (
  messagePrefix: string,
  value: unknown,
  ErrorClass: new (
    message?: string,
    options?: {
      cause?: unknown;
    }
  ) => Error = TypeError
) =>
  new ErrorClass(
    `${messagePrefix} [typeof value]: ${typeof value}; [value]: ${toConsoleString(value)}`
  );

/**
 * Convert string to an Error or use the provided error object and return the
 * result.
 * @param error String or any instance of Error constructor.
 * @returns New Error or error object of the given constructor.
 * @throws TypeError if error is not string or Error instance.
 */
export const asError = <T extends Error>(
  error: string | T
): Error | T | never => {
  if (typeof error === 'string') return new Error(error);
  if (error instanceof Error) return error;
  throw new TypeError(
    `'error' argument can't be safely converted to Error! Please, use string or Error object.`
  );
};

/**
 * Convert environment variable value '1' and 'true' to true (boolean) and
 * everything else to false.
 * @param value Environment variable to be converted to boolean.
 * @returns true or false
 */
export const envToBoolean = (value?: string) =>
  value === 'true' || value === '1';
