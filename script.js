let result = document.getElementById('result');
let currentValue = '';

function appendValue(value) {
  currentValue += value;
  result.value = currentValue;
}

function appendOperator(operator) {
  if (currentValue !== '') {
    if (
      currentValue.slice(-1) === '+' ||
      currentValue.slice(-1) === '-' ||
      currentValue.slice(-1) === '*' ||
      currentValue.slice(-1) === '/' ||
      currentValue.slice(-1) === '('
    ) {
      currentValue = currentValue.slice(0, -1);
    }
    currentValue += operator;
    result.value = currentValue;
  }
}

function clearResult() {
  currentValue = '';
  result.value = '';
}

function deleteLastChar() {
  currentValue = currentValue.slice(0, -1);
  result.value = currentValue;
}

function calculate() {
  if (currentValue !== '') {
    if (
      currentValue.slice(-1) === '+' ||
      currentValue.slice(-1) === '-' ||
      currentValue.slice(-1) === '*' ||
      currentValue.slice(-1) === '/' ||
      currentValue.slice(-1) === '('
    ) {
      currentValue = currentValue.slice(0, -1);
    }
    try {
      currentValue = eval(currentValue);
      result.value = currentValue;
    } catch (error) {
      result.value = 'Error';
    }
  }
}

function calculateEquation() {
  if (currentValue !== '') {
    try {
      const equationResult = math.evaluate(currentValue);
      currentValue = equationResult.toString();
      result.value = currentValue;
    } catch (error) {
      result.value = 'Error';
    }
  }
}

function solveAlgebra() {
  if (currentValue !== '') {
    try {
      const algebraResult = math.simplify(currentValue);
      currentValue = algebraResult.toString();
      result.value = currentValue;
    } catch (error) {
      result.value = 'Error';
    }
  }
}
