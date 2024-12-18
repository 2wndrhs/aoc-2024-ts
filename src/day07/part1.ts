// Advent of Code - Day 7 - Part One

const generateCombinations = (
  operators: string[],
  length: number,
): string[][] => {
  const result: string[][] = [];

  const combine = (current: string[]) => {
    if (current.length === length) {
      result.push([...current]);
      return;
    }

    for (const operator of operators) {
      combine([...current, operator]);
    }
  };

  combine([]);

  return result;
};

export function part1(input: string[]): number {
  const data = input.map((equation) => equation.split(/[:\s]+/).map(Number));
  const operators = ['+', '*'];

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

        return combinationAcc * number;
      }, 0);

      if (value === testValue) {
        acc += value;
        return true; // 반복 종료
      }

      return false;
    });

    return acc;
  }, 0);

  return result;
}
