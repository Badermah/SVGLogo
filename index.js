const inquirer = require("inquirer");
const fs = require("fs");

// Define shapes
const { Circle, Triangle, Square } = require("./lib/shapes");

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
      let svgString;
      switch (shape) {
        case "circle":
          const circle = new Circle(150, 100, 80);
          svgString = circle.getSvgString(shapeColor, textColor, text); // Pass text variable as argument
          break;
        case "triangle":
          const triangle = new Triangle(150, 50, 50, 250, 250, 250); // Update with your triangle coordinates
          svgString = triangle.getSvgString(shapeColor, textColor, text); // Pass text variable as argument
          break;
        case "square":
          const square = new Square(50, 50, 200); // Update with your square coordinates and size
          svgString = square.getSvgString(shapeColor, textColor, text); // Pass text variable as argument
          break;
        default:
          console.error("Invalid shape selection");
          return;
      }

      // Write the SVG string to a file
      fs.writeFile("logo.svg", svgString, (err) => {
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
