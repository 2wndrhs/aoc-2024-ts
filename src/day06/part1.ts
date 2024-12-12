// Advent of Code - Day 6 - Part One

export interface Position {
  x: number;
  y: number;
  direction: Direction;
}

enum Direction {
  Up,
  Right,
  Down,
  Left,
}

export const findGuardPosition = (map: string[][]): Position | null => {
  for (let rowIndex = 0; map.length; rowIndex++) {
    const row = map[rowIndex];
    const colIndex = row.findIndex((item) => item === '^');
    if (colIndex !== -1) {
      return { x: colIndex, y: rowIndex, direction: Direction.Up };
    }
  }

  return null;
};

export const turnRight = (direction: Direction) => {
  return (direction + 1) % 4;
};

export const move = (position: Position) => {
  switch (position.direction) {
    case Direction.Up:
      return { ...position, y: position.y - 1 };
    case Direction.Down:
      return { ...position, y: position.y + 1 };
    case Direction.Left:
      return { ...position, x: position.x - 1 };
    case Direction.Right:
      return { ...position, x: position.x + 1 };
  }
};

export function part1(input: string[]): number {
  const map = input.map((line) => line.split(''));
  const visited = new Set<string>();
  const guardPosition = findGuardPosition(map)!;

  visited.add(`${guardPosition.x},${guardPosition.y}`);

  while (true) {
    const nextMove = move(guardPosition);
    const isValidPosition =
      0 <= nextMove.x &&
      nextMove.x < map[0].length &&
      0 <= nextMove.y &&
      nextMove.y < map.length;

    if (!isValidPosition) {
      break;
    }

    if (map[nextMove.y][nextMove.x] === '#') {
      guardPosition.direction = turnRight(guardPosition.direction);
    } else {
      guardPosition.x = nextMove.x;
      guardPosition.y = nextMove.y;
      visited.add(`${guardPosition.x},${guardPosition.y}`);
    }
  }

  return visited.size;
}
