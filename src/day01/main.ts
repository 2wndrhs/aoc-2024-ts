// Advent of Code - Day 1

import { readFile } from 'fs/promises';
import { part1 } from './part1.js';
import { part2 } from './part2.js';

(async function () {
  const leftList: number[] = [];
  const rightList: number[] = [];

  try {
    await readFile('src/day01/resources/input.txt', 'utf8').then((input) =>
      input.split('\n').forEach((line) => {
        const numbers = line
          .split(' ')
          .filter((data) => data.length > 0)
          .map(Number);

        leftList.push(numbers[0]);
        rightList.push(numbers[1]);
      }),
    );

    console.log('--- Part One ---');
    console.log('Result', part1(leftList, rightList));

    console.log('--- Part Two ---');
    console.log('Result', part2(leftList, rightList));
  } catch (err) {
    console.error(err);
  }
})();
