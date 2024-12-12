// Advent of Code - Day 6

import { describe, expect, test } from 'vitest';
import { part1 } from '../part1.js';
import { part2 } from '../part2.js';

describe('Day 6', () => {
  const data = [
    '....#.....',
    '.........#',
    '..........',
    '..#.......',
    '.......#..',
    '..........',
    '.#..^.....',
    '........#.',
    '#.........',
    '......#...',
  ];

  test('Part 1', () => {
    expect(part1(data)).toBe(41);
  });

  test('Part 2', () => {
    expect(part2(data)).toBe(0);
  });
});
