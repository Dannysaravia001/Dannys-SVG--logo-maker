const inquirer = require('inquirer');
const fs = require('fs');
const { Circle } = require('./lib/shape');

async function generateLogo() {
  const userInput = await inquirer.prompt([
    {
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      name: 'textColor',
      message: 'Enter logo Color:',
    },
    {
      name: 'shape',
      type: 'list',
      message: 'What shape do you want the logo to be?',
      choices: ['circle', 'triangle', 'square'],
    },
  ]);

  let shape;
  let svgContent;
  switch (userInput.shape) {
    case 'circle':
      shape = new Circle(userInput.textColor);
      svgContent = shape.renderSVG(userInput.text);
      break;
   
  }

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated New logo.svg');
}

generateLogo();