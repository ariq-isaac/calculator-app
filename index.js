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

let firstNum;
let secondNum;
let operation;

function operate (operator, x, y) {
    return operator(x, y);
}