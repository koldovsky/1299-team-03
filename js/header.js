const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__burger");
const navLinks = document.querySelector(".menu");
const headerOrderButton = document.querySelector(".header__order-button");
const cart = document.querySelector(".shopping-cart-container");
const basket = document.querySelector(".basket-container");

let productCount = 0;

btnSub.addEventListener("click", () => {
  body.classList.toggle("overflow-hidden");
  header.classList.toggle("nav-visible");
});

navLinks.addEventListener("click", () => {
  body.classList.remove("overflow-hidden");
  header.classList.remove("nav-visible");
});

headerOrderButton.addEventListener("click", showCardAndAddProduct);
basket.addEventListener("click", showCard);

function showCard() {
  cart.style.display = "flex";
}

function showCardAndAddProduct() {
  cart.style.display = "flex";
  productCount++;

  renderBasket(productCount);
}

function renderBasket(count) {
  if (productCount > 0) {
    basket.style.visibility = "visible";
  } else {
    basket.style.visibility = "hidden";
  }

  basket.innerHTML = `<div class="basket">
      <span class="basket__counter">${count}</span>
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

renderBasket(productCount);
