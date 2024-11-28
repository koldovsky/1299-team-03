const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__burger");
const navLinks = document.querySelector(".menu");
const orderButton = document.querySelector(".header__order-button");
const basket = document.querySelector(".basket-container");

btnSub.addEventListener("click", () => {
  body.classList.toggle("overflow-hidden");
  header.classList.toggle("nav-visible");
});

navLinks.addEventListener("click", hideMenu);
orderButton.addEventListener("click", hideMenu);
basket.addEventListener("click", hideMenu);

function hideMenu() {
  body.classList.remove("overflow-hidden");
  header.classList.remove("nav-visible");
}
