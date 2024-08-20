const fs = require('fs');
const inquirer = require('inquirer');
const { generateLogoSVG } = require('./lib/shapes.js');

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
    const svgContent = generateLogoSVG(text, textColor, shape, shapeColor);
    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo successfully');
}

logoInfo();