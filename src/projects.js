const Masonry = require("masonry-layout");

window.onload = () => {
  const grid = document.querySelector(".masonry-grid");

  const msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    gutter: ".gutter-sizer",
    percentPosition: true,
  });
};
