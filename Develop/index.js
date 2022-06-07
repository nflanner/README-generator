// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of the project:',
        name: 'descr',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for the project:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please provide usage information for the project:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines for the project:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please provide test instructions for the project:',
        name: 'instr',
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: [
            "MIT",
            "Apache 2.0",
            "BSD"
        ],
    },
    {
        type: 'input',
        message: 'Please enter your github username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('README Stored!')
    );
}

// TODO: Create a function to initialize app
function init() {
    console.log('working');
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile('./generated-README.md', response);
            console.log('Successfully genereated README!');
        })
}

// Function call to initialize app
init();
