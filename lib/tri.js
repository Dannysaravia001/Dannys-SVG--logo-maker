const Shape = require('./shape');

// Define a Triangle class that extends the Shape class
class Triangle extends Shape {
    constructor(color) {
        // Call the superclass constructor with the specified color
        super(color);
    }
    
    // Overrides the method from the parent class to create triangle SVG content
    createSVGcontent() {
        return '<polygon points="100,10 40,198 190,78 10,78 160,198" />';
    }
}

module.exports = Triangle;