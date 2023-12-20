// Import the Shape class from './shape'
const Shape = require('./shape');

// Define a Circle class that extends the Shape class
class Circle extends Shape {
  constructor(color) {
    super(color); // Call the superclass constructor with the specified color
  }

  // Overrides the method from the parent class to create circle SVG content
  createSVGContent() {
    // Logic for rendering a circle SVG
    return '<circle cx="100" cy="100" r="80" />'; // Generates SVG content for a circle
  }
}

module.exports = Circle; // Exports the Circle class for use in other files