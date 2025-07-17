const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const header = document.querySelector("header");
const menuIcon = document.querySelector(".hamburger-menu-icon");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector("nav");

const today = new Date();

currentYear.textContent = today.getFullYear();
lastModified.textContent = document.lastModified;

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("open");
  closeIcon.classList.toggle("show");
});

closeIcon.addEventListener("click", () => {
  nav.classList.toggle("open");
  closeIcon.classList.toggle("show");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) {
    if (header.contains(menuIcon)) {
      header.removeChild(menuIcon);
    }
    if (header.contains(closeIcon)) {
      header.removeChild(closeIcon);
    }
  } else {
    if (!header.contains(menuIcon)) {
      header.appendChild(menuIcon);
    }
    if (!header.contains(closeIcon)) {
      header.appendChild(closeIcon);
    }
  }
});
