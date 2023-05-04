// loading thitd party modules
const inquirer = require("inquirer");
const fs = require("fs");
// loading custom module with functions for generating markdown
const generateMarkdown = require("./utils/generateMarkdown.js");

// Function to ask user questions and generate readme.md file
function init() {
  inquirer
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
        name: "repository",
        message: "Provide the URL of the GitHub repository:",
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
      // generateMarkdown function call with user answers as argument -> function from module generateMarkdown.js
      const readmeContent = generateMarkdown(answers);

      // WriteFile function to create readme.md file
      fs.writeFile("README/readme.md", readmeContent, (err) =>
        err ? console.log(err) : console.log("Successfully created readme.md!")
      );
    });
}

// Function call to initialize app
init();
