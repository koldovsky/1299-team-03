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
const body = document.querySelector("body");
const orderForm = document.querySelector(".shopping-cart__form")

const promoCodeOpenButton = document.querySelector(
  ".shopping-cart__promo-code-open-button"
);
const totalPromoCode = document.querySelector(
  ".shopping-cart__total-promo-code"
);
const summary = document.querySelector(".shopping-cart__summary");
const removeProductButton = document.querySelector(
  ".shopping-cart__remove-button"
);
const shoppingCart = document.querySelector(".shopping-cart");
const cartContent = document.querySelector(".shopping-cart__content");
const cartEmptyContent = document.querySelector(".shopping-cart__empty");
const unitPrice = 299;
let productCount = 0;

removeProductButton.addEventListener("click", removeCartContent);
promoCodeOpenButton.addEventListener("click", changePromoCodeInputVisibility);
cartCloseButton.addEventListener("click", hideCard);
cartOverlay.addEventListener("click", hideCard);
quantityInput.addEventListener("input", setProducts);
orderButtons.forEach(button => {
  button.addEventListener("click", showCardAndAddProduct);
});
basket.addEventListener("click", showCard);

function setProducts({ target }) {
  const inputCount = +target.value;
  const totalPrice = formatter.format(inputCount * unitPrice);

  productCount = inputCount;
  productPrice.textContent = `$${totalPrice}USD`;
  totalAmount.textContent = `$${totalPrice}USD`;

  renderBasket();
}

function showCard() {
  cart.style.display = "flex";
  body.classList.add("overflow-hidden");
  cartContent.style.display = "flex";
  cartEmptyContent.style.display = "none";
}

function hideCard() {
  cartContainer.style.display = "none";
  body.classList.remove("overflow-hidden");
  cart.style.alignItems = "start"
  const fields = [
    {id: 'name', message: "Name is required."},
    {id: 'email', message: "Email is required."},
    {id: 'phone', message: "Phone is required."}
  ]
  fields.forEach(field => {
    const error = document.getElementById(`${field.id}-error`);
    const input = document.getElementById(field.id);
    input.classList.remove("invalid");
    error.textContent = "";
    error.style.display = "none";
  })
}

function showCardAndAddProduct() {
  cart.style.display = "flex";
  productCount++;

  const totalPrice = formatter.format(productCount * unitPrice);

  body.classList.add("overflow-hidden");
  quantityInput.value = productCount;
  cartContent.style.display = "flex";
  cartEmptyContent.style.display = "none";
  productPrice.textContent = `$${totalPrice}USD`;
  totalAmount.textContent = `$${totalPrice}USD`;

  renderBasket();
}

function changePromoCodeInputVisibility() {
  if (totalPromoCode.style.display === "none") {
    totalPromoCode.style.display = "flex";
    summary.style.flexDirection = "column";
  } else {
    totalPromoCode.style.display = "none";
    summary.style.flexDirection = "row";
  }
}

function removeCartContent() {
  cartContent.style.display = "none";
  cart.style.alignItems = "center";
  cartEmptyContent.style.display = "flex";
  productCount = 0;
  quantityInput.value = productCount;

  renderBasket();
}


orderForm.addEventListener("submit", (event)=> {

  event.preventDefault();

  const fields = [
    {id: 'name', message: "Name is required."},
    {id: 'email', message: "Email is required."},
    {id: 'phone', message: "Phone is required."}
  ]

  let allValid = true;

  fields.forEach(field => {
    const input = document.getElementById(field.id);
    const error = document.getElementById(`${field.id}-error`);

    if (!input.value.trim()) {
      input.classList.add("invalid");
      error.textContent = field.message;
      error.style.display = "block";
      allValid = false;
    } else {
      input.classList.remove("invalid");
      error.textContent = "";
      error.style.display = "none";
    }
  })
})

const inputs = document.querySelectorAll('.shopping-cart__form-input')
inputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.value.trim()) {
      input.classList.remove('invalid');
      const error = document.getElementById(`${input.id}-error`);
      if(error) error.textContent = "";
    }
})
})


document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', () => {
    if (input.value.trim()) {
      input.classList.remove('invalid');
      const errorMessage = document.getElementById(`${input.id}Error`);
      if (errorMessage) errorMessage.textContent = '';
    }
  });
});


function renderBasket() {
  if (typeof productCount === "number") {
    if (productCount > 0) {
      basket.style.visibility = "visible";
    } else {
      basket.style.visibility = "hidden";
    }

    basket.innerHTML = `<div class="basket">
      <span class="basket__counter">${
        productCount > 9 ? "9+" : productCount
      }</span>
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

renderBasket();
