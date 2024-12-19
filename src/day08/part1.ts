// Advent of Code - Day 8 - Part One

export type Position = {
  row: number;
  col: number;
};

export const generatePositionCombinations = (
  positionList: Position[],
): [Position, Position][] => {
  const combinations: [Position, Position][] = [];

  for (let i = 0; i < positionList.length; i++) {
    for (let j = i + 1; j < positionList.length; j++) {
      combinations.push([positionList[i], positionList[j]]);
    }
  }

  return combinations;
};

export const isValidPosition = (
  position: Position,
  data: string[][],
): boolean => {
  return (
    0 <= position.row &&
    position.row < data.length &&
    0 <= position.col &&
    position.col < data[0].length
  );
};

export function part1(input: string[]): number {
  const data = input.map((row) => row.split(''));

  const antennaMap = new Map<string, Position[]>();

  data.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col !== '.') {
        if (!antennaMap.has(col)) {
          antennaMap.set(col, [
            {
              row: rowIndex,
              col: colIndex,
            },
          ]);
        } else {
          antennaMap.get(col)!.push({
            row: rowIndex,
            col: colIndex,
          });
        }
      }
    });
  });

  const antinodeSet = new Set<string>();

  Array.from(antennaMap.entries()).forEach(([antenna, positionList]) => {
    const positionCombinations = generatePositionCombinations(positionList);

    positionCombinations.forEach(([position1, position2]) => {
      const rowDifference = position2.row - position1.row;
      const colDifference = position2.col - position1.col;

      const antinodePosition1 = {
        row: position1.row - rowDifference,
        col: position1.col - colDifference,
      };

      const antinodePosition2 = {
        row: position2.row + rowDifference,
        col: position2.col + colDifference,
      };

      if (isValidPosition(antinodePosition1, data)) {
        antinodeSet.add(`${antinodePosition1.row},${antinodePosition1.col}`);
      }

      if (isValidPosition(antinodePosition2, data)) {
        antinodeSet.add(`${antinodePosition2.row},${antinodePosition2.col}`);
      }
    });
  });

  return antinodeSet.size;
}
