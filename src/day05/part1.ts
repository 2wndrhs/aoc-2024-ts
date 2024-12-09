// Advent of Code - Day 5 - Part One

export function part1(pageOrderingRules: string[], pageUpdates: string[]) {
  const parsedPageOrderingRules = pageOrderingRules.map((rule) =>
    rule.split('|').map(Number),
  );
  const parsedPageUpdates = pageUpdates.map((update) =>
    update.split(',').map(Number),
  );

  const validPageUpdates = parsedPageUpdates.filter((update) => {
    const matchingOrderingRules = parsedPageOrderingRules.filter((rule) =>
      rule.every((number) => update.includes(number)),
    );

    return matchingOrderingRules.every((rule) => {
      const firstNumberIndex = update.findIndex((number) => number === rule[0]);
      const secondNumberIndex = update.findIndex(
        (number) => number === rule[1],
      );

      return firstNumberIndex < secondNumberIndex;
    });
  });

  const result = validPageUpdates.reduce((acc, update) => {
    const middleIndex = Math.floor(update.length / 2);
    return acc + update[middleIndex];
  }, 0);

  return result;
}
