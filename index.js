// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// require my template file
const generateTemplate = require("./template");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "enter the project title:",
  },
  {
    type: "input",
    name: "tagline",
    message: "enter a one-line description of this project:",
  },
  {
    type: "input",
    name: "what",
    message:
      "describe WHAT this project is and how it helps the user solve a problem:",
  },
  {
    type: "input",
    name: "why",
    message: "describe the WHY of this project:",
  },
  {
    type: "input",
    name: "how",
    message: "describe HOW this project helps the user",
  },
  {
    type: "input",
    name: "learned",
    message: "describe what you learned making this project:",
  },
  {
    type: "checkbox",
    message:
      "please select the items you want to include in the table of contents:",
    name: "tableOfContents",
    choices: [
      `[Installation](#installation)`,
      `[Usage](#usage)`,
      `[Credits](#credits)`,
      `[License](#license)`,
    ],
  },
  {
    type: "input",
    name: "installation",
    message: "please describe the instillation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "please provide user instructions for using this product:",
  },
  {
    type: "input",
    name: "imgAltText",
    message:
      "please enter the alt text for the screenshot of the deployed application:",
  },
  {
    type: "input",
    name: "deployedURL",
    message: "please enter the full url to your deployed application:",
  },
  {
    type: "input",
    name: "collaboratorName",
    message: "please enter the names of any collaborators:",
  },
  {
    type: "input",
    name: "collaboratorGitHubURL",
    message: "please enter the GitHub URL links of your collaborators:",
  },
  {
    type: "input",
    name: "thirdPartyAssets",
    message:
      "please enter the links to any third party assets used in this project:",
  },
  {
    type: "input",
    name: "tutorialLink",
    message:
      "please enter any links to tutorials used or required by this application:",
  },
  {
    type: "list",
    message: "please select the license for this application:",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GPLv3", "none"],
  },
  {
    type: "input",
    name: "features",
    message:
      "please list any features of this project you wish to include here:",
  },
  {
    type: "input",
    name: "tests",
    message:
      "please include any tests for this application here, along with instructions on how to use the tests:",
  },
  {
    type: "input",
    name: "personalGitHubUserName",
    message: "please enter your gitub user name:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, JSON.stringify(data, null, "\t"), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const filledTemplate = generateTemplate(data);

    const fileName = `README.md`;
    writeToFile(fileName, filledTemplate, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
}

// Function call to initialize app
init();
