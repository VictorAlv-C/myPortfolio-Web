/* ======== Mostrar y Ocultar Menu */

const navMenu = document.getElementById("nav-menu"),
            navToggle = document.getElementById("nav-toggle"),
            navClose = document.getElementById("nav-close"),
            navLink = document.querySelectorAll(".nav__link");

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

const accionLink = () => { navMenu.classList.remove('show-menu') }

navLink.forEach(e => e.addEventListener('click', accionLink));

