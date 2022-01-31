const body = document.body;
const calcContainer = document.createElement('div');
const calculationField = document.createElement('input');
const buttonContainer = document.createElement('div');
const oneButton = document.createElement('button');
const twoButton = document.createElement('button');
const threeButton = document.createElement('button');
const fourButton = document.createElement('button');
const fiveButton = document.createElement('button');
const sixButton = document.createElement('button');
const sevenButton = document.createElement('button');
const eightButton = document.createElement('button');
const nineButton = document.createElement('button');
const zeroButton = document.createElement('button');
const periodButton = document.createElement('button');
const divideButton = document.createElement('button');
const multiplyButton = document.createElement('button');
const subtractButton = document.createElement('button');
const addButton = document.createElement('button');
const clearButton = document.createElement('button');
const negativeButton = document.createElement('button');
const percentButton = document.createElement('button');
const equalButton = document.createElement('button');
let firstOperand, secondOperand;

calcContainer.classList.add('calc-container');
buttonContainer.classList.add('button-container');
oneButton.textContent = '1';
twoButton.textContent = '2';
threeButton.textContent = '3';
fourButton.textContent = '4';
fiveButton.textContent = '5';
sixButton.textContent = '6';
sevenButton.textContent = '7';
eightButton.textContent = '8';
nineButton.textContent = '9';
zeroButton.textContent = '0';
zeroButton.classList.add('zero-button');
periodButton.textContent = '.';
divideButton.textContent = '÷';
multiplyButton.textContent = '*';
subtractButton.textContent = '-';
addButton.textContent = '+';
clearButton.textContent = 'C';
negativeButton.textContent = '+/-';
percentButton.textContent = '%';
equalButton.textContent = '=';

buttonContainer.append(
  clearButton,
  negativeButton,
  percentButton,
  divideButton,
  sevenButton,
  eightButton,
  nineButton,
  multiplyButton,
  fourButton,
  fiveButton,
  sixButton,
  subtractButton,
  oneButton,
  twoButton,
  threeButton,
  addButton,
  zeroButton,
  periodButton,
  equalButton
);
calcContainer.append(calculationField, buttonContainer);
body.append(calcContainer);

function getFirstOperand() {
  firstOperand = calculationField.value;
  calculationField.value = '';
}

function divideNumbers(secondOperand, result) {
  secondOperand = calculationField.value;
  result = parseFloat(firstOperand) / parseFloat(secondOperand);
  calculationField.value = result;
}

function multiplyNumbers(secondOperand, result) {
  secondOperand = calculationField.value;
  result = parseFloat(firstOperand) * parseFloat(secondOperand);
  calculationField.value = result;
}

function subtractNumbers(secondOperand, result) {
  secondOperand = calculationField.value;
  result = parseFloat(firstOperand) - parseFloat(secondOperand);
  calculationField.value = result;
}

function addNumbers(secondOperand, result) {
  secondOperand = calculationField.value;
  result = parseFloat(firstOperand) + parseFloat(secondOperand);
  calculationField.value = result;
}

clearButton.addEventListener('click', () => {
  calculationField.value = '';
  equalButton.removeEventListener('click', divideNumbers);
  equalButton.removeEventListener('click', multiplyNumbers);
  equalButton.removeEventListener('click', subtractNumbers);
  equalButton.removeEventListener('click', addNumbers);
});

negativeButton.addEventListener('click', (num, newVal) => {
  num = calculationField.value;
  newVal = -num;
  calculationField.value = newVal;
});

percentButton.addEventListener('click', (num, newVal) => {
  num = calculationField.value;
  newVal = num / 100;
  calculationField.value = newVal;
});

divideButton.addEventListener('click', () => {
  getFirstOperand();
  equalButton.addEventListener('click', divideNumbers);
});

multiplyButton.addEventListener('click', () => {
  getFirstOperand();
  equalButton.addEventListener('click', multiplyNumbers);
});

subtractButton.addEventListener('click', () => {
  getFirstOperand();
  equalButton.addEventListener('click', subtractNumbers);
});

addButton.addEventListener('click', () => {
  getFirstOperand();
  equalButton.addEventListener('click', addNumbers);
});

oneButton.addEventListener('click', () => {
  calculationField.value += 1;
});

twoButton.addEventListener('click', () => {
  calculationField.value += 2;
});

threeButton.addEventListener('click', () => {
  calculationField.value += 3;
});

fourButton.addEventListener('click', () => {
  calculationField.value += 4;
});

fiveButton.addEventListener('click', () => {
  calculationField.value += 5;
});

sixButton.addEventListener('click', () => {
  calculationField.value += 6;
});

sevenButton.addEventListener('click', () => {
  calculationField.value += 7;
});

eightButton.addEventListener('click', () => {
  calculationField.value += 8;
});

nineButton.addEventListener('click', () => {
  calculationField.value += 9;
});

zeroButton.addEventListener('click', () => {
  calculationField.value += 0;
});

periodButton.addEventListener('click', () => {
  calculationField.value += '.';
});
