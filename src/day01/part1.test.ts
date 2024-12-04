import { describe, expect, test } from 'vitest';
import { part1 } from './part1.js';

describe('Day 1', () => {
  test('Part 1', () => {
    const leftList = [3, 4, 2, 1, 3, 3];
    const rightList = [4, 3, 5, 3, 9, 3];

    expect(part1(leftList, rightList)).toBe(11);
  });
});
