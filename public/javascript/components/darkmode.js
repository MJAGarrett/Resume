// Disable the non-js darkmode
// const simpleDarkmode = document.querySelector("#no-js-checkbox");
// simpleDarkmode.style.display = "none";

// Enable JS darkmode
const checkToggle = document.querySelector(".darkmode-toggle");
checkToggle.style.display = "grid";

const checkbox = document.querySelector("#slider");
const page = document.querySelector("body");
const global = document.documentElement;
const body = document.querySelector("body");
const education = document.querySelector(".education");

checkToggle.addEventListener("click", (e) => {
  checkbox.toggleAttribute("checked");

  if (checkbox.hasAttribute("checked")) {
    body.setAttribute("darkmode", "true");
    global.style.setProperty("--body-background", "hsl(210, 30%, 15%)");
    global.style.setProperty("--header-background", "#111");
    global.style.setProperty("--work-background", "hsl(252, 20%, 20%)");
    global.style.setProperty("--projects-background", "hsl(200, 30%, 30%)");
    global.style.setProperty("--font-color", "#ddd");
  } else {
    body.setAttribute("darkmode", "false");
    global.style.setProperty("--body-background", "aliceblue");
    global.style.setProperty("--header-background", "#30d5ff");
    global.style.setProperty("--work-background", "#9993b2");
    global.style.setProperty("--projects-background", "#faf3dd");
    global.style.setProperty("--font-color", "black");
  }
});

checkToggle.addEventListener("keyup", (e) => {
  const inputButtons = ["Enter", "NumpadEnter", "Space"];
  if (inputButtons.includes(e.code)) {
    e.preventDefault();
    checkbox.toggleAttribute("checked");

    if (checkbox.hasAttribute("checked")) {
      body.setAttribute("darkmode", "true");
      global.style.setProperty("--body-background", "hsl(210, 30%, 15%)");
      global.style.setProperty("--header-background", "#111");
      global.style.setProperty("--work-background", "hsl(252, 20%, 20%)");
      global.style.setProperty("--projects-background", "hsl(200, 30%, 30%)");
      global.style.setProperty("--font-color", "#ddd");
    } else {
      body.setAttribute("darkmode", "false");
      global.style.setProperty("--body-background", "aliceblue");
      global.style.setProperty("--header-background", "#30d5ff");
      global.style.setProperty("--work-background", "#9993b2");
      global.style.setProperty("--projects-background", "#faf3dd");
      global.style.setProperty("--font-color", "black");
    }
  }
});
