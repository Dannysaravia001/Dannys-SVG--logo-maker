// Base Class representing a generic shape 
class Shape {
    constructor(color) {
        this.color = color; // initializes the color property 
    }
    
    // Placeholder method to be implemented be child classes 
    createSVGContent(){
        throw new error('Shape method not implemeted');
    }
    
    // renders SVG content for the shape with the specified color
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
    createSVGCOntent() {
        return '<circle cx="50 cy"50 r="40 />';
    }
}

module.exports = {Shape, Circle};