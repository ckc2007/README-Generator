// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// require my template file
const template = require("./template");

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
      message: "please enter the alt text for the screenshot of the deployed application:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
