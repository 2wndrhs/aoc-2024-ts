// Advent of Code - Day 3 - Part One

export function part1(data: string) {
  const mulRegex = /mul\((?<num1>\d{1,3}),(?<num2>\d{1,3})\)/g;

  const matches = data.matchAll(mulRegex);
  const result = Array.from(matches).reduce((acc, cur) => {
    if (cur.groups) {
      const [num1, num2] = Object.values(cur.groups).map(Number);
      return acc + num1 * num2;
    }
    return acc;
  }, 0);

  return result;
}
