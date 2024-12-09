// Advent of Code - Day 1 - Part Two

export function part2(leftList: number[], rightList: number[]): number {
  const frequencyMap = new Map();

  rightList.forEach((number) => {
    frequencyMap.set(number, (frequencyMap.get(number) ?? 0) + 1);
  });

  const totalScore = leftList.reduce((acc, cur) => {
    const score = cur * (frequencyMap.get(cur) ?? 0);
    return acc + score;
  }, 0);

  return totalScore;
}
