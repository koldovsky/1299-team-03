const cartContainer = document.querySelector(".shopping-cart-container");
const cartCloseButton = document.querySelector(".shopping-cart__close-button");
const cartOverlay = document.querySelector(".shopping-cart__overlay");

cartCloseButton.addEventListener("click", hideCard);
cartOverlay.addEventListener("click", hideCard);

function hideCard() {
  cartContainer.style.display = "none";
}
