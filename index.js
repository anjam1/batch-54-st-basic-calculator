#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Please enter the first number",
    },
    {
        type: "number",
        name: "num2",
        message: "Please enter the second number",
    },
    {
        type: "list",
        name: "operator",
        message: "Please select the operator",
        choices: ['add', 'subtract', 'multiply', 'divide']
    }
]);
let result;
switch (answer.operator) {
    case 'add':
        result = answer.num1 + answer.num2;
        console.log("the sum of two numbers is: " + result);
        break;
    case 'subtract':
        result = answer.num1 - answer.num2;
        console.log("The difference between two numbers is: " + result);
        break;
    case 'multiply':
        result = answer.num1 * answer.num2;
        console.log("The product of two numbers is: " + result);
        break;
    case 'divide':
        if (answer.num2 !== 0) {
            result = answer.num1 / answer.num2;
            console.log("the result of division is:" + result);
        }
        else {
            console.log("Invalid numbers");
        }
        break;
}
