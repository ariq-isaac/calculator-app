function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

let firstOperand;
let operation;
let currentInput;

const operationRules = {
    '+': add,
    '-': subtract,
    'x': multiply,
    '÷': divide
};

function operate (operator, x, y) {
    return operator(x, y);
};

 // ------------------------------------------------------
 // Fetch dom elements
 // ------------------------------------------------------

// Display
const display = document.querySelector(".display");
// Operators
const operatorsBtn = document.querySelectorAll(".operator");
// Numbers
const numberBtn = document.querySelectorAll("#numbers-container .btn");
// All clear
const allClearBtn = document.querySelector(".all-clear");
// Equal Sign
const equalBtn = document.querySelector(".equal");
// Delete button
const deleteBtn = document.querySelector(".delete");
// PercentageBtn
const percentBtn = document.querySelector(".percentage");

// ------------------------------------------------------
// Functions used for callbacks
// ------------------------------------------------------

// the function that the number and operator button will accept as callback
function operatorHandler(input) {

    // Check if input is an operator
    const isOperator = (
        input === '-' || 
        input === '+' || 
        input === 'x' || 
        input === '÷'
    );

    // Press 1: currentInput = '1'
    currentInput = input;
    
    // Press +: firstOperant = '1', operator = '+' and clear currentInput
    if (isOperator) {
        firstOperand = currentInput;
        currentInput = "";
        operation = input;
    }
    
    // Press 2: currentInput = '2'

    // Press -: operator already pending, and theres a second number,
    //    so evaluate 1 + 2 = 3, then display 3, set firstOperator = 3,
    //    and set operator = '-'
    if (firstOperand && isOperator && currentInput) {
        firstOperand = operate(operationRules[operation], firstOperand, currentInput);
        operation = input;
        currentInput = "";
    }
}

// ------------------------------------------------------
// Events
// ------------------------------------------------------