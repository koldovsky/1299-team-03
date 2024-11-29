const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__burger");
const navLinks = document.querySelector(".menu");
const orderButton = document.querySelector(".header__order-button");
const basket = document.querySelector(".basket-container");

btnSub.addEventListener("click", showMenu);

[navLinks, orderButton, basket].forEach(node => {
  node.addEventListener("click", hideMenu);
});

function showMenu() {
  body.classList.add("overflow-hidden");
  header.classList.add("nav-visible");
}

function hideMenu() {
  body.classList.remove("overflow-hidden");
  header.classList.remove("nav-visible");
}
