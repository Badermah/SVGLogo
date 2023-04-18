const inquirer = require("inquirer");
const fs = require("fs");

// Prompt user for input
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Enter text (up to 3 characters): ",
        validate: (input) => {
          if (input.length <= 3) {
            return true;
          }
          return "Please enter up to 3 characters.";
        },
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter text color (keyword or hexadecimal number): ",
      },
      {
        type: "list",
        name: "shape",
        message: "Select a shape:",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter shape color (keyword or hexadecimal number): ",
      },
    ])
    .then((answers) => {
      const { text, textColor, shape, shapeColor } = answers;
    });
}

init();
