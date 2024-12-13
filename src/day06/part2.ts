// Advent of Code - Day 6 - Part Two

import { findGuardPosition, move, Position, turnRight } from './part1.js';

const hasLoop = (
  map: string[][],
  startPosition: Position,
  obstaclePosition: { x: number; y: number },
) => {
  const position = { ...startPosition };
  const visited = new Set<string>();

  visited.add(`${position.x},${position.y},${position.direction}`);

  while (true) {
    const nextMove = move(position);
    const isValidPosition =
      0 <= nextMove.x &&
      nextMove.x < map[0].length &&
      0 <= nextMove.y &&
      nextMove.y < map.length;

    if (!isValidPosition) {
      break;
    }

    if (
      map[nextMove.y][nextMove.x] === '#' ||
      (nextMove.x === obstaclePosition.x && nextMove.y === obstaclePosition.y)
    ) {
      position.direction = turnRight(position.direction);
      continue;
    }

    const nextVisit = `${nextMove.x},${nextMove.y},${position.direction}`;

    if (visited.has(nextVisit)) {
      return true;
    }

    position.x = nextMove.x;
    position.y = nextMove.y;
    visited.add(nextVisit);
  }

  return false;
};

export function part2(input: string[]): number {
  const map = input.map((line) => line.split(''));
  const visited = new Set<string>();
  const guardPosition = findGuardPosition(map)!;
  const startPosition = { ...guardPosition };

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

  let loopCount = 0;

  for (const position of visited) {
    const [x, y] = position.split(',').map(Number);
    if (x === startPosition.x && y === startPosition.y) {
      continue;
    }
    if (map[y][x] === '#') {
      continue;
    }

    const obstaclePosition = { x, y };

    if (hasLoop(map, startPosition, obstaclePosition)) {
      loopCount += 1;
    }
  }

  return loopCount;
}
