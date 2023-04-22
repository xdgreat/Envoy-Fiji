import { Categories } from "./data.js";

const maginfyingGlass = document.getElementById("glass");
const link = document.getElementById("link");
const learn = document.getElementById("learn");
const explore = document.getElementById("explore");

explore.addEventListener("mouseenter", () => {
  maginfyingGlass.classList.add("fa-shake");
});

explore.addEventListener("mouseleave", () => {
  maginfyingGlass.classList.remove("fa-shake");
});

learn.addEventListener("mouseenter", () => {
  link.classList.add("fa-shake");
});

learn.addEventListener("mouseleave", () => {
  link.classList.remove("fa-shake");
});

// let i = -1;

// window.setInterval(() => {
//   if (i < Categories.Electronics.length - 1) {
//   } else {
//     i = -1;
//   }
//   const activePicture = document.getElementById("hero");
//   i++;
//   activePicture.style.backgroundImage = Categories.Electronics[i].image;
//   console.log(Categories.Electronics.length - 1, i);
// }, 2000);

const t = document
  .getElementById("hero-section")
  .addEventListener("click", (e) => {
    console.log(e.offsetX, e.offsetY);
  });

