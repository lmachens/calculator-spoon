import { calculate } from "./math.js";
import { appendParagraph } from "./elements.js";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__clear");
const calculatorOperators = document.querySelectorAll(".calculator__operator");
const logs = document.querySelector(".logs");

let numberOne = 0;
let numberTwo = 0;
let operator = "";

function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  const result = calculate(numberOne, numberTwo, operator);
  const text = `${numberOne} ${operator} ${numberTwo} = ${result}`;
  appendParagraph(text, logs);
  calculatorOutput.value = result;
}

calculatorResult.addEventListener("click", handleResultClick);

function clear() {
  calculatorOutput.value = "";
}

calculatorClear.addEventListener("click", clear);

// function handleInputClick() {
//   console.log("Handle input click");
// }
// calculatorInputs[0].addEventListener("click", handleInputClick);
// calculatorInputs[1].addEventListener("click", handleInputClick);

function addInputEventListener(calculatorInput) {
  function handleCalculatorInputClick() {
    calculatorOutput.value += calculatorInput.innerText;
  }

  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}

calculatorInputs.forEach(addInputEventListener);

function addOperatorEventListener(calculatorOperator) {
  function handleCalculatorOperatorClick() {
    numberOne = Number(calculatorOutput.value);
    operator = calculatorOperator.innerText;

    clear();
  }
  calculatorOperator.addEventListener("click", handleCalculatorOperatorClick);
}
calculatorOperators.forEach(addOperatorEventListener);
