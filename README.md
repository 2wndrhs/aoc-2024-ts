# Advent of Code 2024 TypesScript Template

This is a TypeScript template for [advent of code 2024](https://adventofcode.com/2024).

The template was built with

- [pnpm](https://pnpm.io/)
- [typescript](https://www.typescriptlang.org/)
- [vitest](https://vitest.dev/)

## Usage

```shell
$ git clone https://github.com/2wndrhs/aoc-2024-typescript-template.git
$ cd aoc-2024-typescript-template

# install dependencies
$ pnpm install

# run tests for day01
$ pnpm test day01

# run the day01
$ pnpm start day01
```

## Generate

You can generate all necessary files for AoC solution with a simple command:

```shell
$ pnpm gen day01
```

The command creates the following files

```shell
* creating src/day01/resources/input.txt
* creating src/day01/main.ts
* creating src/day01/part2.ts
* creating src/day01/part1.ts
* creating src/day01/__tests__/day01.test.ts
```

For download the inputs from web, you need to set the AOC_SESSION environment variable in `.env` file.

You can get the session value from AoC website cookie. (`Developer Tools` > `Application` > `Cookies`)

The env file should look like below.

```
AOC_SESSION={YOUR_AOC_SESSION_VALUE}
```
