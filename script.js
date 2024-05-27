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