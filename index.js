// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// loading custom module with functions for generating markdown
const generateMarkdown = require("./utils/generateMarkdown.js");
// console logging the functions from the generateMarkdown.js file
console.log(generateMarkdown.renderLicenseBadge());
console.log(generateMarkdown.renderLicenseLink());

// TODO: Create an array of questions for user input
const questions = inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Add a description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Insert installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Insert the usage information:",
    },
    {
      type: "input",
      name: "repository",
      message: "Provide the URL of the GitHub repository:",
    },
    {
      type: "input",
      name: "tests",
      message: "Add test instructions:",
    },
    {
      type: "list",
      name: "license",
      message: "'What license you would like to use?",
      choices: [
        "None",
        "Apache License",
        "GNU General Public License (GPL)",
        "MIT License",
        "BSD 2-Clause 'Simplified'License",
        "BSD 3-Clause 'Revised' License",
        "Boost Software License",
        "Creative Commons Zero Universal",
        "Eclipse Public License (EPL)",
        "GNU Affero General Public License (AGPL)",
        "GNU Lesser General Public License (LGPL)",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      name: "name",
      message: "GitHub username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
    },
  ])
  .then((answers) => {
    console.log("inside then:", answers.license);
    const readmeContent = generateReadme(answers);

    // TODO: Create a function to write README file
    fs.writeFile("README/readme.md", readmeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created readme.md!")
    );
  });

// TODO: Create a function to initialize app
const generateReadme = ({
  title,
  description,
  installation,
  usage,
  license,
  repository,
  tests,
  name,
  email,
}) =>
  `# ${title}

## Description
${description}

## Table of Contents
* [Title](#title)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under ${license} 

## Contributing
Thank you for considering contributing to our project! We welcome all contributions, big or small. Here are a few guidelines for how to get started:
If you find a bug or issue, or If you have a suggestion for a new feature or improvement, please create a new issue on our GitHub repository. ${repository}

## Tests
${tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at my GitHub: ${name} my GitHub profile ${repository}
`;

// Function call to initialize app
// init();
