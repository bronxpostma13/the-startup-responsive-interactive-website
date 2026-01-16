var hamburgerOpen = document.querySelector(".menu-toggle");
var hamburgerClose = document.querySelector(".close-btn");
var navBox = document.querySelector("#mobile-nav-box");

hamburgerOpen.addEventListener("click", function() {
  navBox.classList.add("open");
});

hamburgerClose.addEventListener("click", function() {
  navBox.classList.remove("open");
});