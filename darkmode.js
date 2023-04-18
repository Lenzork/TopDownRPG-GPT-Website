const darkModeToggle = document.querySelector("#dark-mode-toggle");
const body = document.body;
const navbar = document.querySelector(".navbar");
const featuresSection = document.querySelector(".features");
const versionContainers = document.querySelectorAll(".version-container");

// check if the OS is in dark mode
const isOsDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  navbar.classList.toggle("navbar-dark");
  navbar.classList.toggle("bg-dark");
  featuresSection.classList.toggle("bg-secondary");
  featuresSection.classList.toggle("text-light");
  versionContainers.forEach(container => {
    container.classList.toggle("version-container-dark");
  });
  if (localStorage.getItem("mode") === "light") {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

// if OS is in dark mode, switch to dark mode on page load
if (isOsDarkMode) {
  darkModeToggle.click();
} else if (localStorage.getItem("mode") === "dark") {
  darkModeToggle.click();
}
