const inquirer = require("inquirer");

// manager questions
// engineer questions
// intern questions
// some kind of menu asking the user what they want to do next

const initialQuestions = [
    {
    message: "What is your Manager's Name?",
    type: "input",
    name: "managerName"
    },
    {
        message: "What is your Manager's Employee ID?",
        type: "input",
        name: "managerId"
    },
    {
        message: "What is your Manager's Email?",
        type: "input",
        name: "managerEmail"
    },
    {
        message: "What is your Manager's Office Number?",
        type: "input",
        name: "managerNumber"
    },
];

inquirer.prompt(initialQuestions).then((answers) => {
    // do stuff with the answers then do the next thing
})