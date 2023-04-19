const inquirer = require("inquirer");
const fs = require("fs");

// Define shapes
const shapes = {
  circle: '<circle cx="150" cy="100" r="80" fill="${shapeColor}"/>',
  triangle: '<polygon points="150,20 80,180 220,180" fill="${shapeColor}"/>',
  square: '<rect x="50" y="50" width="200" height="100" fill="${shapeColor}"/>',
};

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

      // Generate the SVG string using shape and colors
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect width="100%" height="100%" fill="none"/>
      ${shapes[shape].replace("${shapeColor}", shapeColor)}
      <text x="150" y="100" text-anchor="middle" dy=".3em" font-size="48" fill="${textColor}">
        ${text}
      </text>
    </svg>`;

      // Write the SVG string to a file
      fs.writeFile("logo.svg", svg, (err) => {
        if (err) {
          console.error("Failed to create logo.svg:", err);
        } else {
          console.log("Generated logo.svg");
        }
      });
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

init();
