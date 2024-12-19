// Advent of Code - Day 8

import { describe, expect, test } from 'vitest';
import { part1 } from '../part1.js';
import { part2 } from '../part2.js';

describe('Day 8', () => {
  const data = [
    '............',
    '........0...',
    '.....0......',
    '.......0....',
    '....0.......',
    '......A.....',
    '............',
    '............',
    '........A...',
    '.........A..',
    '............',
    '............',
  ];

  test('Part 1', () => {
    expect(part1(data)).toBe(14);
  });

  test('Part 2', () => {
    expect(part2(data)).toBe(34);
  });
});
