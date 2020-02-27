import { calculate } from "./math.js";
import { appendParagraph } from "./elements.js";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__clear");
const calculatorOperators = document.querySelectorAll(".calculator__operator");
const logs = document.querySelector(".logs");

let firstNumber = null;
let operator = null;
let isWaitingForNewNumber = true;

function calculateResult() {
  if (!operator) {
    return;
  }
  const secondNumber = Number(calculatorOutput.value);
  const result = calculate(firstNumber, secondNumber, operator);

  const text = `${firstNumber} ${operator} ${secondNumber} = ${result}`;
  appendParagraph(text, logs);

  calculatorOutput.value = result;

  firstNumber = result;
  isWaitingForNewNumber = true;
  operator = null;
}

calculatorResult.addEventListener("click", calculateResult);

function clear() {
  calculatorOutput.value = "";
}

calculatorClear.addEventListener("click", clear);

function addInputEventListener(calculatorInput) {
  function handleCalculatorInputClick() {
    if (isWaitingForNewNumber) {
      firstNumber = Number(calculatorOutput.value);
      calculatorOutput.value = "";
      isWaitingForNewNumber = false;
    }
    calculatorOutput.value += calculatorInput.innerText;
  }

  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}

calculatorInputs.forEach(addInputEventListener);

function addOperatorEventListener(calculatorOperator) {
  function handleCalculatorOperatorClick() {
    if (!isWaitingForNewNumber && operator) {
      calculateResult();
    }
    operator = calculatorOperator.innerText;
    isWaitingForNewNumber = true;
  }
  calculatorOperator.addEventListener("click", handleCalculatorOperatorClick);
}
calculatorOperators.forEach(addOperatorEventListener);
