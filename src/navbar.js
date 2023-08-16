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
  searchImage.addEventListener("click", () => toggleSearch());
});
