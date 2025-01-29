// const number1 = 2;
// const number2 = 5;
// const answer = number1 + number2;
// console.log(answer);

const firstNumber = document.querySelector(".firstNumber");
const secondNumber = document.querySelector(".secondNumber");
const answer = document.querySelector(".answer");


// converting the string numbers(text content) into float(numerical) values here:
const number1 = parseFloat(firstNumber.innerHTML);
const number2 = parseFloat(secondNumber.innerHTML);
const result = number1 + number2;

answer.textContent = result;


