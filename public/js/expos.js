var map = L.map('map').setView([48.257599,-3.563965], 7);
L.control.scale().addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        var popup = "<h3>" + feature.properties.dates + "</h3><p><b>" + feature.properties.place + "</b><br>" + 
                    feature.properties.street + "<br>" + 
                    feature.properties.postcode + ' ' + feature.properties.city + '</p>'
        layer.bindPopup(popup);
    }
}

var url = "./data/brickouest.geojson"
//https://umap.openstreetmap.fr/fr/map/brickouest_967088

var expos = L.geoJSON(null, {
    onEachFeature:onEachFeature
    });
    $.getJSON(url, function(data) {
        expos.addData(data);
});

expos.addTo(map);

