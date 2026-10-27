/**
 * LEAFLET MEMORY MAP MODULE
 * Renders dark aesthetic interactive map with custom memory markers.
 * Supports both standalone CDN Leaflet (window.L) and bundled ES import.
 */

export function initMemoryMap(places) {
  const mapElement = document.getElementById('map-container');
  if (!mapElement || !places || places.length === 0) return;

  const L = window.L;
  if (!L) {
    console.warn('Leaflet library not loaded yet');
    return;
  }

  // Default center based on the first location
  const centerLat = places[0].lat || -6.2088;
  const centerLng = places[0].lng || 106.8456;

  const map = L.map('map-container', {
    center: [centerLat, centerLng],
    zoom: 12,
    zoomControl: true,
    scrollWheelZoom: false
  });

  // Dark Map Tile Layer (CartoDB Dark Matter)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // Custom Bronze Marker Icon
  const bronzeIcon = L.divIcon({
    className: 'custom-map-pin',
    html: `<div style="
      width: 18px;
      height: 18px;
      background: #bfa175;
      border: 2px solid #08090c;
      border-radius: 50%;
      box-shadow: 0 0 15px rgba(191, 161, 117, 0.8);
      cursor: pointer;
    "></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });

  const bounds = [];

  places.forEach(place => {
    if (place.lat && place.lng) {
      bounds.push([place.lat, place.lng]);

      const popupContent = `
        <div class="map-popup-container">
          <div class="map-popup-title">${place.name}</div>
          <div class="map-popup-date">${place.date} • ${place.category}</div>
          <div class="map-popup-story">${place.story}</div>
          <div style="margin-top:0.5rem; font-style:italic; font-size:0.8rem; color:#bfa175;">"${place.whySpecial}"</div>
        </div>
      `;

      L.marker([place.lat, place.lng], { icon: bronzeIcon })
        .addTo(map)
        .bindPopup(popupContent);
    }
  });

  if (bounds.length > 1) {
    map.fitBounds(bounds, { padding: [50, 50] });
  }
}
