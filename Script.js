// Map initialize
var map = L.map('map').setView([20, 0], 2);  // World center, zoom 2

// Free OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Agra/Taj Mahal marker (Nishant special!)
var markerIndia = L.marker([27.1751, 78.0421]).addTo(map);
markerIndia.bindPopup("<b>Agra, Uttar Pradesh</b><br>Taj Mahal yahan hai!<br>Nishant ka area ❤️").openPopup();

// Ek aur example (New York)
L.marker([40.7128, -74.0060]).addTo(map)
  .bindPopup("<b>New York, USA</b><br>Big Apple!");

// Optional: Console log for testing
console.log("Map loaded! Visitors counter bhi check karo.");
