const fs = require("fs");
const inquirer = require("inquirer");

const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function ReadMeGen() { }

// prompts user for info to put into readme generated

ReadMeGen.prototype.prompt = function (){

    return inquirer
    .prompt([
        {
            type: "input",
            message: "Enter your GitHub user name.",
            name: "user"
        },
        {
            type: "input",
            message: "Enter youremail address.",
            name: "email"
        },
        {
            type: "input",
            message: "Enter your project's title.",
            name: "title"
        },
        {
            type: "input",
            message: "Enter a brief description of your project.",
            name: "description"
        },
        {
            type: "list",
            message: "Select a license for your project.",
            name: "license",
            choices: [
                "MIT",
                "Unlicense",
                "Apache 2.0",
                "GNU v3",
                "BSD 3-Clause",
                "Mozilla Public License 2.0"
            ]
        },
        {
            type: "input",
            message: "Enter the command to install dependencies for this project.",
            name: "installation",
            default: "npm i"
        },
        {
            type: "input",
            message: "Enter the command to run tests on this project.",
            name: "tests",
            default: "npm run test"
        },
        {
            type: "input",
            message: "Enter usage information for this project.",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter instructions to contribute to this repository.",
            name: "contribute"
        },
    ])

};

// creates readme file with given data

ReadMeGen.prototype.generateFile = function (fileName, data) {
    return writeFileAsync(fileName, data);
}

module.exports = ReadMeGen;