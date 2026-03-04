// World map initialize
var map = L.map('map').setView([20, 0], 2);  // Center on world, zoom level 2

// Free map tiles from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Agra marker (Taj Mahal)
L.marker([27.1751, 78.0421]).addTo(map)
  .bindPopup("<b>Agra, Uttar Pradesh</b><br>Taj Mahal yahan hai!<br>Nishant ka ghar ❤️")
  .openPopup();

// New York example
L.marker([40.7128, -74.0060]).addTo(map)
  .bindPopup("<b>New York, USA</b><br>Statue of Liberty");
