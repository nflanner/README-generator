// TODO: Include packages needed for this application
const inquirer = require('inquirer');

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
        name: 'confirm',
      },
      {
          type: 'input',
          message: 'Please provide usage information for the project:',
          name: 'confirm',
      },
      {
          type: 'input',
          message: 'Please provide contribution guidelines for the project:',
          name: 'confirm',
      },
      {
          type: 'input',
          message: 'Please provide test instructions for the project:',
          name: 'confirm',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
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
