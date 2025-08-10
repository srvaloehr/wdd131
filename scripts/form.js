const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `${document.lastModified}`;

const products = [
  {
    id: "DC-187",
    name: "Barbell",
    averagerating: 4.5,
  },
  {
    id: "DB-656",
    name: "S&W .357",
    averagerating: 4.7,
  },
  {
    id: "KB-901",
    name: "Kettlebell",
    averagerating: 3.5,
  },
  {
    id: "CB-900",
    name: "Cable Pulley",
    averagerating: 3.9,
  },
  {
    id: "GL-160",
    name: "Canik Mete",
    averagerating: 5.0,
  },
];

const productSelect = document.querySelector("#product-select");

products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

const form = document.querySelector("form");


let reviewsCompleted = Number(localStorage.getItem("reviewsCompleted")) || 0;


form.addEventListener("submit", () => {
  reviewsCompleted++
  localStorage.setItem("reviewsCompleted", reviewsCompleted);
});