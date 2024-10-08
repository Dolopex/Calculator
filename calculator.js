document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstValue = '';
    let secondValue = '';

    // Manejador de clics de los botones
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.dataset.action;
            const value = this.innerText;

            if (this.classList.contains('number')) {
                handleNumber(value);
            } else if (action) {
                handleOperator(action);
            }
        });
    });

    // Manejador de teclas del teclado
    window.addEventListener('keydown', function(e) {
        const key = e.key;

        if (/\d/.test(key)) {
            handleNumber(key);
        } else if (key === '.') {
            handleNumber('.');
        } else if (key === '+' || key === '-') {
            handleOperator(key);
        } else if (key === '*' || key === '/') {
            handleOperator(key === '*' ? 'multiply' : 'divide');
        } else if (key === 'Enter') {
            handleOperator('equals');
        } else if (key === 'Backspace') {
            handleOperator('delete');
        }
    });

    // Manejo de números
    function handleNumber(num) {
        if (operator === '') {
            firstValue += num;
            display.innerText = firstValue;
        } else {
            secondValue += num;
            display.innerText = secondValue;
        }
    }

    // Manejo de operadores
    function handleOperator(action) {
        switch (action) {
            case 'add':
                operator = '+';
                break;
            case 'subtract':
                operator = '-';
                break;
            case 'multiply':
                operator = '*';
                break;
            case 'divide':
                operator = '/';
                break;
            case 'equals':
                calculate();
                break;
            case 'clear':
                reset();
                break;
            case 'delete':
                deleteLast();
                break;
        }
    }

    // Cálculo de la operación
    function calculate() {
        let result;
        const first = parseFloat(firstValue);
        const second = parseFloat(secondValue);

        switch (operator) {
            case '+':
                result = first + second;
                break;
            case '-':
                result = first - second;
                break;
            case '*':
                result = first * second;
                break;
            case '/':
                result = first / second;
                break;
            default:
                return;
        }

        display.innerText = result;
        firstValue = result.toString();
        secondValue = '';
        operator = '';
    }

    // Resetear la calculadora
    function reset() {
        firstValue = '';
        secondValue = '';
        operator = '';
        display.innerText = '0';
    }

    // Borrar el último carácter
    function deleteLast() {
        if (operator === '') {
            firstValue = firstValue.slice(0, -1);
            display.innerText = firstValue || '0';
        } else {
            secondValue = secondValue.slice(0, -1);
            display.innerText = secondValue || '0';
        }
    }
});