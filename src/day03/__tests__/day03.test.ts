// Advent of Code - Day 3

import { describe, expect, test } from 'vitest';
import { part1 } from '../part1.js';
import { part2 } from '../part2.js';

describe('Day 3', () => {
  test('Part 1', () => {
    const data =
      'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';
    expect(part1(data)).toBe(161);
  });

  test('Part 2', () => {
    const data =
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
    expect(part2(data)).toBe(48);
  });
});
