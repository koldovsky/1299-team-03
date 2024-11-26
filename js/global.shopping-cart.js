const cartContainer = document.querySelector(".shopping-cart-container");
const cartCloseButton = document.querySelector(".shopping-cart__close-button");
const cartOverlay = document.querySelector(".shopping-cart__overlay");
const quantityInput = document.querySelector("#product-quantity");
const totalAmount = document.querySelector(".shopping-cart__total-amount");
const unitPrice = 299;


cartCloseButton.addEventListener("click", hideCard);
cartOverlay.addEventListener("click", hideCard);

function hideCard() {
  cartContainer.style.display = "none";
}

quantityInput.addEventListener("input", () => {
  const quantity = parseInt(quantityInput.value, 10);
  const total = unitPrice * quantity;
  totalAmount.textContent = `$${total.toFixed(2)}`;
});