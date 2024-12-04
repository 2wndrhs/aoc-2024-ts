// Advent of Code 2024 - Day 1 - Part One

import { readFile } from 'fs/promises';

const leftList: number[] = [];
const rightList: number[] = [];

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

export function part1(leftList: number[], rightList: number[]): number {
  const sortedLeftList = leftList.toSorted((a, b) => a - b);
  const sortedRightList = rightList.toSorted((a, b) => a - b);

  const totalDistance = sortedLeftList.reduce((acc, cur, idx) => {
    const distance = Math.abs(cur - sortedRightList[idx]);
    return acc + distance;
  }, 0);

  return totalDistance;
}
