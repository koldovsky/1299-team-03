const basket = document.querySelector(".basket");
const cart = document.querySelector(".shopping-cart-container");
const cartContainer = document.querySelector(".shopping-cart-container");
const cartCloseButton = document.querySelector(".shopping-cart__close-button");

basket.addEventListener("click", () => {
  cart.style.display = "flex";
});

cartContainer.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    cart.style.display = "none";
  }
});

cartCloseButton.addEventListener("click", () => {
  cart.style.display = "none";
});
