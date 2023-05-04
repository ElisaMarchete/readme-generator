// Function to load the badge for the license
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License":
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    case "GNU General Public License (GPL)":
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    case "MIT License":
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case "BSD 2-Clause 'Simplified'License":
      return `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
    case "BSD 3-Clause 'Revised' License":
      return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
    case "Boost Software License":
      return `![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`;
    case "Creative Commons Zero Universal":
      return `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`;
    case "Eclipse Public License (EPL)":
      return `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`;
    case "GNU Affero General Public License (AGPL)":
      return `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`;
    case "GNU Lesser General Public License (LGPL)":
      return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
    case "Mozilla Public License 2.0":
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
    case "The Unlicense":
      return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
    default:
      return "";
  }
}

// Function to load the link for the license
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License":
      return `https://opensource.org/licenses/Apache-2.0`;
    case "GNU General Public License (GPL)":
      return `https://www.gnu.org/licenses/gpl-3.0`;
    case "MIT License":
      return `https://opensource.org/licenses/MIT`;
    case "BSD 2-Clause 'Simplified'License":
      return `https://opensource.org/licenses/BSD-2-Clause`;
    case "BSD 3-Clause 'Revised' License":
      return `https://opensource.org/licenses/BSD-3-Clause`;
    case "Boost Software License":
      return `https://www.boost.org/LICENSE_1_0.txt`;
    case "Creative Commons Zero Universal":
      return `https://creativecommons.org/publicdomain/zero/1.0/`;
    case "Eclipse Public License (EPL)":
      return `https://opensource.org/licenses/EPL-1.0`;
    case "GNU Affero General Public License (AGPL)":
      return `https://www.gnu.org/licenses/agpl-3.0`;
    case "GNU Lesser General Public License (LGPL)":
      return `https://www.gnu.org/licenses/lgpl-3.0`;
    case "Mozilla Public License 2.0":
      return `https://opensource.org/licenses/MPL-2.0`;
    case "The Unlicense":
      return `http://unlicense.org/`;
    default:
      return "";
  }
}

// Function to generate markdown for README
const generateMarkdown = ({
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

${renderLicenseBadge(license)} 

## Description
${description}

## Table of Contents
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
${renderLicenseLink(license)}

## Contributing
Thank you for considering contributing to this project! I welcome all contributions, big or small. Here are a few guidelines for how to get started:
If you find a bug or issue, or If you have a suggestion for a new feature or improvement, please create a new issue on the following GitHub repository: ${repository}

## Tests
${tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}.  
You can find more of my work at my GitHub profile: ${name} GitHub repository: ${repository}
`;

// Exporting the function to index.js
module.exports = generateMarkdown;
