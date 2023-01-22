//Import NPM packages
const inquirer = require("inquirer");
const fs = require('fs');

//Import Classes from Library folder
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Create Empty Array of Team Members
const teamMembers = [];

// Manager Questions to start building the team
const managerQuestions = [
  {
    message: "What is your Manager's Name?",
    type: "input",
    name: "managerNameInput",
  },
  {
    message: "What is your Manager's Employee ID?",
    type: "input",
    name: "managerIdInput",
  },
  {
    message: "What is your Manager's Email?",
    type: "input",
    name: "managerEmailInput",
  },
  {
    message: "What is your Manager's Office Number?",
    type: "input",
    name: "managerNumberInput",
  },
 
];

inquirer.prompt(managerQuestions).then((answers) => {
    const newManager = new Manager(
        answers.managerNameInput,
        answers.managerIdInput,
        answers.managerEmailInput,
        answers.managerNumberInput,
    )
    teamMembers.push(newManager);
});

const menu = [
    {
        message: chalk.orange("---------Menu--------- \nChoose one of the following options:"),
        type: "list",
        name: "menuChoice",
        choices: [
          {
            name: "Add an" + chalk.bold.yellow("ENGINEER") + "to the team",
          },
          {
            name: "Add an" + chalk.bold.green("INTERN") + "to the team",
          },
          {
            name: "I'm finished building my team!",
          },
        ],
      },
]

// Questions for the Engineer Class

const engineerQuestions = [
  {
    message: "What is the name of this" + chalk.bold.yellow("ENGINEER") + "?",
    type: "input",
    name: engineerNameInput,
  },
  {
    message: chalk.bold.yellow("ENGINEER") + "Employee ID:",
    type: "input",
    name: engineerIdInput,
  },
  {
    message: chalk.bold.yellow("ENGINEER") + "email address:",
    type: "input",
    name: engineerEmailInput,
  },
  {
    message: chalk.bold.yellow("ENGINEER") + "GitHub username:",
    type: "input",
    name: engineerGithubInput,
  },
  {
    message: chalk.orange("---------Menu--------- \nChoose one of the following options:"),
    type: "list",
    name: "menu",
    choices: [
      {
        name: "Add another" + chalk.bold.yellow("ENGINEER") + "to the team?",
      },
      {
        name: "Add an" + chalk.bold.green("INTERN") + "to the team?",
      },
      {
        name: "I'm finished building my team!",
      },
    ],
  },
];

// Questions for the Intern Class

const internQuestions = [
    {
      message: "What is the name of this" + chalk.bold.green("INTERN") + "?",
      type: "input",
      name: internNameInput,
    },
    {
      message: chalk.bold.green("INTERN") + "Employee ID:",
      type: "input",
      name: internIdInput,
    },
    {
      message: chalk.bold.green("INTERN") + "email address:",
      type: "input",
      name: internEmailInput,
    },
    {
      message: "What school does this" + chalk.bold.green("INTERN") + "attend?",
      type: "input",
      name: internschoolInput,
    },
    {
      message: chalk.orange("---------Menu--------- \nChoose one of the following options:"),
      type: "list",
      name: "menu",
      choices: [
        {
          name: "Add another" + chalk.bold.yellow("ENGINEER") + "to the team?",
        },
        {
          name: "Add an" + chalk.bold.green("INTERN") + "to the team?",
        },
        {
          name: "I'm finished building my team!",
        },
      ],
    },
  ];
  