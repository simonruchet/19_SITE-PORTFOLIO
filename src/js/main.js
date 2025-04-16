var projects = document.querySelector(".header-projects");
var svg = document.querySelector(".header-svg");
function openSvg() {
  svg.classList.toggle("is-open");
  projects.classList.toggle("is-active");
}

projects.addEventListener("click", openSvg);
