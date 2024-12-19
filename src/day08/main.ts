// Advent of Code - Day 8

import { readFile } from 'fs/promises';
import { part1 } from './part1.js';
import { part2 } from './part2.js';

(async function () {
  try {
    const input = await readFile('src/day08/resources/input.txt', 'utf8').then(
      (input) => input.split('\n'),
    );

    console.log('--- Part One ---');
    console.log('Result', part1(input));

    console.log('--- Part Two ---');
    console.log('Result', part2(input));
  } catch (err) {
    console.error(err);
  }
})();
