const Masonry = require("masonry-layout");

let msnry;
window.onload = () => {
  const grid = document.querySelector(".masonry-grid");

  msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    gutter: ".gutter-sizer",
    percentPosition: true,
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const bgFadingGradient = document.querySelector("#bg-fading-gradient");
  const expandImagesBtn = document.querySelector(".projects-expand-btn");
  let gridItems = document.querySelectorAll(".masonry-grid .grid-item");
  let imageModalIndex = 0;

  function addImages() {
    const hiddenImages = document.getElementsByClassName(
      "grid-item cursor-pointer hidden"
    );
    console.log(hiddenImages);
    [...hiddenImages].forEach((image) => image.classList.remove("hidden"));
    msnry.layout();
    updateGridItemsAndListeners();
    expandImagesBtn.remove();
    bgFadingGradient.remove();
  }

  function updateGridItemsAndListeners() {
    gridItems = document.querySelectorAll(".masonry-grid .grid-item");
    const gridItemsImages = document.querySelectorAll(
      ".masonry-grid .grid-item img"
    );

    gridItems.forEach((gridItem, key) =>
      gridItem.addEventListener("click", () => {
        updateDialogImageSource(gridItemsImages[key].getAttribute("src"), key);
      })
    );
  }

  function updateDialogImageSource(src, index) {
    const dialogImage = document.getElementById("dialog-image");
    const dialog = document.getElementById("image-gallery-modal");
    dialogImage.setAttribute("src", src);
    imageModalIndex = index;
    dialog.show();
  }

  function changeImage(direction) {
    const gridItemsImages = document.querySelectorAll(
      ".masonry-grid .grid-item img"
    );

    if (direction === "next") {
      imageModalIndex =
        imageModalIndex === gridItems.length - 1 ? 0 : imageModalIndex + 1;
    } else if (direction === "prev") {
      imageModalIndex =
        imageModalIndex === 0 ? gridItems.length - 1 : imageModalIndex - 1;
    }

    const dialogImage = document.getElementById("dialog-image");
    dialogImage.classList.remove("animate-fadeIn");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        dialogImage.classList.add("animate-fadeIn");
        dialogImage.setAttribute(
          "src",
          gridItemsImages[imageModalIndex].getAttribute("src")
        );
      });
    });
  }

  expandImagesBtn.addEventListener("click", addImages);
  updateGridItemsAndListeners();

  document
    .getElementById("image-gallery-next-btn")
    .addEventListener("click", () => changeImage("next"));
  document
    .getElementById("image-gallery-prev-btn")
    .addEventListener("click", () => changeImage("prev"));
});
