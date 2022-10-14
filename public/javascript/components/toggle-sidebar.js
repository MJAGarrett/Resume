// Sets up button to toggle nav menu as sidebar or at top of content.
// If JavaScript is disabled, then the button will not show.
// Also checks viewport size as a type of media query.

const body = document.querySelector("body");
const button = document.querySelector(".toggle-nav");
const header = document.querySelector("header");
const navArea = document.querySelector(".nav-area");
const pageLayout = document.querySelector(".content-flex");

button.addEventListener("click", (event) => {
  event.preventDefault();
  body.classList.add("stop-transition")

  // Adjusts classes as necessary for sidebar
  header.classList.toggle("sidebar-is-active");
  pageLayout.classList.toggle("sidebar-is-active");
  navArea.classList.toggle("sidebar-active");

  body.offsetHeight; // Triggers a reflow to prevent transitions triggering on sidebar re-arranging.

  body.classList.remove("stop-transition");
});

function checkForSidebar() {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  if (vw >= 1000) {
    button.style.display = "block";
  } else {
    if ((button.style.display = "block")) {
      button.style.display = "none";
    }
  }
}

window.addEventListener("resize", checkForSidebar);
checkForSidebar();
