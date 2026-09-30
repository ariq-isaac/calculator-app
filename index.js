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

 // ------------------------------------------------------
 // Fetch dom elements
 // ------------------------------------------------------

const display = document.querySelector(".display");

// Function for Number buttons
function numberClicked (event) {
    const buttonValue = event.target.textContent;
    display.textContent += buttonValue;
}

// Adds event listener to number buttons {1, 2, 3, 4, 5, 6, 7, 89, 0, 00, .}
const numberButtons = document.querySelectorAll("#numbers-container .btn");
numberButtons.forEach(
    (item) => item.addEventListener("click", numberClicked)
)