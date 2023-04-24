function generateTemplate(data) {
  return `
# ${data.title}

${data.tagline}.

## Description

${data.what}. ${data.why}. ${data.how}. ${data.learned}.

## Table Of Contents

${data.tableOfContents.join("\n")}

## Installation

${data.installation}

## Usage

${data.usage}

## Screenshot
![screenshot](${data.deployedURL} "${data.imgAltText}")

## Credits

${data.collaboratorName}: ${data.collaboratorGitHubURL}
${data.thirdPartyAssets}
${data.tutorialLink}

## License

${data.license}

## Features

${data.features}

## Tests

${data.tests}

## GitHub Profile

https://github.com/${data.personalGitHubUserName}

`;
}

module.exports = generateTemplate;
