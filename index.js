const inquirer = require("inquirer");


// engineer questions
// intern questions
// some kind of menu asking the user what they want to do next


// Manager Questions to start building the team
const managerQuestions = [
    {
    message: "What is your Manager's Name?",
    type: "input",
    name: "managerNameInput"
    },
    {
        message: "What is your Manager's Employee ID?",
        type: "input",
        name: "managerIdInput"
    },
    {
        message: "What is your Manager's Email?",
        type: "input",
        name: "managerEmailInput"
    },
    {
        message: "What is your Manager's Office Number?",
        type: "input",
        name: "managerNumberInput"
    },
];

inquirer.prompt(managerQuestions).then((answers) => {
    const newManager = new Manager()
})

// Questions after getting the manager

const teamQuestions = [
    {

    }
]