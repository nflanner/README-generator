// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ''
  } else {
    const licensePath = license === 'MIT' ? './../Licenses/MIT/MITlogo.jfif' 
    : license === 'Apache' ? './../Licenses/Apache/Apachelogo.htm'
    : './../Licenses/BSD/logo.jfif'
    return licensePath;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''
  } else {
    const licensePath = license === 'MIT' ? './../Licenses/MIT/MIT_files/03611f753e1ab5218ebdb7940d7759fc.html' 
    : license === 'Apache' ? './../Licenses/Apache/Apache_files/03611f753e1ab5218ebdb7940d7759fc.html'
    : './../Licenses/BSD/BSD_files/03611f753e1ab5218ebdb7940d7759fc.html'
    return licensePath;
    const licenselink = `[License Link](URL \'${licensePath}\')`;
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

  Github: [URL \'https://github.com/nflanner/${data.github}\'\n
  Email: ${data.email}

`;
}
