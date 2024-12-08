// Advent of Code - Day 4

import { readFile } from 'fs/promises';
import { part1 } from './part1.js';
import { part2 } from './part2.js';

(async function () {
  try {
    const data = await readFile('src/day04/resources/input.txt', 'utf8').then(
      (input) => input.split('\n'),
    );

    console.log('--- Part One ---');
    console.log('Result', part1(data));

    console.log('--- Part Two ---');
    console.log('Result', part2(data));
  } catch (err) {
    console.error(err);
  }
})();
