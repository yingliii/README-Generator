// Include packages needed for this application
// external packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// internal files
const generateMarkdown = require('./utils/generateMarkdown');
const githubApi = require('./utils/api.js');

// Create an array of questions for user input
const questions = [
  { 
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
    // TODO: add a property to check if the user has provided value
    validate: (value) => { 
      if (value){
        return true
      } else {
        return 'this section can\'t be empty'
      }}
  }, 
  {
    type: 'input',
    name: 'description',
    message: 'What is the project about?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What does the user need to install to use the app?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Give detailed instruction for using the app'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a License for the app',
    choices: ['MIT License', 'Apache License', 'GPL 3.0', 'MPL 2.0', 'N/A']
  }, 
  {
    type: 'input',
    name: 'contributor',
    message: 'Who contributed to the project?'
  },
  {
    type: 'input',
    name: 'gitusername',
    message: 'What is your Github username?'
  }, {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

// Create a function to write README file
function writeToFile(fileName, data) {
  // format the file name for readme file
  fs.writeFile(`${fileName.toLowerCase().replace(/\s/g, '')}.md`, data, (err) =>
    err ? console.log(err) : console.log('Success! Your README file has been generated.'))
}

// Create a function to initialize app
function init() {

  // inquirer.prompt questions
  inquirer.prompt(questions)
    .then((data) => {
      console.log(data);
      writeToFile(`${data.title}`, generateMarkdown(data));

      githubApi.getUser(data);
    })

    
}

// Function call to initialize app
init();

// EXPLAIN: what does the data do here?