// Advent of Code - Day 5 - Part Two

const isInvalidPageUpdate = (update: number[], rules: number[][]) => {
  return rules.some((rule) => {
    const firstNumberIndex = update.findIndex((number) => number === rule[0]);
    const secondNumberIndex = update.findIndex((number) => number === rule[1]);

    return firstNumberIndex > secondNumberIndex;
  });
};

export function part2(pageOrderingRules: string[], pageUpdates: string[]) {
  const parsedPageOrderingRules = pageOrderingRules.map((rule) =>
    rule.split('|').map(Number),
  );
  const parsedPageUpdates = pageUpdates.map((update) =>
    update.split(',').map(Number),
  );

  const inValidPageUpdates = parsedPageUpdates.filter((update) => {
    const matchingOrderingRules = parsedPageOrderingRules.filter((rule) =>
      rule.every((number) => update.includes(number)),
    );

    return isInvalidPageUpdate(update, matchingOrderingRules);
  });

  const reOrderedPageUpdates = inValidPageUpdates.map((update) => {
    const matchingOrderingRules = parsedPageOrderingRules.filter((rule) =>
      rule.every((number) => update.includes(number)),
    );

    while (isInvalidPageUpdate(update, matchingOrderingRules)) {
      matchingOrderingRules.forEach((rule) => {
        const firstNumberIndex = update.findIndex(
          (number) => number === rule[0],
        );
        const secondNumberIndex = update.findIndex(
          (number) => number === rule[1],
        );

        if (firstNumberIndex > secondNumberIndex) {
          [update[firstNumberIndex], update[secondNumberIndex]] = [
            update[secondNumberIndex],
            update[firstNumberIndex],
          ];
        }
      });
    }

    return update;
  });

  const result = reOrderedPageUpdates.reduce((acc, update) => {
    const middleIndex = Math.floor(update.length / 2);
    return acc + update[middleIndex];
  }, 0);

  return result;
}
