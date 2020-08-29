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
    message: 'Please describe the content',
    default: 'Do better!',
  },
  {
    type: "input",
    name: 'table of Contents',
    message: 'Please describe the content',
    default: 'Do better!',
  },
  {
    type: "input",
    name: 'installation',
    message: 'Please describe the content',
    default: 'Do better!',
  },
  {
    type: "input",
    name: 'usage',
    message: 'Please describe the content',
    default: 'Do better!',
  },
  {
    type: "checkbox",
    name: 'license',
    message: 'Which license',
    choices: [
      'MIT', 'ISC', 'Creative Commons', 'European Union Public License 1.1', 'Do What the F*ck You Want to Public License',
    ],
    default: 'Do better!',
  },
  {
    type: "input",
    name: 'contributing',
    message: 'Please describe the content',
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
    message: 'Please describe the content',
    default: 'Do better!',
  },
];


//https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
const inquirer = require('inquirer');

function init () {
inquirer.prompt(questions)
  .then(answers => {
    console.log(answers)
    var fs = require('fs');
    fs.writeFile("log.txt", function(err, buf) {
    console.log(buf.toString());
  });
}
  //from bcs tutor
  //const questions = [
    //{
      //type: "input",
      //name: "github",
      //message: "What is your GitHub username?"
    //}



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
//  https://tutorialedge.net/nodejs/reading-writing-files-with-nodejs/
  var fs = require('fs');
  fs.writeFile("log.txt", function(err, buf) {
    console.log(buf.toString());
  }
}

// function call to initialize program
init();
