// Advent of Code - Day 2 - Part Two

const isIncreasingArray = (input: number[]): boolean => {
  return input.every((number, index, array) => {
    if (index === 0) {
      return true;
    }

    const prev = array[index - 1];
    if (number - prev > 0) {
      return true;
    }
    return false;
  });
};

const isDecreasingArray = (input: number[]): boolean => {
  return input.every((number, index, array) => {
    if (index === 0) {
      return true;
    }

    const prev = array[index - 1];
    if (number - prev < 0) {
      return true;
    }
    return false;
  });
};

const hasSmallDifference = (input: number[]): boolean => {
  return input.every((number, index, array) => {
    if (index === 0) {
      return true;
    }

    const prev = array[index - 1];
    const diff = Math.abs(number - prev);

    if (diff <= 3) {
      return true;
    }
    return false;
  });
};

export function part2(data: number[][]): number {
  const result = data.reduce((acc, cur) => {
    const candidates = cur.map((_, index, array) => {
      return [...array.slice(0, index), ...array.slice(index + 1)];
    });

    const hasValidCandidate = candidates.some((candidate) => {
      const isIncreasingCandidate = isIncreasingArray(candidate);
      const isDecreasingCandidate = isDecreasingArray(candidate);

      if (isIncreasingCandidate || isDecreasingCandidate) {
        if (hasSmallDifference(candidate)) {
          return true;
        }
        return false;
      }

      return false;
    });

    if (hasValidCandidate) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return result;
}
