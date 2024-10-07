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