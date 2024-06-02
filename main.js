#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let user_ans = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "Please enter your sentence"
});
let word_count = user_ans.words.trim().split(" ").length;
console.log(chalk.blue.bold(`Your sentence has ${word_count}`));
