var map = L.map('map').setView([48.257599,-3.563965], 8);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([48.328758,-4.243750]).addTo(map)
    .bindPopup("L'Hôpital-Camfrout");