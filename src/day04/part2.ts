// Advent of Code - Day 4 - Part Two

const getAIndexList = (array: string[]): number[] => {
  return array.reduce((list, char, charIndex) => {
    if (char === 'A') {
      return [...list, charIndex];
    }
    return list;
  }, [] as number[]);
};

const getCrossMAS = (
  aIndex: number,
  lineIndex: number,
  array: string[][],
): number => {
  let count = 0;

  const upperLeft = array[lineIndex - 1]?.[aIndex - 1];
  const upperRight = array[lineIndex - 1]?.[aIndex + 1];
  const lowerLeft = array[lineIndex + 1]?.[aIndex - 1];
  const lowerRight = array[lineIndex + 1]?.[aIndex + 1];

  // check upper left to lower right
  if (upperLeft === 'M' && lowerRight === 'S') {
    // check upper right to lower left
    if (upperRight === 'M' && lowerLeft === 'S') {
      count += 1;
    }
    // check lower left to upper right (backward)
    if (lowerLeft === 'M' && upperRight === 'S') {
      count += 1;
    }
  }

  // check lower right to upper left (backward)
  if (lowerRight === 'M' && upperLeft === 'S') {
    // check upper right to lower left
    if (upperRight === 'M' && lowerLeft === 'S') {
      count += 1;
    }
    // check lower left to upper right (backward)
    if (lowerLeft === 'M' && upperRight === 'S') {
      count += 1;
    }
  }

  return count;
};

export function part2(data: string[]) {
  const result = data
    .map((line) => [...line])
    .reduce((acc, line, lineIndex, array) => {
      const aIndexList = getAIndexList(line);

      aIndexList.forEach((aIndex) => {
        acc += getCrossMAS(aIndex, lineIndex, array);
      });

      return acc;
    }, 0);

  return result;
}
