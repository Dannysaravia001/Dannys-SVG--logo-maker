// Base Class representing a generic shape 
class Shape {
    constructor(color) {
        this.color = color; // initializes the color property 
    }
    
    // Placeholder method to be implemented by child classes 
    createSVGContent(){
        throw new Error('Shape method not implemented');
    }
    
    // Renders SVG content for the shape with the specified color
    renderSVG() {
         return `<svg fill="${this.color}">${this.createSVGContent()}</svg>`; 
    }
    
    // Static method to generate an image based on user input
    static generateSVG(userInput) {
        const shape = new Shape(userInput.shapeColor);
        return shape.renderSVG();
    }
}

// Subclass representing a circle shape
class Circle extends Shape {
    createSVGContent() {
        return '<circle cx="50" cy="50" r="40" />';
    }
}

module.exports = { Shape, Circle };