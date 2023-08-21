document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const slider = document.querySelector(".slider");

  const sliderCounter = slider.children.length;
  let slidePosition = 0;

  function setArrowVisibility(btn, isDisabled) {
    btn.style.opacity = isDisabled ? "0.1" : "1";
    btn.style.cursor = isDisabled ? "default" : "pointer";

    if (isDisabled) {
      btn.classList.remove("hover:scale-110");
    } else {
      btn.classList.add("hover:scale-110");
    }
  }

  function updateArrowVisibility() {
    setArrowVisibility(nextBtn, slidePosition === -sliderCounter + 1);
    setArrowVisibility(prevBtn, slidePosition === 0);
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
    updateArrowVisibility();
  }

  prevBtn.addEventListener("click", () => slideTranslation("prev"));
  nextBtn.addEventListener("click", () => slideTranslation("next"));
  window.addEventListener("resize", updateSliderWidth);

  updateArrowVisibility();
});
