

// Function to load Leaflet CSS and JS files dynamically
function loadLeaflet() {
  return new Promise((resolve) => {
    // If Leaflet is already loaded, just resolve immediately
    if (window.L) {
      resolve();
      return;
    }

    // Create a <link> tag for Leaflet CSS
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';
    document.head.appendChild(leafletCSS);

    // Create a <script> tag for Leaflet JS
    const leafletJS = document.createElement('script');
    leafletJS.src = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js';

    // When the script loads, resolve the promise so we can continue
    leafletJS.onload = resolve;

    // Add the script tag to the body
    document.body.appendChild(leafletJS);
  });
}

// Initialize the map
async function initMap() {
  // Wait for Leaflet to load
  await loadLeaflet();

  // Get the element where we want to show the map
  const mapSection = document.getElementById('map-section');

  // Set the map view to Apache Junction, AZ by default
  const apacheJunctionCoords = [33.4156, -111.5494];
  const map = L.map(mapSection).setView(apacheJunctionCoords, 13);

  // Add map tiles (the map images)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Try to get user's current location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Set the map view to user's location
      map.setView([lat, lon], 13);

      // Add a marker at user's location with a popup
      L.marker([lat, lon]).addTo(map)
        .bindPopup('You are here! Find nearby runs.')
        .openPopup();
    }, () => {
      // If user denies location or error, just keep Apache Junction view
      console.warn('Geolocation permission denied or unavailable.');
    });
  }
}

// Run the map setup when the page finishes loading
window.onload = initMap;
