// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GNU General Public License (GPL)") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "MIT License") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "BSD 2-Clause 'Simplified'License") {
    return `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
  } else if (license === "BSD 3-Clause 'Revised' License") {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else if (license === "Boost Software License") {
    return `![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`;
  } else if (license === "Creative Commons Zero Universal") {
    return `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`;
  } else if (license === "Eclipse Public License (EPL)") {
    return `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`;
  } else if (license === "GNU Affero General Public License (AGPL)") {
    return `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`;
  } else if (license === "GNU Lesser General Public License (LGPL)") {
    return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
  } else if (license === "Mozilla Public License 2.0") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  } else if (license === "The Unlicense") {
    return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
