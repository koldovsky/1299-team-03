const btn = document.querySelector(".accordion__icon");
const termText = document.querySelector(".contacts__term-text");

const buttons = document.querySelectorAll(".accordion__icon");
const termTexts = document.querySelectorAll(".contacts__term-text");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const termText = termTexts[index]; // Знаходимо відповідний текстовий блок за індексом
    if (termText.style.display === "block") {
      termText.style.display = "none";
    } else {
      termText.style.display = "block";
    }
  });
});
