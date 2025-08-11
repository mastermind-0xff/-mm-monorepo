import {
  asError,
  envToBoolean,
  generateError,
  toConsoleString,
} from '../index';

describe('toConsoleString', () => {
  test('works with all primitive types', () => {
    expect(toConsoleString('abc')).toStrictEqual(`'abc'`);
    expect(toConsoleString(123n)).toStrictEqual('123n');
    expect(toConsoleString(123)).toStrictEqual('123');
    expect(toConsoleString(true)).toStrictEqual('true');
    expect(toConsoleString(Symbol('abc'))).toStrictEqual(`Symbol(abc)`);
    expect(toConsoleString(() => 123)).toStrictEqual('() => 123');
    expect(toConsoleString(class A {})).toStrictEqual(`class A {\n    }`);
    expect(toConsoleString(null)).toStrictEqual('null');
    expect(toConsoleString({ a: 123 })).toStrictEqual('{"a":123}');
    expect(toConsoleString({ a: 123n })).toStrictEqual('{"a":"123n"}');
  });
});

describe('generateError', () => {
  test('returns error object with string value', () => {
    expect(generateError('Message prefix', 'abc')).toMatchObject({
      message: `Message prefix [typeof value]: string; [value]: 'abc'`,
    });
  });
});

describe('asError', () => {
  test('converts string to Error object', () => {
    expect(asError('Should be instance of Error')).toBeInstanceOf(Error);
    expect(asError('This is error message')).toMatchObject({
      name: 'Error',
      message: 'This is error message',
    });
  });
  test('accepts instanceof Error', () => {
    expect(asError(new TypeError(''))).toBeInstanceOf(TypeError);
    expect(asError(new TypeError(''))).toBeInstanceOf(Error);
  });
  test('throws if no string nor Error instance is provided', () => {
    // @ts-expect-error Testing runtime
    expect(() => asError({ key: 123 })).toThrow(TypeError);
  });
});

describe('envToBoolean', () => {
  test('returns true', () => {
    expect(envToBoolean('true')).toStrictEqual(true);
    expect(envToBoolean('1')).toStrictEqual(true);
  });
  test('returns false', () => {
    expect(envToBoolean('unknown string')).toStrictEqual(false);
    expect(envToBoolean('false')).toStrictEqual(false);
    expect(envToBoolean('0')).toStrictEqual(false);
    expect(envToBoolean('')).toStrictEqual(false);
    expect(envToBoolean()).toStrictEqual(false);
  });
});
