const carousel = document.querySelector(".skin__carousel-inner");
const picSliderList = document.querySelector(".skin__carousel-container");

const prevButton = document.querySelector(".carousel-control-prev");
const nextButton = document.querySelector(".carousel-control-next");

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

function nextSlide() {
  picSliderList.appendChild(picSliderList.firstElementChild);
}

function prevSlide() {
  picSliderList.prepend(picSliderList.lastElementChild);
}
