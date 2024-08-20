class Circle {
    render(setColor) {
        return `<circle cx="150" cy="100" r="90" fill="${setColor}" />`;
    }}

class Triangle {
    render(setColor) {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${setColor}" />`;
    }}

class Square {
    render(setColor) {
        return `<rect x="60" y="10" width="180" height="180" fill="${setColor}" />`;
    }}

        function generateLogoSVG(text, textColor, shape, shapeColor) {
            let shapeInstance;
            switch (shape) {
                case 'circle':
                    shapeInstance = new Circle();
                    break;
                case 'triangle':
                    shapeInstance = new Triangle();
                    break;
                case 'square':
                    shapeInstance = new Square();
                    break;
                default:
                    throw new Error('Invalid shape');
        }

        const shapeElement = shapeInstance.render(shapeColor);
    
        return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeElement}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
    }
    
    module.exports = { Circle, Triangle, Square, generateLogoSVG };