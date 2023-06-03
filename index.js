// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// const that gives the README structure
const generateREADME = ({ Title, Description, Installation, Usage, License, Contributing, Tests, GitHub, Email }) =>
    `# Project Title
${Title}
<br>
![Badge](https://img.shields.io/badge/license-${License}-blue)
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description 
${Description}
## Installation
${Installation}
## Usage
${Usage}
## License
This Project is licensed under ${License}.
## Contributing
${Contributing}
## Tests
${Tests}
## Questions
https://github.com/${GitHub}
<br>
${Email}`;

// inquirer prompt module
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use.',
            name: 'Usage',
        },
        {
            type: 'list',
            message: 'Choose an open source license',
            name: 'License',
            choices: [
                'AGPLv3',
                'GPLv3',
                'LGPLv3',
                'Mozilla',
                'Apache',
                'MIT',
                'Boost',
                'Unlicense',
                'None'
            ]
        },
        {
            type: 'input',
            message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'Examples of written tests for your application.',
            name: 'Tests',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'GitHub',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'Email',
        },
])
    .then((data) => {
        fs.writeFile('README.md', generateREADME(data), (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });


// ----------------below is preloaded code that I did not use----------------------


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();