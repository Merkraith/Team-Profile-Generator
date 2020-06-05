const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employees = [];
startQuestionsManager();

function startQuestionsManager() {
    inquire
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "Enter the manager's first and last name?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's ID?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is manager's email?",
            },
            {
                type: "input",
                name: "managerPhoneNumber",
                message: "What is manager's phone number?",
            }
        ])
        .then(function (response) {
            let managerName = response.managerName;
            let managerId = response.managerId;
            let managerEmail = response.managerEmail;
            let managerPhoneNumber = response.managerPhoneNumber;
            let manager = new Manager(managerName, managerId, managerEmail, managerPhoneNumber);
            employees.push(manager);
            employeeQuestions();
        });
}

function employeeQuestions {
    inquire
        .prompt([

            {
                type: "input",
                name: "employeeName",
                message: "Enter the employee's first and last name?",
            },
            {
                type: "input",
                name: "employeeId",
                message: "What is the employee's ID?",
            },
            {
                type: "input",
                name: "employeeEmail",
                message: "What is employee's email?",
            },
            {
                type: "list",
                name: "role",
                message: "Enter employee's role:",
                choices: ["Engineer", "Intern"],
            },
            {
                type: "input",
                name: "employeeGitHub",
                message: "What is employee's GitHub Username?",
                when: (answers) => answers.role === "Engineer"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What School is Intern attending?",
                when: (answers) => answers.role === "Intern"
            },
            {
                type: "list",
                name: "again",
                message: "Enter another Employee?",
                choices: ["Yes", "No"]
            }
        ])
        .then(function (response)) {
        let employeeName = response.employeeName;
        let employeeId = response.employeeId;
        let employeeEmail = response.employeeEmail;
        let role = response.role;
        let github = response.employeeGithub;
        let school = response.internSchool;
        
    }
}


    //     .then(function (response)) {
    // let Name = response.Name;
    // let email = response.email;
    // let id = response.id;
    // let role = response.role;
    // let school = response.school;
    // let github = response.github;
//     let officenumber = response.officenumber

//     if (role === "Engineer") {
//         let engineer = new Engineer(name, id, email, github)
//         employees(engineer);
//     } if (response.another === true) {
//         promptQuestions();
//     } else {
//         renderHtml();
//     }

//     if (role === "Intern") {
//         let intern = new Intern(name, id, email, school)
//         employees(intern);
//     } if (response.another === true) {
//         promptQuestions();
//     } else {
//         renderHtml();
//     }

//     if (role === "Manager") {
//         let manager = new Manager(name, id, email, officenumber)
//         employees(manager);
//     } if (response.another === true) {
//         promptQuestions();
//     } else {
//         renderHtml();
//     }
// }



// {
//     type: "list",
//     name: "role",
//     message: "Enter employee's role:",
//     choices: ["Manager", "Engineer", "Intern"],
// },
// {
//     type: "input",
//     name: "intern",
//     message: "Enter the school the Intern attends",
//     when: (answers) => answers.role === 'Intern'
// },
// {
//     type: "input",
//     name: "manager",
//     message: "Enter the office number for the Manager",
//     when: (answers) => answers.role === 'Manager'
// },
// {
//     type: "input",
//     name: "engineer",
//     message: "Enter the GitHub for the Engineer",
//     when: (answers) => answers.role === 'Engineer'
// },
// {
//     type: "confirm",
//     name: "another",
//     message: "Is there another team member to add?",
//     choices: ['Yes', 'No']
// },















// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
