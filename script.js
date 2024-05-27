const navBarList = document.querySelector(".navbar__list");
const navBarItems = document.querySelectorAll(".navbar__item")
const navBarIcon = document.querySelector(".navbar__icon");

navBarIcon.addEventListener("click", () => {
    navBarList.classList.toggle("navbar__list--active");
    
    navBarItems.forEach(element => {
        element.classList.toggle("navbar__item--active");
    });
});