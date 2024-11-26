const closeButton = document.querySelector(".shopping-cart__close-button");
const cart = document.querySelector(".shopping-cart-container");

closeButton.addEventListener("click", hideCard);

function hideCard() {
  cart.style.display = "none";
}
