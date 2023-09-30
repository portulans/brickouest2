var map = L.map('map').setView([48.257599,-3.563965], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var url = "./data/brickouest.geojson"

var expos = L.geoJSON(null, {
    });
    $.getJSON(url, function(data) {
        expos.addData(data);
});

expos.addTo(map);

