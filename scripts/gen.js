import chalk from 'chalk';
import * as dotenv from 'dotenv';
import * as ejs from 'ejs';
import { access, mkdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
const templateFiles = [
    'scripts/templates/main.template.ejs',
    'scripts/templates/part1.template.ejs',
    'scripts/templates/part2.template.ejs',
    'scripts/templates/test.template.ejs',
];
const targetFiles = (dayName) => [
    `src/${dayName}/main.ts`,
    `src/${dayName}/part1.ts`,
    `src/${dayName}/part2.ts`,
    `src/${dayName}/__tests__/${dayName}.test.ts`,
];
const fetchInput = async (day, session) => {
    const url = `https://adventofcode.com/2024/day/${day}/input`;
    const headers = { cookie: `session=${session}` };
    const response = await fetch(url, { headers });
    const text = await response.text();
    return text.trim();
};
// read the template file
const readTemplate = (templateFile) => {
    return readFile(templateFile, 'utf8');
};
// render template with the dayName
const renderTemplate = (templateData) => {
    return async (content) => {
        return ejs.render(content, { data: templateData }, { async: true });
    };
};
// check it the file exists or not
const filePathExists = async (file) => await access(file)
    .then(() => true)
    .catch(() => false);
// create the file with the rendered content
const createFile = (filename) => {
    return async (content) => {
        const fileExists = await filePathExists(filename);
        if (fileExists) {
            console.log(chalk.yellow('* ignoring ') + `${filename} already exists`);
            return;
        }
        try {
            const dirPath = path.dirname(filename);
            const dirExists = await filePathExists(dirPath);
            if (!dirExists) {
                await mkdir(dirPath, { recursive: true });
            }
        }
        catch (error) {
            console.log(chalk.red('* error ') + `${error}`);
        }
        await writeFile(filename, content);
        console.log(chalk.green('* creating ') + `${filename}`);
    };
};
const pipeAsync = (...funcs) => (input) => funcs.reduce(async (v, func) => func(await v), Promise.resolve(input));
(async function () {
    // load environment variables
    dotenv.config();
    // check if exists one only argument
    const dayName = process.argv[2];
    if (process.argv.length !== 3) {
        console.log(chalk.red('* error ') + '--- Invalid number of arguments ---');
        return;
    }
    // validate dayName format
    const dayPattern = /^day(0[1-9]|1[0-9]|2[0-5])$/;
    if (!dayPattern.test(dayName)) {
        console.log(chalk.red('* error ') +
            '--- Invalid day format. Use dayXX (e.g., day01, day15) ---');
        return;
    }
    const day = parseInt(dayName.slice(3));
    const session = process.env.AOC_SESSION ?? '';
    const contentInput = await fetchInput(day, session);
    try {
        // create the input file
        await createFile(`src/${dayName}/resources/input.txt`)(contentInput);
        // create and render the template files
        templateFiles.forEach((templatePath, index) => {
            pipeAsync(readTemplate, renderTemplate({
                day,
                dayName,
            }), createFile(targetFiles(dayName)[index]))(templatePath);
        });
    }
    catch (error) {
        console.error(chalk.red('* error ') + `${error}`);
    }
})();
