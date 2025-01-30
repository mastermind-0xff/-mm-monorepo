// 1 -> true, number -> false
/**
 * Returns Y type if T is number literal and N type if it's not.
 *
 * ---
 * _**Examples:**_
 * ```typescript
 * type T1 = IfNumberLiteral<number>; // false
 * type T2 = IfNumberLiteral<1>; // true
 * type T3 = IfNumberLiteral<1, { a: 1 }, { b: 2 }>; // { a: 1 }
 * ```
 */
export type IfNumberLiteral<T, Y = true, N = false> =
  number extends T ? N
  : [T] extends [never] ? N
  : [T] extends [number] ? Y
  : N;
