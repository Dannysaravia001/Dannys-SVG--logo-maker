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
    renderSVG(text) {
        return `<svg fill="${this.color}">${this.createSVGContent(text)}</svg>`;
      }
    
    // Static method to generate an image based on user input
    static generateSVG(userInput) {
        const shape = new Shape(userInput.shapeColor);
        return shape.renderSVG();
    }
}

// Subclass representing a circle shape
class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    createSVGContent(text) {
      return `
        <svg width="100" height="100">
          <circle cx="50" cy="50" r="40" fill="${this.color}" />
          <text x="50%" y="50%" text-anchor="middle" fill="white">${text}</text>
        </svg>
      `;
    }
  }
module.exports = { Shape, Circle };