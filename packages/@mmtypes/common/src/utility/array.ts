// N=3 -> ['0', '1', '2'] or [0, 1, 2] (if AsString is false)
/**
 * Provide a number N to generate numbered tuple of N elements. If AsString is
 * false, the tuple elements are number literals.
 *
 * ---
 * _**Examples:**_
 * ```typescript
 * type T1 = TupleOfNElements<3>; // ['0','1','2']
 * type T2 = TupleOfNElements<3, true>; // ['0','1','2']
 * type T3 = TupleOfNElements<3, false>; // [0,1,2]
 * ```
 */
export type TupleOfNElements<
  N extends number,
  AsString extends boolean = true,
  Aggregate extends Array<unknown> = [],
> =
  Aggregate['length'] extends N ? Aggregate
  : TupleOfNElements<
      N,
      AsString,
      [
        ...Aggregate,
        AsString extends true ? `${Aggregate['length']}` : Aggregate['length'],
      ]
    >;

// ['0', '1', '2'], ['a', 'b', 'c'] -> (['0', 'a'] | ['1', 'b'] | ['2', 'c'])[]
/**
 * Creates tuple of type [NumsTuple[n], ValuesTuple[NumsTuple[n]]] the
 * intersecting keys from ValuesTuple and NumsTuple values. The resulting 0
 * index tuple element will have the type of NumsTuple[n].
 *
 * ---
 * _**Examples:**_
 * ```typescript
 * type T1 = NumberedTupleSplicer<['a', 'b', 'c']>; // (["0", "a"] | ["1", "b"] | ["2", "c"])[]
 * type T2 = NumberedTupleSplicer<['a', 'b', 'c'], [0, 1, 2]>; // ([0, "a"] | [1, "b"] | [2, "c"])[]
 * type T3 = NumberedTupleSplicer<['a', 'b', 'c', 'd'], ['1', '3', '5']>; // (["1", "b"] | ["3", "d"])[]
 * ```
 */
export type NumberedTupleSplicer<
  ValuesTuple extends ArrayLike<unknown>,
  NumsTuple extends ArrayLike<string | number> = TupleOfNElements<
    ValuesTuple['length']
  >,
  R = {
    [K in Extract<NumsTuple[number], keyof ValuesTuple>]: [K, ValuesTuple[K]];
  },
> = R[keyof R][];

// 'abc' -> ['a', 'b', 'c']
/**
 * Converts a string literal to a char literal tuple.
 *
 * ---
 * _**Examples:**_
 * ```typescript
 * type T1 = StringLiteralToCharTuple<'abc'>; // ["a", "b", "c"]
 * ```
 */
export type StringLiteralToCharTuple<T extends string> =
  T extends `${infer F}${infer R}` ? [F, ...StringLiteralToCharTuple<R>] : [];

/**
 * At least one item from a tuple or an array T is required.
 *
 * ---
 * _**Examples:**_
 * ```typescript
 * type T1 = AtLeastOneItem<[]>; // [never, ...never[]]
 * type T2 = AtLeastOneItem<[1]>; // [1, ...1[]]
 * type T3 = AtLeastOneItem<[1,2,3]>; // [1 | 2 | 3, ...(1 | 2 | 3)[]]
 *
 * const x1: AtLeastOneItem<[1,2,3]> = []; // NOT ok
 * const x2: AtLeastOneItem<[1,2,3]> = [2]; // ok
 * const x3: AtLeastOneItem<[1,2,3]> = [3,1,2]; // ok
 * const x4: AtLeastOneItem<[1,2,3]> = [3,1,2,4]; // NOT ok
 * ```
 */
export type AtLeastOneItem<T extends unknown[] | readonly unknown[]> = [
  T[number],
  ...T[number][],
];
