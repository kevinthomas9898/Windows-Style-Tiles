const hamburger = document.querySelector(".hamburger");
const container = document.querySelector(".container");
const links = document.querySelectorAll(".container a");

hamburger.addEventListener("click", () => {
  container.classList.toggle("open");
  // links.forEach((link) => {
  //   link.classList.toggle("fade");
  // });
});
