// array of questions for user
const questions = [

];


//https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: "input",
      name: 'Title',
      message: 'What is the title of your project?',
      default: 'Do better!',
    },
    {
      type: "input",
      name: 'Description',
      message: 'Please describe the content',
      default: 'Do better!',
    },
    {
      type: "input",
      name: 'Table of Contents',
      message: 'Please describe the content',
      default: 'Do better!',
    },
    {
      type: "input",
      name: 'Installation',
      message: 'Please describe the content',
      default: 'Do better!',
    },
    {
      type: "input",
      name: 'Usage',
      message: 'Please describe the content',
      default: 'Do better!',
    },
    {
      type: "checkbox",
      name: 'License',
      message: 'Which license',
      choices: [
        'MIT', 'Creative Commons', 'European Union Public License 1.1', 'Do What the F*ck You Want to Public License',
      ],
      default: 'Do better!',
    },
    {
      type: "input",
      name: 'Contributing',
      message: 'Please describe the content',
      default: 'Do better!',
    },
     {
      type: "input",
      name: 'License',
      message: 'Please describe the content',
      default: 'Do better!',
    },
    {
      type: "input",
      name: 'Tests',
      message: 'Please describe the content',
      default: 'Do better!',
    },
    {
      type: "input",
      name: 'Questions',
      message: 'Please describe the content',
      default: 'Do better!',
    },
  ])
  .then(answers => {
    console.info('Answers:', answers);
  });

  //from bcs tutor
  const questions = [
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
    }



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
