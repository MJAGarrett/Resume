// Sets up button to toggle nav menu as sidebar or at top of content.
const button = document.querySelector(".toggle-nav");

// Adjusts classes as necessary for sidebar
button.addEventListener("click", (event) => {
  event.preventDefault();
  const header = document.querySelector("header");
  const navArea = document.querySelector(".nav-area");
  const pageLayout = document.querySelector(".content-flex");

  header.classList.toggle("sidebar-is-active");
  pageLayout.classList.toggle("sidebar-is-active");
  navArea.classList.toggle("sidebar-active");
});
