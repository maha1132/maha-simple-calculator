import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perfome action",
    type: "list",
    name: "operator",
    choices: ["Addition", "substraction", "multiplication", "division"],
  },
]);

// conditional statement
if (answer.operator === "Addition") {
    console.log( answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "substraction") {
     console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}  else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}   else {
    console.log("please select valid operator")
}