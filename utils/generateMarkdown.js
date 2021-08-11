// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge;
  //read which license is selected from data.license (HOW TO EXPLAIN data.license)
  if(license === 'MIT License'){
    badge = '![license: MIT](https://img.shields.io/badge/license-MIT-orange)';
  }
  else if(license === 'Apache License'){
    badge = '!license: Apache(https://img.shields.io/badge/license-Apache%202.0-green)';
  }
  else if(license === 'GPL 3.0'){
    badge = '![license: GPL 3.0](https://img.shields.io/badge/license-GPL%203.0-yellowgreen)';
  }
  else if(license === 'MPL 2.0'){
    badge = '![license: MPL 2.0](https://img.shields.io/badge/license-MPL%202.0-blue)';
  }
  else{
    badge = ''
  }
  return badge
}
// console.log(renderLicenseBadge(license));

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link;
  //read which license is selected from data.license (HOW TO EXPLAIN data.license)
  if(license === 'MIT License'){
    link = 'https://opensource.org/licenses/MIT';
  }
  else if(license === 'Apache License'){
    link = 'https://opensource.org/licenses/Apache-2.0';
  }
  else if(license === 'GPL 3.0'){
    link = 'https://opensource.org/licenses/GPL-3.0';
  }
  else if(license === 'MPL 2.0'){
    link = 'https://opensource.org/licenses/MPL-2.0';
  }
  else{
    link = 'No license has selected.'
  }
  return link
}
// console.log(renderLicenseLink(license));

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Content
  * [Project Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributor](#contributor)
  * [Contact](#contact)

  ## Project Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributor
  ${data.contributor}

  ## Contact
  * Github: [${data.gitusername}](https://github.com/${data.gitusername})
  * E-mail: ${data.email}
`;
}

module.exports = generateMarkdown;
