// Función para mostrar/ocultar el menú
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Funciones para redirigir a otras páginas
function registrate() {
    window.location.href = "/register"; // Redirige a la página de registro
}

function iniciaSesion() {
    window.location.href = "/user/login"; // Redirige a la página de inicio de sesión
}
