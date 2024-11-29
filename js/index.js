function init() {
  import("./header.js");
  import("./index.certificates-carousel.js");
  import("./index.special-order.js");
  import("./index.partner.js");
  import("./index.products-box-carousel-cards.js");
<<<<<<< HEAD
  import("./global.shopping-cart.js");
  import("./utils.js");
=======
  import("./index.ingredients.js");
>>>>>>> f30a902 (Fixed code ingredients.css)
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
