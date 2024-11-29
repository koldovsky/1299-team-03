const response = await fetch('api/products-box.json');
const products = await response.json();

let currentIndex = 0;

const btnNext = document.querySelector(".products__carousel-arrow-right-block");
const btnPrev = document.querySelector(".products__carousel-arrow-left-block");

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

function nextSlide() {
  currentIndex = currentIndex + 1 >= products.length ? 0 : currentIndex + 1;
  renderProduct();
}

function prevSlide() {
  currentIndex = currentIndex - 1 < 0 ? products.length - 1 : currentIndex - 1;
  renderProduct();
}

function renderProduct() {
  const currentProduct = products[currentIndex];
  const container = document.querySelector(
    ".products-carousel__slides-container"
  );

  const usageHtml = currentProduct.usage
    .map((instruction) => `<li>${instruction}</li>`)
    .join("");

  container.innerHTML = `
   <div class="products-carousel__slide">
      <div class="products-carousel__slide-image">
        <img
          src="${currentProduct.image}"
          alt="${currentProduct.name}"
          class="products-carousel__image"
        />
      </div>
      <div class="products-carousel__slide-text">
        <h3 class="products-carousel__slide-text-title">${currentProduct.title}</h3>
        <h4 class="products-carousel__slide-text-product-name">
          ${currentProduct.name}
        </h4>
        <p class="products-carousel__slide-text-product-description">
          ${currentProduct.description}
        </p>
        <div class="products-carousel__characteristics">
          <div class="products-carousel__characteristics-block">
            <h5 class="products-carousel__characteristic-name">Skin type</h5>
            <p class="products-carousel__characteristic-description">
              ${currentProduct.skin}
            </p>
          </div>
          <div class="products-carousel__characteristics-block">
            <h5 class="products-carousel__characteristic-name">Application</h5>
            <p class="products-carousel__characteristic-description">
              ${currentProduct.application}
            </p>
          </div>
          <div class="products-carousel__characteristics-block">
            <h5 class="products-carousel__characteristic-name">Size</h5>
            <p class="products-carousel__characteristic-description">
              ${currentProduct.size}
            </p>
          </div>
          <div class="products-carousel__characteristics-block">
            <h5 class="products-carousel__characteristic-name">Concerns</h5>
            <p class="products-carousel__characteristic-description">
              ${currentProduct.concerns}
            </p>
          </div>
        </div>
        <div class="products-carousel__accordion">
          <details class="products-carousel__accordion-content">
            <summary class="products-carousel__accordion-summary">
              Ingredients
            </summary>
            <p class="products-carousel__accordion-ingridients">
              ${currentProduct.ingredients}
            </p>
          </details>
          <details class="products-carousel__accordion-content">
            <summary class="products-carousel__accordion-summary">
              How to use
            </summary>
            <ol class="products-carousel__accordion-instructions">
              ${usageHtml}
            </ol>
          </details>
        </div>
      </div>
    </div>
`;
}

renderProduct(currentIndex);


