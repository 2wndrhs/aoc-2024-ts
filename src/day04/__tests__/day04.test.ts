import { describe, expect, test } from 'vitest';
import { part1 } from '../part1.js';

describe('Day 4', () => {
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

  test('Part 1', () => {
    expect(part1(data)).toBe(18);
  });
});
