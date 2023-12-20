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
      message: 'Enter Text Color:',
    },
    {
      name: 'shape',
      type: 'list',
      message: 'What shape do you want the logo to be?',
      choices: ['circle', 'triangle', 'square'],
    },
  ]);

  let shape;
  switch (userInput.shape) {
    case 'circle':
      shape = new Circle(userInput.textColor); 
      break;
    default:
      throw new Error('Invalid shape choice');
  }

  const svgContent = shape.renderSVG(); 
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated New logo.svg');
}

generateLogo();
