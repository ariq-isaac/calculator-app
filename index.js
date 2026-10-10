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

let firstOperand = null;
let operation = null;
let currentInput = "";
let justEvaluated = false;

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

// Shows the numbers being typed
function updateDisplay() {
    display.textContent = currentInput || firstOperand || "0";
}

function resetState() {
    firstOperand = null;
    operation = null;
    currentInput = "";
    justEvaluated = false;
}

// Runs firstOperand (operation) currentInput and stores the result in firstOperand
function evaluate() {
    const a = Number(firstOperand);
    const b = Number(currentInput);

    if (operation === "÷" && b === 0) {
        resetState();
        display.textContent = "Cannot divide by zero!";
        return false;
    }

    const result = operate(operationRules[operation], a, b);

    // Round long decimals
    firstOperand = String(Math.round(result * 1e10) / 1e10);
    currentInput = "";
    return true;
}

function handleNumber(event) {
    const digit = event.target.textContent;

    // A result is on screen, so start a brand new calculation
    if (justEvaluated) resetState();

    // Only one decimal point per number
    if (digit === "." && currentInput.includes(".")) return;

    // "." on an empty input becomes "0."
    if (digit === "." && currentInput === "") {
        currentInput = "0.";
        updateDisplay();
        return;
    }

    // Avoid leading zeros like 007 or 00
    if ((digit === "0" || digit === "00") && (currentInput === "" || currentInput === "0")) {
        currentInput = "0";
        updateDisplay();
        return;
    }
    if (currentInput === "0" && digit != ".") {
        currentInput = digit;
        updateDisplay();
        return;
    }

    currentInput += digit;
    updateDisplay();
}

function handleOperator(event) {
    const op = event.target.textContent;

    // Nothing to operate yet
    if (firstOperand === null && currentInput === "") return;

    // Both numbers and an operator exist = evaluate the pair first (chaining)
    if (firstOperand !== null && operation && currentInput !== "") {
        if (!evaluate()) return;
    }
    // Very first operator: move the typed number into firstOperand
    else if (firstOperand === null) {
        firstOperand = currentInput;
        currentInput = "";
    }

    // If no number was typed since the last operator, this just swaps the operator
    operation = op;
    justEvaluated = false;
    updateDisplay();
}

function handleEquals() {
    // Needs two numbers and an operator
    if (firstOperand === null || !operation || currentInput === "") return;

    if (!evaluate()) return;

    operation = null;
    justEvaluated = true;
    updateDisplay();
}

function handleDelete() {
    if (justEvaluated) return;
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function handleClear() {
    resetState();
    updateDisplay();
}

// ------------------------------------------------------
// Events
// ------------------------------------------------------

numberBtn.forEach((btn) => btn.addEventListener("click", handleNumber));
operatorsBtn.forEach((btn) => btn.addEventListener("click", handleOperator));
equalBtn.addEventListener("click", handleEquals);
deleteBtn.addEventListener("click", handleDelete);
allClearBtn.addEventListener("click", handleClear);