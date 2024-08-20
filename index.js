const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

async function logoInfo() {
    const { text, textColor, shape, shapeColor } = await inquirer.prompt([
        {
            name: 'text',
            message: 'Enter up to three characters',
            type: 'input',
        },
        {
            name: 'textColor',
            message: 'Enter a color keyword (OR a hexadecimal number)',
            type: 'input'
        },
        {
            name: 'shape',
            message: 'Choose a shape',
            type: 'list',
            choices: ['circle', 'triangle', 'square']
        },
        {
            name: 'shapeColor',
            message: 'Enter a color keyword (OR a hexadecimal number)',
            type: 'input'
        }
    ]);
    const shapeSVG = {
        circle: `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`,
        triangle: `<polygon points="150,20 280,180 20,180" fill="${shapeColor}" />`,
        square: `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />`
    };

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSVG[shape]}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo successfully');
}

logoInfo();