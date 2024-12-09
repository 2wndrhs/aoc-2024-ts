// Advent of Code - Day 4 - Part One

const getXIndexList = (array: string[]): number[] => {
  return array.reduce((list, char, charIndex) => {
    if (char === 'X') {
      return [...list, charIndex];
    }
    return list;
  }, [] as number[]);
};

const getHorizontalXMAS = (xIndex: number, line: string[]): number => {
  let count = 0;
  // check forward (left-to-right)
  if (
    line[xIndex + 1] === 'M' &&
    line[xIndex + 2] === 'A' &&
    line[xIndex + 3] === 'S'
  ) {
    count += 1;
  }

  // check backward (right-to-left)
  if (
    line[xIndex - 1] === 'M' &&
    line[xIndex - 2] === 'A' &&
    line[xIndex - 3] === 'S'
  ) {
    count += 1;
  }

  return count;
};

const getVerticalXMAS = (
  xIndex: number,
  lineIndex: number,
  array: string[][],
): number => {
  let count = 0;
  if (
    array[lineIndex + 1]?.[xIndex] === 'M' &&
    array[lineIndex + 2]?.[xIndex] === 'A' &&
    array[lineIndex + 3]?.[xIndex] === 'S'
  ) {
    count += 1;
  }

  // check backward
  if (
    array[lineIndex - 1]?.[xIndex] === 'M' &&
    array[lineIndex - 2]?.[xIndex] === 'A' &&
    array[lineIndex - 3]?.[xIndex] === 'S'
  ) {
    count += 1;
  }

  return count;
};

const getDiagonalXMAS = (
  xIndex: number,
  lineIndex: number,
  array: string[][],
): number => {
  let count = 0;
  // check upper left
  if (
    array[lineIndex - 1]?.[xIndex - 1] === 'M' &&
    array[lineIndex - 2]?.[xIndex - 2] === 'A' &&
    array[lineIndex - 3]?.[xIndex - 3] === 'S'
  ) {
    count += 1;
  }

  // check upper right
  if (
    array[lineIndex - 1]?.[xIndex + 1] === 'M' &&
    array[lineIndex - 2]?.[xIndex + 2] === 'A' &&
    array[lineIndex - 3]?.[xIndex + 3] === 'S'
  ) {
    count += 1;
  }

  // check lower left
  if (
    array[lineIndex + 1]?.[xIndex - 1] === 'M' &&
    array[lineIndex + 2]?.[xIndex - 2] === 'A' &&
    array[lineIndex + 3]?.[xIndex - 3] === 'S'
  ) {
    count += 1;
  }

  // check lower right
  if (
    array[lineIndex + 1]?.[xIndex + 1] === 'M' &&
    array[lineIndex + 2]?.[xIndex + 2] === 'A' &&
    array[lineIndex + 3]?.[xIndex + 3] === 'S'
  ) {
    count += 1;
  }

  return count;
};

export function part1(data: string[]) {
  const result = data
    .map((line) => [...line])
    .reduce((acc, line, lineIndex, array) => {
      const XIndexList = getXIndexList(line);

      XIndexList.forEach((xIndex) => {
        acc +=
          getHorizontalXMAS(xIndex, line) +
          getVerticalXMAS(xIndex, lineIndex, array) +
          getDiagonalXMAS(xIndex, lineIndex, array);
      });

      return acc;
    }, 0);

  return result;
}
