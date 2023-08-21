import imagesLoaded from "imagesloaded";

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
  let lastGridItem = gridItems[gridItems.length - 1];

  let gridItemsImages = document.querySelectorAll(
    ".masonry-grid .grid-item img"
  );

  const imagesSrc = [
    "./b67292cddfe4f6f6ed74.png",
    "./fa6b2eb56f2f03e2266c.png",
    "./04069d0360d141be133c.png",
    "./3a195e8bee3cb7d29fb1.png",
    "./b3c7f468a82f7f88db0e.png",
  ];

  function addImages() {
    imagesSrc.forEach((imgSrc) => {
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item cursor-pointer";
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = "projects-photo";
      img.classList.add("w-full");

      gridItem.appendChild(img);
      lastGridItem.parentNode.insertBefore(gridItem, lastGridItem.nextSibling);
      console.log(lastGridItem);
      lastGridItem = gridItem;
      console.log(lastGridItem);
      msnry.appended(gridItem);
    });
    imagesLoaded(lastGridItem.parentNode, () => {
      msnry.layout();
    });

    gridItems = document.querySelectorAll(".masonry-grid .grid-item");
    gridItems.forEach((gridItem, key) =>
      gridItem.addEventListener("click", () => {
        dialogImage.setAttribute(
          "src",
          gridItemsImages[key].getAttribute("src")
        );
        imageModalIndex = key;
        dialog.show();
      })
    );
    gridItemsImages = document.querySelectorAll(".masonry-grid .grid-item img");
    expandImagesBtn.remove();
    bgFadingGradient.remove();
  }

  const dialog = document.getElementById("image-gallery-modal");
  const dialogImage = document.getElementById("dialog-image");

  console.log(gridItems[0]);

  let imageModalIndex = 0;

  expandImagesBtn.addEventListener("click", addImages);

  gridItems.forEach((gridItem, key) =>
    gridItem.addEventListener("click", () => {
      dialogImage.setAttribute("src", gridItemsImages[key].getAttribute("src"));
      imageModalIndex = key;
      dialog.show();
    })
  );

  const imageGalleryPrevBtn = document.getElementById("image-gallery-prev-btn");
  const imageGalleryNextBtn = document.getElementById("image-gallery-next-btn");

  console.log(gridItemsImages);

  imageGalleryNextBtn.addEventListener("click", () => {
    if (imageModalIndex === gridItems.length - 1) {
      imageModalIndex = 0;
    } else {
      imageModalIndex++;
    }
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
    dialogImage.setAttribute(
      "src",
      gridItemsImages[imageModalIndex].getAttribute("src")
    );
  });

  imageGalleryPrevBtn.addEventListener("click", () => {
    if (imageModalIndex === 0) {
      imageModalIndex = gridItems.length - 1;
    } else {
      imageModalIndex--;
    }
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
    dialogImage.setAttribute(
      "src",
      gridItemsImages[imageModalIndex].getAttribute("src")
    );
  });
});
