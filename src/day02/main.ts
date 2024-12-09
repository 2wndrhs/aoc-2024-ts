// Advent of Code - Day 2

import { readFile } from 'fs/promises';
import { part1 } from './part1.js';
import { part2 } from './part2.js';

(async function () {
  try {
    const data: number[][] = await readFile(
      'src/day02/resources/input.txt',
      'utf8',
    ).then((input) =>
      input.split('\n').map((line) => line.split(' ').map(Number)),
    );

    console.log('--- Part One ---');
    console.log('Result', part1(data));

    console.log('--- Part Two ---');
    console.log('Result', part2(data));
  } catch (err) {
    console.error(err);
  }
})();
