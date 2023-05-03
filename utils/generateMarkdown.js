// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license === "Apache License") {
//     return `This project is licensed under the Apache License 2.0 license.`;
//   } else if (license === "GNU General Public License (GPL)") {
//     return `This project is licensed under the GNU General Public License v3.0 license.`;
//   } else if (license === "MIT License") {
//     return `This project is licensed under the MIT license.`;
//   } else if (license === "BSD 2-Clause 'Simplified'License") {
//     return `This project is licensed under the BSD 2-Clause 'Simplified' License.`;
//   } else if (license === "BSD 3-Clause 'Revised' License") {
//     return `This project is licensed under the BSD 3-Clause 'Revised' License.`;
//   } else if (license === "Boost Software License") {
//     return `This project is licensed under the Boost Software License 1.0.`;
//   } else if (license === "Creative Commons Zero Universal") {
//     return `This project is licensed under the Creative Commons Zero Universal 1.0 license.`;
//   } else if (license === "Eclipse Public License (EPL)") {
//     return `This project is licensed under the Eclipse Public License 2.0.`;
//   } else if (license === "GNU Affero General Public License (AGPL)") {
//     return `This project is licensed under the GNU Affero General Public License v3.0 license.`;
//   } else if (license === "GNU Lesser General Public License (LGPL)") {
//     return `This project is licensed under the GNU Lesser General Public License v3.0 license.`;
//   } else if (license === "Mozilla Public License 2.0") {
//     return `This project is licensed under the Mozilla Public License 2.0 license.`;
//   } else if (license === "The Unlicense") {
//     return `This project is licensed under the The Unlicense license.`;
//   } else {
//     return "";
//   }
// }

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   const result = renderLicenseBadge(data.license);
//   const link = renderLicenseLink(data.license);
//   return `# ${data.title}
//   ${renderLicenseBadge(data.license)}`;
// }

// module.exports = generateMarkdown;

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
};
