const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown;

const questions=[
    {//Project name
        type: "text",
        message: "what is your project Name?",
        name: "name",
        default:'Cheng',
      },
      {//Description
        type: "input",
        message: "Please leave a description of your project.",
        name: "Description",
        default:' A node.js application that uses user input from inquirer to populate a README.md file for user repository.'

      },
      {//Installation
        type: "input",
        message: "install",
        name: "npm",
        default:'project install instructions'

      },{//usage
        type: "input",
        message: "what is this program used for?",
        name: "use",
        default:'usage'

      },{// contribution guidelines
        type: "input",
        message: "Please state if others can contribute.",
        name: "contribution",
        default:'Contribution list'
      },{//license
        type: "list",
        message: "Please select which license you would like to use?",
        name: "License",
        choices:["Academic Free License v3.0",
        "Apache license 2.0",
        "Artistic license 2.0",
        "Boost Software License 1.0",
        "BSD 2-clause license",
        "BSD 3-clause license",
        "Creative Commons Zero v1.0 Universal",
        "Creative Commons Attribution 4.0",
        "Creative Commons Attribution Share Alike 4.0",
        "None"]
      },
      {// links
        type: "input",
        message: "Please give your GitHub profile link.",
        name: "author",
        default:'https://github.com/Morganbb104'

      },{//Github
        type: "input",
        message: "what is your GitHub Account?",
        name: "github",
        default:'morganbb104'

      },
      {//Email
        type: "input",
        message: "Enter your email?",
        name: "email",
        default:'hcc780921@gmail.com'

      },
      {//test
        type: "input",
        message: "Please state any test(s) require.",
        name: "test"
      }];





// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(answer => {
            // console.log(answer);
            return generateMarkdown(answer);
        })
        .then(data => {
            // console.log(data);
            fs.writeFileSync("READMEgenerated.md", data);
            console.log("README file created!");
            })
        .catch(err => { console.log(err) });
}

// function call to initialize program
init();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

## Description
${data.Description}

## User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project


  
## Table of Contents

    User Story
    1.   I a command-line application that accepts user input.
    2.   I want to be prompted for information about my application repository.
    3.   I want a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contribution Guidelines, Tests Instructions, and Questions.
    4.   I want my project title to display as the title of the README.
    5.   I want a description, installation instructions, usage information, contribution guidelines, and test instructions; and then, this information is added to the sections of the README entitled Description, Installation, Usage, Contribution Guidelines, and Tests Instructions.
    6.   I want to choose a license for my application from a list of options; and then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.  
    7.   I want to enter my GitHub username; ant then this is added to the section of the README entitled Questions, with a link to my GitHub profile.
    8.   I want to enter my email address; and then this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.
    9.   I want to click on the links in the Table of Contents; and then, I am taken to the corresponding section of the README.
 
## Usage
   
​   This application is used for quick readme generator ${data.use}

## License
   ${licenseBadge(data.License)}
  
## Installation
   The following necessary dependencies must be installed to run the application properly: undefined
   ${data.install}
## Questions 
   If you have any question please don't hesitate to contact me 
   my email is ${data.email}
   my Github name is ${data.github}, you can find me via this link ${data.author}

## Contributors
   ${data.contribution}

## Test Instructions
   ${data.test}

`;
}


module.exports = generateMarkdown;


