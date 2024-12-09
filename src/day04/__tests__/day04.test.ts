// Advent of Code - Day 4

import { describe, expect, test } from 'vitest';
import { part1 } from '../part1.js';
import { part2 } from '../part2.js';

describe('Day 4', () => {
  test('Part 1', () => {
    const data = [
      '....XXMAS.',
      '.SAMXMS...',
      '...S..A...',
      '..A.A.MS.X',
      'XMASAMX.MM',
      'X.....XA.A',
      'S.S.S.S.SS',
      '.A.A.A.A.A',
      '..M.M.M.MM',
      '.X.X.XMASX',
    ];

    expect(part1(data)).toBe(18);
  });

  test('Part 2', () => {
    const data = [
      '.M.S......',
      '..A..MSMS.',
      '.M.S.MAA..',
      '..A.ASMSM.',
      '.M.S.M....',
      '..........',
      'S.S.S.S.S.',
      '.A.A.A.A..',
      'M.M.M.M.M.',
      '..........',
    ];

    expect(part2(data)).toBe(9);
  });
});
