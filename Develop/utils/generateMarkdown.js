// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ''
  } else {
    const licensePath = license === 'MIT' ? './Licenses/MIT/MITlogo.jpg' 
    : license === 'Apache 2.0' ? './Licenses/Apache/Apachelogo.jpg'
    : './Licenses/BSD/BSDlogo.jpg'
    return `![License Logo](${licensePath})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''
  } else {
    const licensePath = license === 'MIT' ? 'https://mit-license.org/' 
    : license === 'Apache 2.0' ? 'https://www.apache.org/licenses/LICENSE-2.0.html'
    : 'https://codedocs.org/what-is/bsd-licenses#4-clause_license_(original_%22BSD_License%22)'
    return `[License](${licensePath})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  } else {
    return (`This project is covered under the ${license} license. 
    Please see below for a link to the full license.\n${renderLicenseLink(license)}`)
  }
}

// TODO: Create a function to generate markdown for README
export default function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Content\n
  - [Project Description](#project-description)\n
  - [Installation Instructions](#installation-instructions)\n
  - [Usage Information](#usage-information)\n
  - [Contribution Guidelines](#contribution-guidelines)\n
  - [Test Instructions](#test-instructions)\n
  - [License](#license)\n
  - [Questions](#questions)\n
  ---\n

  ## Project Description:

  ${data.descr}

  ## Installation Instructions:

  ${data.install}

  ## Usage Information:

  ${data.usage}

  ## Contribution Guidelines:

  ${data.contribution}

  ## Test Instructions:

  ${data.instr}

  ## License:

  ${renderLicenseSection(data.license)}

  ## Questions:

  Github: https://github.com/${data.github}\n
  Email: ${data.email}

`;
}
