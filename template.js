let solution = `
# ${title}

${tagline}.

## Description

${what}. ${why}. ${how}. ${learned}.

${tableOfContents}

## Installation

${installation}

## Usage

${usage}

\```md
![${imgAltText}](assets/images/screenshot.png)
\```

Link to the deployed application:
\```
${deployedURL}
\```

## Credits

${collaboratorName}: ${collaboratorGitHubURL}
${thirdPartyAssets}
${tutorialLink}

## License

${license}

## Features

${features}

## Tests

${tests}

## GitHub Profile

https://github.com/${personalGitHubUserName}

`;

module.exports = { solution };
