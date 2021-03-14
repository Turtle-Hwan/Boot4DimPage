const menuBtn = document.querySelector(".menu_btn");
const menu = document.querySelector(".menu");

// function makeMenu() {
//     const menuPage = document.createElement("div");
//     menuPage.className = 'menu_page';
//     menuPage.innerHTML = 't';
//     document.body.appendChild(menuPage);
// }

// function deleteMenu() {
//     document.
// }

function menuOpen() {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
}

function init() {
    menuBtn.addEventListener("click", menuOpen);
}
init();