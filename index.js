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

let nums = [];
let operation;

function operate (operator, x, y) {
    return operator(x, y);
}

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
 // Events
 // ------------------------------------------------------

// Function for Number buttons
function buttonClicked (event) {
    const buttonValue = event.target.textContent;
    display.textContent += buttonValue;
};

// Adds event listener to number buttons {1, 2, 3, 4, 5, 6, 7, 89, 0, 00, .}
numberBtn.forEach(
    (button) => button.addEventListener("click", buttonClicked)
);
// Adds event listener to operators 
operatorsBtn.forEach(
    (button) => button.addEventListener("click", buttonClicked)
);
// Adds event listener to All Clear button
allClearBtn.addEventListener(
    "click",
    () => display.textContent = ""
);
// Adds event listener to delete button
deleteBtn.addEventListener(
    "click",
    () => {
        let displayContent = display.textContent;
        display.textContent = displayContent.slice(0, -1);
    }
);
// Adds event listener to percentage button
percentBtn.addEventListener("click", buttonClicked);