import { formatter } from "./utils.js";

const cartContainer = document.querySelector(".shopping-cart-container");
const cartCloseButton = document.querySelector(".shopping-cart__close-button");
const cartOverlay = document.querySelector(".shopping-cart__overlay");
const quantityInput = document.querySelector("#product-quantity");
const productPrice = document.querySelector(".shopping-cart__product-price");
const totalAmount = document.querySelector(".shopping-cart__total-amount");
const orderButtons = document.querySelectorAll(".order-button");
const cart = document.querySelector(".shopping-cart-container");
const basket = document.querySelector(".basket-container");

const unitPrice = 299;
let productCount = 0;

cartCloseButton.addEventListener("click", hideCard);
cartOverlay.addEventListener("click", hideCard);
quantityInput.addEventListener("input", setProducts);
orderButtons.forEach((button) => {
  button.addEventListener("click", showCardAndAddProduct);
});
basket.addEventListener("click", showCard);

function setProducts({ target }) {
  const inputCount = +target.value;
  const totalPrice = formatter.format(inputCount * unitPrice);

  productCount = inputCount;
  productPrice.textContent = `$${totalPrice}USD`;
  totalAmount.textContent = `$${totalPrice}USD`;

  renderBasket(inputCount);
}

function showCard() {
  cart.style.display = "flex";
}

function hideCard() {
  cartContainer.style.display = "none";
}

function showCardAndAddProduct() {
  cart.style.display = "flex";
  productCount++;

  renderBasket(productCount);
}

function renderBasket(count) {
  if (typeof count === "number") {
    if (count > 0) {
      basket.style.visibility = "visible";
    } else {
      basket.style.visibility = "hidden";
    }

    basket.innerHTML = `<div class="basket">
      <span class="basket__counter">${count > 9 ? "9+" : count}</span>
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style="stroke: var(--primary-900)"
      >
        <path
          d="M1 10C1 8.89543 1.89543 8 3 8H21C22.1046 8 23 8.89543 23 10V25C23 27.2091 21.2091 29 19 29H5C2.79086 29 1 27.2091 1 25V10Z"
          stroke-width="2"
        ></path>
        <path
          d="M17 12V6C17 3.23858 14.7614 1 12 1V1C9.23858 1 7 3.23858 7 6V12"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>`;
  }
}

renderBasket(productCount);
