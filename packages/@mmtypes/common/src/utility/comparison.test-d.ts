import { describe, test, expectTypeOf } from 'vitest';
import { IfNumberLiteral } from './comparison';

describe('IfNumberLiteral', () => {
  test('returns Y type', () => {
    expectTypeOf<true>().toMatchTypeOf<IfNumberLiteral<123>>;
    type A = 'ok';
    expectTypeOf<A>().toMatchTypeOf<IfNumberLiteral<123, A>>;
  });
  test('returns N type', () => {
    expectTypeOf<false>().toMatchTypeOf<IfNumberLiteral<number>>;
    expectTypeOf<false>().toMatchTypeOf<IfNumberLiteral<string>>;
    expectTypeOf<false>().toMatchTypeOf<IfNumberLiteral<'123'>>;
    type A = 'not ok';
    expectTypeOf<A>().toMatchTypeOf<IfNumberLiteral<number, true, A>>;
  });
});
