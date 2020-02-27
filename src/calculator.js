import { add, subtract, divide, multiply } from "./math.js";
// import math from "./math.js";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__clear");
const calculatorOperators = document.querySelectorAll(".calculator__operator");

let numberOne = 0;
let numberTwo = 0;

function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  calculatorOutput.value = add(numberOne, numberTwo);
  console.log(
    "handleResultClick",
    numberOne,
    numberTwo,
    calculatorOutput.value
  );
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
    // calculatorOutput.value = calculatorOutput.value + calculatorInput.innerText;
    calculatorOutput.value += calculatorInput.innerText;
    console.log(
      "handleCalculatorInputClick",
      numberOne,
      numberTwo,
      calculatorOutput.value
    );
  }

  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}

calculatorInputs.forEach(addInputEventListener);

function addOperatorEventListener(calculatorOperator) {
  function handleCalculatorOperatorClick() {
    numberOne = Number(calculatorOutput.value);
    clear();
    console.log(
      "handleCalculatorOperatorClick",
      numberOne,
      numberTwo,
      calculatorOutput.value
    );
  }
  calculatorOperator.addEventListener("click", handleCalculatorOperatorClick);
}
calculatorOperators.forEach(addOperatorEventListener);
