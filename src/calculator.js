"use strict";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__clear");

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

const numberOne = Number(calculatorInputs[5].innerText);
const numberTwo = Number(calculatorInputs[6].innerText);

function handleClick() {
  calculatorOutput.value = subtract(numberOne, numberTwo);
  console.log("clicked");
}

calculatorResult.addEventListener("click", handleClick);

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
    calculatorOutput.value = calculatorInput.innerText;
  }

  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}

calculatorInputs.forEach(addInputEventListener);

// calculatorInputs.forEach(function addInputEventListener(calculatorInput) {
//   console.log("addInputEventListener", calculatorInput.innerText);
// });

// calculatorInputs.forEach(function(calculatorInput) {
//   console.log("addInputEventListener", calculatorInput.innerText);
// });

// calculatorInputs.forEach(calculatorInput => {
//   console.log("addInputEventListener", calculatorInput.innerText);
// });
