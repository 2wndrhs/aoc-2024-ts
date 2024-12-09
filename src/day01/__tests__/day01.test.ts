// Advent of Code - Day 1

import { describe, expect, test } from 'vitest';
import { part1 } from '../part1.js';
import { part2 } from '../part2.js';

describe('Day 1', () => {
  const leftList = [3, 4, 2, 1, 3, 3];
  const rightList = [4, 3, 5, 3, 9, 3];

  test('Part 1', () => {
    expect(part1(leftList, rightList)).toBe(11);
  });

  test('Part 2', () => {
    expect(part2(leftList, rightList)).toBe(31);
  });
});
