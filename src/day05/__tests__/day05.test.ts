// Advent of Code - Day 5

import { describe, expect, test } from 'vitest';
import { part1 } from '../part1.js';
import { part2 } from '../part2.js';

describe('Day 5', () => {
  const pageOrderingRules = [
    '47|53',
    '97|13',
    '97|61',
    '97|47',
    '75|29',
    '61|13',
    '75|53',
    '29|13',
    '97|29',
    '53|29',
    '61|53',
    '97|53',
    '61|29',
    '47|13',
    '75|47',
    '97|75',
    '47|61',
    '75|61',
    '47|29',
    '75|13',
    '53|13',
  ];

  const pageUpdates = [
    '75,47,61,53,29',
    '97,61,53,29,13',
    '75,29,13',
    '75,97,47,61,53',
    '61,13,29',
    '97,13,75,29,47',
  ];

  test('Part 1', () => {
    expect(part1(pageOrderingRules, pageUpdates)).toBe(143);
  });

  test('Part 2', () => {
    expect(part2(pageOrderingRules, pageUpdates)).toBe(123);
  });
});
