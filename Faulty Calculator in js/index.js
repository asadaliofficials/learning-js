// Faulty Calculator

let num1 = 10;
let operator = "-";
let num2 = 5;


let rand = Math.floor(Math.random() * 101);
console.log("Random num is " + rand);
function myFunction(num1, operator, num2) {
  if (operator === "+") {
    if (rand < 10) {
      console.log(num1 - num2);
    }
    else {
      console.log(num1 + num2);
    }
  }
  if (operator === "*") {
    if (rand < 10) {
      console.log(num1 + num2);
    }
    else {
      console.log(num1 * num2);
    }
  }
  if (operator === "-") {
    if (rand < 10) {
      console.log(num1 / num2);
    }
    else {
      console.log(num1 - num2);
    }
  }
  if (operator === "/") {
    if (rand < 10) {
      console.log(num1 ** num2);
    }
    else {
      console.log(num1 / num2);
    }
  }
}
myFunction(num1, operator, num2);