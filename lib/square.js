// Import the Shape class from './shape'
const Shape = require('./shape')

// Define a Square class that extends the Shape class
class Square extends Shape {
    constructor(color) {
        super(color);
    }
    // Overrides the method from the parent class to create square SVG content
    createSVGContent() {
        // Generates SVG content for a square
        return '<rect width="200" height="200" />';
    }
}

module.exports = square; // Exports the Square class for use in other files