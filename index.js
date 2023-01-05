
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project tile?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github Username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address ?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a short description for your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install your project ?',
        default: 'npm i',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'What information will your user need to use your projects?',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'How will your users contribute to your projects?',
      },
      {
        type: 'input',
        name: 'testing',
        message: 'How will users run tests on the project?',
        default: 'npm run test',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What kind of license do you want to use for your project',
        choices: ['MIT','APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
      }

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
async function init() {
   // inquirer
  //.prompt(questions).then((data) =>{
  //  const READMEfile= generateMarkdown(data);
  //  fs.writeFile('README.md', READMEfile, (err) =>
  //  err ? console.log(err) : console.log('Successfully created README.md!')
  //);
    const responses = await inquirer.prompt(questions);
    const data = generateMarkdown({ ...responses});
    console.log('Generating README...');
    writeToFile('README.md', data);

}

// Function call to initialize app
init();



