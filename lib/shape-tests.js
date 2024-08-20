const { Circle, Triangle, Square } = require('./shapes.js');

test('Circle render', () => {
    const shape = new Circle();
    const color = 'red';
    expect(shape.render(color)).toBe(`<circle cx="150" cy="100" r="90" fill="${color}" />`);
});

test('Triangle render', () => {
    const shape = new Triangle();
    const color = 'red';
    expect(shape.render(color)).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
});

test('Square render', () => {
    const shape = new Square();
    const color = 'red';
    expect(shape.render(color)).toBe(`<rect x="60" y="10" width="180" height="180" fill="${color}" />`);
})