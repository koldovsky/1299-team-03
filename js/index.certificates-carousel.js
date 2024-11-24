const slides = [
  '<div class="certificates__carousel-item"><img src="img/index/certificates/qastamp.png" alt="QA Stamp" class="certificates__carousel-picture-slides"></div>',
  '<div class="certificates__carousel-item"><img src="img/index/certificates/natingred.png" alt="Natural Ingredients" class="certificates__carousel-picture-slides"></div>',
  '<div class="certificates__carousel-item"><img src="img/index/certificates/cruelty.png" alt="Cruelty Free" class="certificates__carousel-picture-slides"></div>',
];

let currIdx = 0;

function renderCarousel() {
  const slidesContainer = document.querySelector(
    ".certificates__carousel-slides"
  );
  slidesContainer.innerHTML = slides[currIdx];
  if (window.matchMedia("(min-width: 993px)").matches) {
    const secondSlideIdx = currIdx >= slides.length ? 0 : currIdx + 1;
    slidesContainer.innerHTML += slides[secondSlideIdx];
    if (window.matchMedia("(max-width: 992px)").matches) {
      const thirdSlideIdx =
        secondSlideIdx >= slides.length ? 0 : secondSlideIdx + 1;
      slidesContainer.innerHTML += slides[thirdSlideIdx];
    }
  }
}

function nextSlide() {
  currIdx = currIdx + 1 >= slides.length ? 0 : currIdx + 1;
  renderCarousel();
}

function prevSlide() {
  currIdx = currIdx - 1 < 0 ? slides.length - 1 : currIdx - 1;
  renderCarousel();
}

// setInterval(nextSlide, 3000);

renderCarousel();

const btnNext = document.querySelector(".next");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".prev");
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", renderCarousel);
