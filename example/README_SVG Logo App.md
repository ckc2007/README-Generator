
# SVG Logo Generator App
![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)

Generate an SVG logo file with command-line prompts..

## Description

- This simple app allows the user to quickly generate a logo using the command line. it prompts for text, text color, a shape (either Triangle, Circle or Square) and a shape color. It then outputs an svg file.. 
- Using the command line to design a simple logo saves time and money! You don't need to hire someone to do this - just generate your own logo on the command line while you work!. 
- Its a fun and simple solution to an otherwise tedious design task.. 
- The SVG format is simple and intuitive. It uses javascript classes to delineate shapes and their properties, and it uses the command line to quickly take user input..

## Table Of Contents

[Installation](#installation)
[Usage](#usage)
[License](#license)

## Installation

- clone the repo. - install the npm packages (inquirer and jest). - run: node index from the command line

## Usage

When the user runs the command node index, they will be prompted in the command line with a series of questions asking for three characters of text, text color, a shape, and the color of the shape. When these questions have been answered,   an svg file will be created displaying the selected choices as a logo.

## Screenshot / Video

![screenshot](./assets/images/screenshot.png)
![a simple svg file generator](https://drive.google.com/file/d/1e57zOBujZlh6n8HON2vd5xFM_2VcUWMB/view "a simple svg file generator")

## Contributing

This project was built in collaboration with ,
whose GitHub profile can be found [here]().

Third party assets used in this project include:
https://www.npmjs.com/package/inquirer

Tutorials used in this project include:
https://en.wikipedia.org/wiki/SVG

## License

This project is licensed under the MIT license.

## Features

- uses inquirer to gather user input. - uses jest testing suite. - outputs an svg logo file

## Tests

tests are located in lib/tests. Please run 'npx jest' to run all tests. The test config is located in the main directory in jest.config.js

## Questions

Please direct questions to the owner of this repository at ckc2007@gmail.com

Owner GitHub page:
[ckc2007](
https://github.com/ckc2007).
