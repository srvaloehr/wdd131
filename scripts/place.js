let temp = document.querySelector("#temperature");
let cond = document.querySelector("#condition");
let wind = document.querySelector("#wind");
let windChill = document.querySelector("#windChill");

let tempF = 104; 
let condition = "Sunny";
let windSpeed = 5; 

temp.textContent = tempF + " °F";
cond.textContent = condition;
wind.textContent = windSpeed + " mph";

if (tempF <= 50 && windSpeed > 3) {
  let chill = 35.74 + 0.6215 * tempF - 35.75 * (windSpeed ** 0.16) + 0.4275 * tempF * (windSpeed ** 0.16);
  windChill.textContent = chill.toFixed(1) + " °F";
} else {
  windChill.textContent = "N/A";
}

//Footer
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `${document.lastModified}`;