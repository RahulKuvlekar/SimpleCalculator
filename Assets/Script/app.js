var inputNumber = document.getElementById("inputNumber");
const addBtn = document.getElementsByClassName("btn-add");
const subBtn = document.querySelector(".btn-sub");
const multiplyBtn = document.querySelector(".btn-multiply");
const divideBtn = document.querySelector(".btn-divide");
const resetBtn = document.querySelector(".btn-reset");

const currentResultOutput = document.getElementById('currentResult');
const currentCalculationOutput = document.getElementById('currentCalculation');

function outputResult(result, text) {
    currentCalculationOutput.textContent = text;
    currentResultOutput.innerText = result;
}


// outputResult(123,"lol");

// To test Btn's 
// multiplyBtn.addEventListener("click",() => {
//     console.log(`Clicked ${parseInt(inputNumber.value)}`)
// })

var currentValue = 0;
var prevValue = 0;
var logEntries = [];

function getUserInput() {
    return parseInt(inputNumber.value);
}

function insertLogEntry(
    operator,
    prevResult,
    currentResult,
    output) {
    var logEntry = {
        operator: operator,
        prevResult: prevResult,
        currentResult: currentResult,
        output: output
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateValue(operator) {
    var enterValue = getUserInput();
    prevValue = currentValue;
    if (operator === "+") {
        currentValue += enterValue;
    }
    else if (operator === "-") {
        currentValue -= enterValue;
    }
    else if (operator === "*") {
        currentValue *= enterValue;
    }
    else if (operator === "/") {
        if (enterValue) {
            currentValue /= enterValue;
        }else{
            alert("Error -> Please RESET the calculator");
            return;
        }
    }

    outputResult(currentValue, `${prevValue} ${operator} ${enterValue}`);
    insertLogEntry(operator, prevValue, enterValue, currentValue);
}

function addFunction() {
    calculateValue("+");
}
function subFunction() {
    calculateValue("-");
}
function multiplyFunction() {
    calculateValue("*");
}
function divideFunction() {
    calculateValue("/");
}

function resetFunction() {
    currentValue = prevValue = 0;
    outputResult("", "");
    logEntries = [];
    console.log("Logged Empty ??", logEntries.length);
}


addBtn[0].addEventListener('click', addFunction);
subBtn.addEventListener('click', subFunction);
multiplyBtn.addEventListener('click', multiplyFunction);
divideBtn.addEventListener('click', divideFunction);
resetBtn.addEventListener('click', resetFunction);
