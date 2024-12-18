// Advent of Code - Day 7

import { describe, expect, test } from 'vitest';
import { part1 } from '../part1.js';
import { part2 } from '../part2.js';

describe('Day 7', () => {
  const data = [
    '190: 10 19',
    '3267: 81 40 27',
    '83: 17 5',
    '156: 15 6',
    '7290: 6 8 6 15',
    '161011: 16 10 13',
    '192: 17 8 14',
    '21037: 9 7 18 13',
    '292: 11 6 16 20',
  ];

  test('Part 1', () => {
    expect(part1(data)).toBe(3749);
  });

  test('Part 2', () => {
    expect(part2(data)).toBe(11387);
  });
});
