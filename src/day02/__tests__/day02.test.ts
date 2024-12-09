// Advent of Code - Day 2

import { describe, expect, test } from 'vitest';
import { part1 } from '../part1.js';
import { part2 } from '../part2.js';

describe('Day 2', () => {
  const data = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9],
  ];

  test('Part 1', () => {
    expect(part1(data)).toBe(2);
  });

  test('Part 2', () => {
    expect(part2(data)).toBe(4);
  });
});
