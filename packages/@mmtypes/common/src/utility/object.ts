// only accepts {}
/**
 * Accepts only empty object '{}'.
 *
 * ---
 * _**Examples:**_
 * ```typescript
 * const x1: EmptyObject = {}; // ok
 * const x2: EmptyObject = []; // NOT ok
 * const x3: EmptyObject = {a:1}; // NOT ok
 * ```
 */
export type EmptyObject = Record<string, never>;

/**
 * At least one property from the provided object T is required.
 *
 * ---
 * _**Examples:**_
 * ```typescript
 * const x1: AtLeastOneProperty<{ a: number; b: number }> = { }; // NOT ok
 * const x2: AtLeastOneProperty<{ a: number; b: number }> = { a: 1 }; // ok
 * const x3: AtLeastOneProperty<{ a: number; b: number }> = { b: 2 }; // ok
 * const x4: AtLeastOneProperty<{ a: number; b: number }> = { a: 1, b: 2, c: 3 }; // NOT ok
 * ```
 */
export type AtLeastOneProperty<T> = {
  [K in keyof T]: { [P in K]: T[K] };
}[keyof T];
