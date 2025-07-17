const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const header = document.querySelector("header");
const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const navTag = document.querySelector("nav");
const xmark = document.querySelector(".close-icon");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `${document.lastModified}`;

hamburgerMenuIcon.addEventListener("click", () => {
  navTag.classList.toggle("open");
  xmark.classList.toggle("show");
});

xmark.addEventListener("click", () => {
  navTag.classList.toggle("open");
  xmark.classList.toggle("show");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) {
      header.removeChild(hamburgerMenuIcon);
      header.removeChild(xmark)
  } else {
      header.appendChild(hamburgerMenuIcon);
      header.appendChild(xmark)
  }
});