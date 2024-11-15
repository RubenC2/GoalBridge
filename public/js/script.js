//const { createUser, getUserByEmail } = require('../models/users.model');


function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}


function registrate() {
    window.location.href = "/register"; 
}

function iniciaSesion() {
    window.location.href = "/auth/login";
}

function cerrarSesion() {
    window.location.href = "/auth/logout"; 
}