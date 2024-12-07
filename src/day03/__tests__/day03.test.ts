import { describe, expect, test } from 'vitest';
import { part1 } from '../part1.js';

describe('Day 3', () => {
  test('Part 1', () => {
    const data =
      'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';
    expect(part1(data)).toBe(161);
  });
});
