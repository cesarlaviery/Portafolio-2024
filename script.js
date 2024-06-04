// Particles.js

particlesJS.load('particles-js', 'assets/JS/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});

// NavBar

const navBar = document.querySelector(".navbar");
const navBarItems = document.querySelectorAll(".navbar__item")
const navBarLogo = document.querySelector(".navbar__logo");

navBarLogo.addEventListener("click", () => {
    navBar.classList.toggle("navbar--active");

    navBarLogo.classList.toggle("navbar__logo--active")

    navBarItems.forEach(element => {
        element.classList.toggle("navbar__item--active");
    });
});

// Typed.js

const typed = new Typed(".typed", {
    strings: ["Bienvenido.", "Welcome."],
    stringsElement: '#cadenas-texto',
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});

// Start

const translateIcon = document.querySelector(".start-icon");
const start = document.querySelector(".start");

translateIcon.addEventListener("click", () => {

    start.classList.toggle("start__paragraph-opacity");

});