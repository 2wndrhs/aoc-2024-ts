// Advent of Code - Day 3 - Part Two

export function part2(data: string) {
  const flagRegex = /(?<flag>do\(\)|don't\(\))/g;
  const mulRegex = /mul\((?<num1>\d{1,3}),(?<num2>\d{1,3})\)/g;

  const flagMatches = data.matchAll(flagRegex);
  const flagList = Array.from(flagMatches).map((flagMatch) => {
    return {
      flag: flagMatch.groups?.flag,
      index: flagMatch.index,
    };
  });

  const mulMatches = data.matchAll(mulRegex);
  const result = Array.from(mulMatches).reduce((acc, mulMatch) => {
    const recentFlag =
      flagList.findLast((flag) => Number(flag.index) < Number(mulMatch.index))
        ?.flag ?? 'do()'; // default flag

    if (recentFlag === 'do()') {
      const [num1, num2] = Object.values(mulMatch.groups!).map(Number);
      return acc + num1 * num2;
    }

    return acc;
  }, 0);

  return result;
}
