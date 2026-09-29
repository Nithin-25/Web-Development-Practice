// const display = document.getElementById("display");

// function appendValue(value) {
//     display.value += value;
// }

// function clearDisplay() {
//     display.value = "";
// }

// function deleteLast() {
//     display.value = display.value.slice(0, -1);
// }

// function calculate() {
//     try {
//         display.value = eval(display.value);
//     } catch {
//         display.value = "Error";
//     }
// }

const display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let expression = display.value;

    if (expression.includes("+")) {
        operator = "+";
    } else if (expression.includes("-")) {
        operator = "-";
    } else if (expression.includes("*")) {
        operator = "*";
    } else if (expression.includes("/")) {
        operator = "/";
    }

    let numbers = expression.split(operator);

    firstNumber = Number(numbers[0]);
    secondNumber = Number(numbers[1]);

    let result;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else if (operator === "/") {
        result = firstNumber / secondNumber;
    }

    display.value = result;
}