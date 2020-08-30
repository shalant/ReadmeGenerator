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
    default: 'Do better!',
  },
  {
    type: "input",
    name: 'description',
    message: 'Please describe the project',
    default: 'Do better!',
  },
  {
    type: "input",
    name: 'table of Contents',
    message: 'XXXXXXXXX',
    default: 'Do better!',
  },
  {
    type: "input",
    name: 'installation',
    message: 'How is this application installed?',
    default: 'Do better!',
  },
  {
    type: "input",
    name: 'usage',
    message: 'How is this application used?',
    default: 'Do better!',
  },
  {
    type: "checkbox",
    name: 'license',
    message: 'Which license is preferred?',
    choices: [
      'MIT', 'ISC', 'Creative Commons', 'European Union Public License 1.1', 'Do What the F*ck You Want to Public License',
    ],
    default: 'Do better!',
  },
  {
    type: "input",
    name: 'contributing',
    message: 'Who contributed to this project?',
    default: 'Do better!',
  },
  {
    type: "input",
    name: 'tests',
    message: 'Please describe the content',
    default: 'Do better!',
  },
  {
    type: "input",
    name: 'questions',
    message: 'Who to e-mail with questions?',
    default: 'Do better!',
  },
];


function init() {
  inquirer.prompt(questions)
    .then(answers => {
      console.log(answers)
      //generateMarkdown(answers);
      writeToFile("README.md", generateMarkdown(answers));
    });
};
//from bcs tutor
//const questions = [
//{
//type: "input",
//name: "github",
//message: "What is your GitHub username?"
//}


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err, buf) {
    if (err) console.log(err)
    if (buf) console.log(buf)
  });
}

// function to initialize program


// function call to initialize program
init();



