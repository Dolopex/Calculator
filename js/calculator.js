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
            display.innerText = firstValue + ' ' + operator + ' ' + secondValue;  // Mostrar el operador y segundo número
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
                return;  // No mostramos el operador en caso de que sea el botón igual
            case 'clear':
                reset();
                return;  // No mostramos nada en caso de reset
            case 'delete':
                deleteLast();
                return;  // No mostramos nada en caso de delete
        }

        // Mostrar el operador en pantalla cuando se selecciona
        display.innerText = firstValue + ' ' + operator;
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

// Selecciona el ícono de menú y el menú de opciones
const menuIcon = document.querySelector('.fa-bars');
const menu = document.getElementById('menu');

// Añade un evento de clic al ícono del menú
menuIcon.addEventListener('click', () => {
    // Alterna la clase 'active' para mostrar/ocultar el menú
    menu.classList.toggle('active');
});

// Función para cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target); // Verifica si el clic está dentro del menú
    const isClickOnIcon = menuIcon.contains(event.target); // Verifica si el clic está en el ícono

    if (!isClickInsideMenu && !isClickOnIcon) {
        // Si el clic es fuera del menú y fuera del ícono, oculta el menú
        menu.classList.remove('active');
    }
});

// Esperar a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Usar el método scrollTo para desplazarse hacia el fondo de la página
    window.scrollTo({
        top: document.body.scrollHeight, // Altura total del documento
        behavior: 'smooth'  // Desplazamiento suave
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');

    // Verificar el estado almacenado en localStorage al cargar la página
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    if (isDarkMode) {
        // Aplicar el modo oscuro si está guardado como habilitado
        document.body.classList.add('dark-theme'); // Agregar la clase dark-theme
        themeToggle.checked = true;                // Marcar el checkbox
    }

    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-theme'); // Activar tema oscuro
            localStorage.setItem('darkMode', 'enabled'); // Guardar estado en localStorage
        } else {
            document.body.classList.remove('dark-theme'); // Desactivar tema oscuro
            localStorage.setItem('darkMode', 'disabled'); // Guardar estado en localStorage
        }
    });
});



