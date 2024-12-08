// Advent of Code - Day 5

import { readFile } from 'fs/promises';
import { part1 } from './part1.js';
import { part2 } from './part2.js';

(async function () {
  try {
    const data = await readFile('src/day05/resources/input.txt', 'utf8').then(
      (input) => input.split('\n'),
    );

    const dividerIndex = data.findIndex((item) => item === '');
    const pageOrderingRules = data.slice(0, dividerIndex);
    const pageUpdates = data.slice(dividerIndex + 1);

    console.log('--- Part One ---');
    console.log('Result', part1(pageOrderingRules, pageUpdates));

    console.log('--- Part Two ---');
    console.log('Result', part2(pageOrderingRules, pageUpdates));
  } catch (err) {
    console.error(err);
  }
})();
