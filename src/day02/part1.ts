// Advent of Code - Day 2 - Part One

export function part1(data: number[][]): number {
  const result = data.reduce((acc, cur) => {
    const isIncreasing = cur.every((number, index, array) => {
      if (index === 0) {
        return true;
      }

      const prev = array[index - 1];
      if (number - prev > 0) {
        return true;
      }
      return false;
    });

    const isDecreasing = cur.every((number, index, array) => {
      if (index === 0) {
        return true;
      }

      const prev = array[index - 1];
      if (number - prev < 0) {
        return true;
      }
      return false;
    });

    if (isIncreasing || isDecreasing) {
      const hasSmallDifference = cur.every((number, index, array) => {
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

      if (hasSmallDifference) {
        return acc + 1;
      }

      // 차이가 4이상 나는 경우
      return acc;
    }

    // 증가, 감소 둘 다 아닌 경우
    return acc;
  }, 0);

  return result;
}
