// Advent of Code - Day 8 - Part Two

import {
  generatePositionCombinations,
  isValidPosition,
  Position,
} from './part1.js';

export function part2(input: string[]): number {
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

      let currentPosition = { ...position1 };

      while (isValidPosition(currentPosition, data)) {
        antinodeSet.add(`${currentPosition.row},${currentPosition.col}`);
        currentPosition.row -= rowDifference;
        currentPosition.col -= colDifference;
      }

      currentPosition = { ...position2 };

      while (isValidPosition(currentPosition, data)) {
        antinodeSet.add(`${currentPosition.row},${currentPosition.col}`);
        currentPosition.row += rowDifference;
        currentPosition.col += colDifference;
      }
    });
  });

  return antinodeSet.size;
}
