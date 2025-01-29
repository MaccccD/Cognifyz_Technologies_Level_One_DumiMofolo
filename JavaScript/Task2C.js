// Trial Run Practice
const numberOne = 2;
const numberTwo = 5;
const answer1 = numberOne + numberTwo;
console.log(answer1);


//grab the references 
const firstNumber = document.querySelector(".firstNumber");
const secondNumber = document.querySelector(".secondNumber");
const answer = document.querySelector(".answer");


// converting the string numbers(text content) into float(numerical) values here:
const number1 = parseFloat(firstNumber.innerHTML);
const number2 = parseFloat(secondNumber.innerHTML);
const result = number1 + number2;

answer.textContent = result;


