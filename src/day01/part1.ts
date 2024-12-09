// Advent of Code - Day 1 - Part One

export function part1(leftList: number[], rightList: number[]): number {
  const sortedLeftList = leftList.toSorted((a, b) => a - b);
  const sortedRightList = rightList.toSorted((a, b) => a - b);

  const totalDistance = sortedLeftList.reduce((acc, cur, idx) => {
    const distance = Math.abs(cur - sortedRightList[idx]);
    return acc + distance;
  }, 0);

  return totalDistance;
}
