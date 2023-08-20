document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const slider = document.querySelector(".slider");

  const sliderCounter = slider.children.length;
  let slidePosition = 0;
  slideArrowVisibility();

  function slideArrowVisibility() {
    if (slidePosition === -sliderCounter + 1) {
      nextBtn.style.opacity = "0.1";
      nextBtn.style.cursor = "default";
      nextBtn.classList.remove("hover:scale-110");
    } else {
      nextBtn.style.opacity = "1";
      nextBtn.style.cursor = "pointer";
      nextBtn.classList.add("hover:scale-110");
    }

    if (slidePosition === 0) {
      prevBtn.style.opacity = "0.1";
      prevBtn.style.cursor = "default";
      prevBtn.classList.remove("hover:scale-110");
    } else {
      prevBtn.style.opacity = "1";
      prevBtn.style.cursor = "pointer";
      prevBtn.classList.add("hover:scale-110");
    }
  }

  function updateSliderWidth() {
    const newTranslateValue = slidePosition * slider.offsetWidth;
    slider.style.transform = `translateX(${newTranslateValue}px)`;
  }

  function slideTranslation(direction) {
    if (direction === "next" && slidePosition > -sliderCounter + 1) {
      slidePosition--;
    } else if (direction === "prev" && slidePosition < 0) {
      slidePosition++;
    }
    updateSliderWidth();
    slideArrowVisibility();
  }

  prevBtn.addEventListener("click", () => slideTranslation("prev"));
  nextBtn.addEventListener("click", () => slideTranslation("next"));

  window.addEventListener("resize", updateSliderWidth);
});
