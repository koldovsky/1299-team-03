const cartContainer = document.querySelector(".shopping-cart-container");
const cartCloseButton = document.querySelector(".shopping-cart__close-button");

cartCloseButton.addEventListener("click", hideCard);

function hideCard() {
  cartContainer.style.display = "none";
}
