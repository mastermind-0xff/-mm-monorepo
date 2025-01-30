import { describe, test } from 'vitest';
import { EmptyObject } from './object';

describe('EmptyObject', () => {
  test('allows only for empty object', () => {
    const x1: EmptyObject = {};
    // @ts-expect-error empty array (never[]) is different from empty object
    const x2: EmptyObject = [];
    // @ts-expect-error can't assign to never
    const x3: EmptyObject = { a: 1 };
  });
});
