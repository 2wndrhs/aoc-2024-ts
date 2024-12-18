// Advent of Code - Day 7 - Part Two

import { generateCombinations } from './part1.js';

export function part2(input: string[]): number {
  const data = input.map((equation) => equation.split(/[:\s]+/).map(Number));
  const operators = ['+', '*', '||'];

  const result = data.reduce((acc, cur) => {
    const [testValue, ...numbers] = cur;
    const operatorCombinations = generateCombinations(
      operators,
      numbers.length - 1,
    ); // 가능한 연산자 조합

    operatorCombinations.some((combination) => {
      const value = numbers.reduce((combinationAcc, number, numberIndex) => {
        if (numberIndex === 0) {
          return number;
        }

        if (combination[numberIndex - 1] === '+') {
          return combinationAcc + number;
        }

        if (combination[numberIndex - 1] === '*') {
          return combinationAcc * number;
        }

        return Number(`${combinationAcc}${number}`);
      }, 0);

      if (value === testValue) {
        acc += value;
        return true;
      }

      return false;
    });

    return acc;
  }, 0);

  return result;
}
