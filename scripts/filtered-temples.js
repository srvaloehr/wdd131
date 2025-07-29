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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Add more temple objects here...

  {
    templeName: "Mesa Arizona",
    location: "Mesa, Arizona",
    dedicated: "1927, October, 26",
    area: 75000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-46561-main.jpg",
  },
  {
    templeName: "Phoenix Arizona",
    location: "Phoenix, Arizona",
    dedicated: "2014, November, 14",
    area: 64870,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/phoenix-arizona-temple/phoenix-arizona-temple-12711-main.jpg",
  },
  {
    templeName: "Billings Montana",
    location: "Billings, Montana",
    dedicated: "1999, November, 20",
    area: 33800,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/billings-montana-temple/billings-montana-temple-8805-main.jpg",
  },
];

createTempleCard(temples);

const home = document.querySelector("#homeLink");
const oldTemples = document.querySelector("#oldLink");
const newTemples = document.querySelector("#newLink");
const largeTemples = document.querySelector("#largeLink");
const smallTemples = document.querySelector("#smallLink");

home.addEventListener("click", () => {
  createTempleCard(temples);
});

oldTemples.addEventListener("click", () => {
  const oldTemples = temples.filter((temple) => {
    yearDedicated = Number(temple.dedicated.slice(0, 4));
    return yearDedicated < 1900;
  });
  createTempleCard(oldTemples);
});

newTemples.addEventListener("click", () => {
  const newTemples = temples.filter((temple) => {
    yearDedicated = Number(temple.dedicated.slice(0, 4));
    return yearDedicated > 2000;
  });
  createTempleCard(newTemples);
});

largeTemples.addEventListener("click", () => {
  const largeTemples = temples.filter((temple) => {
    area = temple.area;
    return area > 90000;
  });
  createTempleCard(largeTemples);
});

smallTemples.addEventListener("click", () => {
  const smallTemples = temples.filter((temple) => {
    area = temple.area;
    return area < 10000;
  });
  createTempleCard(smallTemples);
});

function createTempleCard(filteredTemple) {
  document.querySelector(".grid-content").innerHTML = "";
  filteredTemple.forEach((temple) => {
    const card = document.createElement("section");
    const title = document.createElement("h2");
    const location = document.createElement("p");
    const dedication = document.createElement("p");
    const area = document.createElement("p");
    const image = document.createElement("img");

    title.textContent = temple.templeName;
    location.innerHTML = `Temple location: ${temple.location}`;
    dedication.innerHTML = `Temple Dedication: ${temple.dedicated}`;
    area.innerHTML = `Temple area: ${temple.area}`;

    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", temple.templeName);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "500");
    image.setAttribute("height", "200");

    card.appendChild(title);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(image);

    document.querySelector(".grid-content").appendChild(card);
  });
}