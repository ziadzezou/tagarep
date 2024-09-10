const actions = document.getElementById("actions");

const menu = document .getElementById("menu");



menu.addEventListener("click", () => { hundlemenu(); });



function hundlemenu() {
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}











