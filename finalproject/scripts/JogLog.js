// getting the map
function loadLeaflet() {
  return new Promise((resolve) => {
    if (window.L) {
      resolve();
      return;
    }

    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';
    document.head.appendChild(leafletCSS);

    const leafletJS = document.createElement('script');
    leafletJS.src = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js';

    leafletJS.onload = resolve;
    document.body.appendChild(leafletJS);
  });
}
async function initMap() {
  await loadLeaflet();
  const mapSection = document.getElementById('map-section');

  const apacheJunctionCoords = [33.4156, -111.5494];
  const map = L.map(mapSection).setView(apacheJunctionCoords, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
}

window.onload = initMap;

// SUbscribe
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('email');
  const message = document.getElementById('subscribeMessage');

  function isValidEmail(email) {
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showMessage(text, success) {
    message.textContent = text;
    message.style.color = success ? 'black' : 'red';
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
      showMessage('Please enter your email address.', false);
      return;
    }

    if (!isValidEmail(email)) {
      showMessage('Please enter a valid email address.', false);
      return;
    }

    // Success 
    showMessage(`Thank you for subscribing!`, true);
    form.reset();
  });
});
