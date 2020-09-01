'use strict';
var fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
  {
    type: "input",
    name: 'title',
    message: 'What is the title of your project?',
    default: 'Cool Project!',
  },
  {
    type: "input",
    name: 'description',
    message: 'Please describe the project',
    default: 'This project does hip stuff',
  },
  {
    type: "input",
    name: 'installation',
    message: 'How is this application installed?',
    default: 'You do thing #1 and thing #2',
  },
  {
    type: "input",
    name: 'usage',
    message: 'How is this application used?',
    default: 'This application will acheive world peace by 2023',
  },
  {
    type: "checkbox",
    name: 'license',
    message: 'Which license is preferred?',
    choices: [
      'MIT', 'ISC', 'Creative Commons', 'European Union Public License 1.1', 'Do What the F*ck You Want to Public License',
    ],
    default: 'Drivers License',
  },
  {
    type: "input",
    name: 'contributing',
    message: 'Who contributed to this project?',
    default: 'Franklin Delano Roosevelt',
  },
  {
    type: "input",
    name: 'tests',
    message: 'How is this tested?',
    default: 'Try injecting bleach and use tremendous light',
  },
  {
    type: "input",
    name: 'questions',
    message: 'Who to e-mail with questions?',
    default: 'Bob@gmail.com',
  },
  {
    type: "input",
    name: 'githubUsername',
    message: 'What is your Github Username?',
    default: 'https://github.com/alanturing',
  },
];

//function to intitize program
function init() {
  inquirer.prompt(questions)
    .then(answers => {
      console.log(answers)
      //generateMarkdown(answers);
      writeToFile("README.md", generateMarkdown(answers));
    });
};


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err, buf) {
    if (err) console.log(err)
    if (buf) console.log(buf)
  });
}

//invoke the initialization
init();