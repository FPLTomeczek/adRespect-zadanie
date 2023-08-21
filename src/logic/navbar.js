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
  const searchImage = document.getElementById("search-icon");
  const navbarDialog = document.getElementById("navbar-navigation-modal");
  const navbarMobileNavIcon = document.getElementById("navbar-mobile-nav-icon");
  const closeNavbarDialogBtn = document.getElementById(
    "close-navbar-dialog-btn"
  );

  navbarMobileNavIcon.addEventListener("click", () => {
    navbarDialog.show();
    navbarDialog.classList.remove("translate-x-full");
  });

  closeNavbarDialogBtn.addEventListener("click", () => {
    navbarDialog.classList.add("translate-x-full");
    setTimeout(() => {
      navbarDialog.close();
    }, 300);
  });

  searchImage.addEventListener("click", () => toggleSearch());
});
