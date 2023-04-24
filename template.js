function generateTemplate(data) {
  let badgeURL = "";
  if (data.license !== "none") {
    badgeURL = `![${
      data.license
    } license](https://img.shields.io/badge/license-${encodeURIComponent(
      data.license
    )}-blue.svg)`;
  }
  return `
# ${data.title}
${badgeURL}

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

## Screenshot / Video

![screenshot](./assets/images/screenshot.png)
![${data.imgAltText}](${data.deployedURL} "${data.imgAltText}")

## Contributing

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

## Questions

Please direct questions to the owner of this repository at ${
    data.personalGitHubUserName
  }@gmail.com

Owner GitHub page:
[${data.personalGitHubUserName}](
https://github.com/${data.personalGitHubUserName}).
`;
}

module.exports = generateTemplate;
