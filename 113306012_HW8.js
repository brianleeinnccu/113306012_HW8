function updateButtonText() {
    const operator = document.getElementById('operator').value;
    const button = document.getElementById('calculateButton');
    
    switch (operator) {
        case '+':
            button.textContent = 'ADD';
            break;
        case '-':
            button.textContent = 'SUBTRACT';
            break;
        case '*':
            button.textContent = 'MULTIPLY';
            break;
        case '/':
            button.textContent = 'DIVIDE';
            break;
        default:
            button.textContent = 'CALCULATE';
    }
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultDisplay = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Result = Invalid input, please enter numbers.";
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            if (num2 === 0) {
                resultDisplay.textContent = "Result = Cannot divide by zero.";
                return;
            }
            result = divide(num1, num2);
            break;
        default:
            resultDisplay.textContent = "Result = Invalid operation.";
            return;
    }

    resultDisplay.textContent = `Result = ${result.toFixed(2)}`;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}