function toggleSearch() {
  const input = document.getElementById("searchInput");

  if (input.classList.contains("invisible")) {
    input.classList.remove("invisible", "w-0");
    input.classList.add("w-[200px]");
    setTimeout(() => {
      input.focus();
    }, 100);
  } else {
    input.classList.add("invisible", "w-0");
    input.classList.remove("w-[200px]");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const searchImage = document.querySelector("#search-icon");
  // const slider = document.querySelector(".slider");
  // const prevBtn = document.querySelector(".prev");
  // const nextBtn = document.querySelector(".next");
  // let currentPosition = 0;
  // const step = 600;

  // function moveSlider(direction) {
  //   if (direction === "prev") {
  //     currentPosition += step;
  //   } else {
  //     currentPosition -= step;
  //   }
  //   slider.style.left = currentPosition + "px";
  // }

  searchImage.addEventListener("click", () => toggleSearch());

  // prevBtn.addEventListener("click", () => {
  //   console.log("prev");
  //   moveSlider("prev");
  // });
  // nextBtn.addEventListener("click", () => {
  //   console.log("next");

  //   moveSlider("next");
  // });
});
