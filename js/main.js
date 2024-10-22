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