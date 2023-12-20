class Shape {
    constructor(color) {
        this.color = color;
    }

    createSVGContent(){
        throw new error('Shape method not implemeted');
    }

    renderSVG() {
         return `<svg fill="${this.color}">${this.createSVGContent()}</svg>`; 
    }
    
    static generateSVG(userInput) {
        const shape = new Shape(userInput.shapeColor);
        return shape.renderSVG();
    }
}
class Circle extends Shape {
    createSVGCOntent() {
        return '<circle cx="50 cy"50 r="40 />';
    }
}

module.exorts = {Shape, Circle};