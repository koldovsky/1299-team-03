const products = [
  {
    id: "11",
    title: "FOR FACE AND BODY",
    image:
      "img/index/products-box-carousel/index.products-box-carousel-cream.png",
    name: "Azulene Moisture Cream",
    description:
      "This soothing delicately fragranced cream is enriched with Vitamin E and other natural ingredients to hydrate your Skin and help alleviate dryness and irritation.",
    skin: "all types",
    application: "morning and night",
    size: "3.38 oz/100 ml",
    concerns: "wrinkles and lack of moisture",
    ingredients:
      "Deionized water, clove extract, sodium hyaluronate, hexylene glycol, glucose, fructose, sucrose, hydrolyzed collagen, glycerin, urea, squalene, carbomer, hydrolyzed elastin, calendula oil, isopropyl myristate, azulene paraamine, trimethyl paraben, dermavitamin complex: vitamins A and E (retinyl palmitate and tocopheryl acetate",
    usage: [
      "Cleanse the skin with a Shine Mild Facial Cleanser. Rinse with warm water.",
      "Pat the skin dry with a soft towel.",
      "Take a pea size amount of Azulene Moisture Cream and apply it to skin. Gently massage in an upward and outward motion.",
      "Use morning and night for maximum benefit.",
    ],
  },
  {
    id: "12",
    title: "FOR FACE",
    image:
      "img/index/products-box-carousel/index.products-box-carousel-cleanser.png",
    name: "Mild Facial Cleanser",
    description:
      " This is an effective and gentle oil-free gel cleanser that purifies and refreshes all skin types, removing excess dirt and oil, leaving skin soft, clean and hydrated",
    skin: "all types",
    application: "in the morning",
    size: "3.38 oz/100 ml",
    concerns: "morning swelling",
    ingredients:
      "Aqua, Capryloy/Caproyl Methyl Glucamide, Lauroyl/Myristoyl Methyl Glucamide, Sodium Lauryl Ether Sulphate, Cocamidopropyl Betaine, Glycerine, Beta-Glucan, Niacinamide, Lactic Acid, Glycolic Acid, Hydrolyzed Collagen, Snail Secretion Filtrate, Fragrance, Phenoxyethanol, Ethylhexyl Glycerine",
    usage: [
      "Wet your face with warm water, then squeeze a dollop of Shine Mild Facial Cleanser into your hands.",
      "Lather between your palms, then place your hands onto your face and begin to massage the cleanser into your skin.",
      "Massage the cleanser for 45 seconds to a minute, then rinse with warm water.",
      "Pat your skin dry with a clean towel.",
      "Finish by applying your favorite Shine moisturizer.",
    ],
  },
  {
    id: "13",
    title: "FOR FACE",
    image:
      "img/index/products-box-carousel/index.products-box-carousel-mask.png",
    name: "Bergamot Extract Face Mask",
    description:
      "The mask helps promote skin elasticity, reduce the sepearance of pores, and restore hydration fon a Tefreshed and glowing complexion.",
    skin: "all types",
    application: "daily",
    size: "1.69 oz/50 ml",
    concerns: " fine lines and wrinkles",
    ingredients:
      "Aqua (Water), Kaolin, Glyceryl Stearate SE, Cetearyl Alcohol, Glycerin *, Phenoxyethanol, Xanthan Gum, Ethylhexylglycerin, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, Citrus Nobilis (Mandarin Orange) Peel Oil, Argania (Argan) Spinosa Kernel **, Citric Acid, Citrus Limon (Lemon) Peel Oil, Cymbopogon Schoenanthus Oil, Eucalyptus Globulus Leaf Oil, Sodium Ascorbyl Phosphate, Carica Papaya (Papaya) Fruit Extract, Phyllanthus Emblica Extract, Potassium Sorbate Sodium Benzoate, Citral , Limonene , Linalool ** Vegetable Origin, Naturally derived from Essential Oils, * Organic. * Natural * Naturally derived from essential oils.",
    usage: [
      "Wash your face with a gentle cleanser and warm water to remove dirt and oils.",
      "Apply a thin layer of the face mask to your face and neck. Avoid direct contact with your eyes.",
      "Leave on your face mask for 10-15 minutes.",
      "Rinse off the face mask with warm water and a wash cloth.",
      "Pat dry your skin with a clean towel.",
      "Apply a moisturizer or other face cream to finish.",
    ],
  },
];

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


