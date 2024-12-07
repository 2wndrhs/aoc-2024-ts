# Advent of Code 2024 with TypeScript

This is an [advent of code 2024](https://adventofcode.com/2024) solution written in TypeScript.

built with

- [pnpm](https://pnpm.io/)
- [typescript](https://www.typescriptlang.org/)
- [vitest](https://vitest.dev/)

## Usage

```shell
$ git clone https://github.com/2wndrhs/aoc-2024-ts.git
$ cd aoc-2024-ts

# install dependencies
$ pnpm install

# run tests for day01
$ pnpm test day01

# run the day01
$ pnpm start day01
```

## Generate

You can automatically download input from the Advent of Code session.

```shell
# generate inputs for day01(.env required)
$ pnpm gen day01
```

For download the inputs from web, you need to set the AOC_SESSION environment variable in `.env` file.

You can get the session value from AoC website cookie. (`Developer Tools` > `Application` > `Cookies`)

- `.env` file

```
AOC_SESSION={YOUR_AOC_SESSION}
```
