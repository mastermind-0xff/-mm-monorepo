// Definition of top types for functions / classes
export type Callable = (...args: never) => unknown;
export type Newable = new (...args: never) => unknown;
