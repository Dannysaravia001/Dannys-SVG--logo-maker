// Import the Shape class from './shape'
const Shape = require('./shape');

// Define a Circle class that extends the Shape class
class Circle extends Shape {
  constructor(color) {
    super(color); // Call the superclass constructor with the specified color
  }

  // Overrides the method from the parent class to create circle SVG content
  createSVGContent(text) {
    return `
      <circle cx="50" cy="50" r="40" />
      <text x="50%" y="50%" text-anchor="middle" fill="${this.color}">${text}</text>
    `;
  }
}

module.exports = Circle;