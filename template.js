function generateTemplate(data) {
  return `
# ${data.title}

${data.tagline}.

## Description

- ${data.what}. 
- ${data.why}. 
- ${data.how}. 
- ${data.learned}.

## Table Of Contents

${data.tableOfContents.join("\n")}

## Installation

${data.installation}

## Usage

${data.usage}

## Screenshot

![screenshot](./assets/images/screenshot.png)
![screenshot](${data.deployedURL} "${data.imgAltText}")

## Credits

This project was built in collaboration with ${data.collaboratorName},
whose GitHub profile can be found [here](${data.collaboratorGitHubURL}).

Third party assets used in this project include:
${data.thirdPartyAssets}

Tutorials used in this project include:
${data.tutorialLink}

## License

This project is licensed under the ${data.license} license.

## Features

${data.features}

## Tests

${data.tests}

## GitHub Profile / Questions

Please contact the owner of this repository at [${data.personalGitHubUserName}](
https://github.com/${data.personalGitHubUserName}).
`;
}

module.exports = generateTemplate;
