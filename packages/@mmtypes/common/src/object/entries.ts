import type { EmptyObject } from '../utility/object';
import type {
  StringLiteralToCharTuple,
  NumberedTupleSplicer,
} from '../utility/array';
import type { IfNumberLiteral } from '../utility/comparison';

/**
 * Narrower return type for Object.entries based on the input type, what JS
 * returns and what are the build in types from TypeScript.
 *
 * _**WARNING**: Do not use this type if you are not certain that the object you
 * iterate over won't change during runtime._
 *
 * ---
 * _**Examples:**_
 * ```typescript
 * type T1 = ObjectEntries<{ a: number; b: string }>; // (["a", number] | ["b", string])[]
 * type T2 = ObjectEntries<{ a: 123; b: 'abc' }>; // (["a", 123] | ["b", "abc"])[]
 * type T3 = ObjectEntries<{}>; // [string, unknown][]
 * type T4 = ObjectEntries<[]>; // [string, never][]
 * type T5 = ObjectEntries<'abc'>; // (["0", "a"] | ["1", "b"] | ["2", "c"])[]
 * type T6 = ObjectEntries<string>; // [string, string][]
 * type T7 = ObjectEntries<readonly ['a', 'b']>; // (["0", "a"] | ["1", "b"])[]
 * type T8 = ObjectEntries<[string, number, ...boolean[]]>; // [string, string | number | boolean][]
 * type T9 = ObjectEntries<number | boolean | bigint>; // [string, any][]
 * ```
 */
export type ObjectEntries<T> =
  T extends undefined | null ? never
  : T extends [] ? [string, never][]
  : T extends EmptyObject ? ReturnType<typeof Object.entries<unknown>>
  : T extends `${infer Chars}` ?
    NumberedTupleSplicer<StringLiteralToCharTuple<Chars>>
  : T extends string ? [string, string][]
  : T extends ReadonlyArray<infer KeysType> ?
    IfNumberLiteral<T['length'], NumberedTupleSplicer<T>, [string, KeysType][]>
  : T extends { [s: string]: unknown } ?
    Exclude<
      { [K in keyof T & (string | number)]: [`${K}`, T[K]] }[keyof T &
        (string | number)],
      undefined
    >[]
  : ReturnType<typeof Object.entries>;
