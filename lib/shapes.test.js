const { Circle, Triangle, Square } = require("./shapes");

test("Circle class returns correct SVG string", () => {
  const circle = new Circle();
  const svgString = circle.getSvgString("red", "black", "C");
  expect(svgString).toContain('<circle cx="150" cy="100" r="80" fill="red" />');
  expect(svgString).toContain(
    '<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">C</text>'
  );
});

test("Triangle class returns correct SVG string", () => {
  const triangle = new Triangle();
  const svgString = triangle.getSvgString("green", "blue", "T");
  expect(svgString).toContain(
    '<polygon points="150,0 255,180 48,180" fill="green" />'
  );
  expect(svgString).toContain(
    '<text x="150" y="125"  font-size="50" text-anchor="middle" fill="blue">T</text>'
  );
});

test("Square class returns correct SVG string", () => {
  const square = new Square(50, 50, 200, "yellow", "purple", "S");
  const svgString = square.getSvgString("yellow", "purple", "S");
  expect(svgString).toContain(
    '<rect x="50" y="50" width="190" height="200" fill="yellow" />'
  );
  expect(svgString).toContain(
    '<text x="150" y="150" font-size="60" text-anchor="middle" fill="purple">S</text>'
  );
});
