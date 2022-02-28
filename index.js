const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')
const licenseArr = ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "None"]


const questions=[
    {//Project name
        type: "input",
        message: "what is your project Name?",
        name: "Title",
        default:'Project',
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



