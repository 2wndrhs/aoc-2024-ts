import * as dotenv from 'dotenv';
import { mkdir, writeFile } from 'fs/promises';
const fetchInput = async (day, session) => {
    const url = `https://adventofcode.com/2024/day/${day}/input`;
    const headers = { cookie: `session=${session}` };
    const response = await fetch(url, { headers });
    return response.text();
};
const createInputFile = async (dayName, input) => {
    const filePath = `src/${dayName}/resources/input.txt`;
    await writeFile(filePath, input);
};
const createDirectories = async (dayName) => {
    const resourcesPath = `src/${dayName}/resources`;
    await mkdir(resourcesPath, { recursive: true });
};
(async function () {
    // load environment variables
    dotenv.config();
    // check if exists one only argument
    const dayName = process.argv[2];
    if (process.argv.length !== 3) {
        console.log('--- `pnpm run fetch-input` needs one only argument ---');
        return;
    }
    // validate dayName format
    const dayPattern = /^day(0[1-9]|1[0-9]|2[0-5])$/;
    if (!dayPattern.test(dayName)) {
        console.log('--- Invalid day format. Use dayXX (e.g., day01, day15) ---');
        return;
    }
    const day = parseInt(dayName.slice(3));
    const session = process.env.AOC_SESSION ?? '';
    try {
        // fetch input
        const input = await fetchInput(day, session);
        // create directories and save input
        await createDirectories(dayName);
        await createInputFile(dayName, input);
    }
    catch (err) {
        console.error(err);
    }
})();
