// functions for basic operations
function add(a, b) { return (a + b) };
function divide(a, b) { return (a / b) };
function subtract(a, b) { return (a - b) };
function multiply(a, b) { return (a * b) };

// variables for all parts of operation
let firstNumber;
let secondNumber;
let operator;

// function to make operations for all case
function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "+" :
            add(firstNumber, secondNumber);
            break;
        case "-" :
            subtract(firstNumber, secondNumber);
            break;
        case "*" :
            multiply(firstNumber, secondNumber);
            break;
        case "/" :
            divide(firstNumber, secondNumber);
            break;
    }
};

// variables for HTML element's
const interfaceScreen = document.querySelector(".interfaceScreen");
const interfaceNumber = document.querySelectorAll(".interfaceNumber");
const interfaceEqualButton = document.querySelector(".interfaceEqualButton");
const interfaceSupprButton = document.querySelector(".interfaceSupprButton");

// function to add numbers to screen
function addNumberToScreen(interfaceNumber) {
    interfaceScreen.textContent += interfaceNumber.textContent;
}

interfaceNumber.addEventListener('click', addNumberToScreen())