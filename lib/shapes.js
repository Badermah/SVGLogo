class Circle {
  getSvgString(shapeColor, textColor, text) {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
      `;
  }
}

class Triangle {
  getSvgString(shapeColor, textColor, text) {
    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,0 255,180 48,180" fill="${shapeColor}" />
            <text x="150" y="125"  font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>
        `;
  }
}
class Square {
  getSvgString(shapeColor, textColor, text) {
    return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="190" height="200" fill="${shapeColor}" />
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
              </svg>
            `;
  }
}
module.exports = {
  Circle,
  Triangle,
  Square,
};
