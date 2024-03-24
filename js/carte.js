var map = L.map('map').setView([48.257599,-3.563965], 7);
L.control.scale().addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function csvToGeojson(csvString) {
    // Split CSV string into lines
    var lines = csvString.split("\n");

    // Extract header line
    var headers = lines[0].split(";");

    var features = [];

    // Iterate over each line (starting from the second line, skipping header)
    for (var i = 1; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line !== "") {
            // Split line into values
            var values = line.split(";");

            // Create a feature object
            var feature = {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [parseFloat(values[15]),parseFloat(values[14])]
                },
                "properties": {}
            };

            // Assign properties to the feature
            for (var j = 0; j < headers.length; j++) {
                if (j !== 'lat' && j !== 'long') {
                    feature.properties[headers[j]] = values[j];
                }
            }

            // Add feature to the features array
            features.push(feature);
        }
    }

    // Create a GeoJSON FeatureCollection
    var geojson = {
        "type": "FeatureCollection",
        "features": features
    };

    return geojson;
}


function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        var popup = "<p><b>" + feature.properties.titreevent + "</b><br>" + 
                    feature.properties.adresse + "<br>" + 
                    feature.properties.codepostal + ' ' + feature.properties.ville + '</p>'
        layer.bindPopup(popup);
    }
}

// Define the URL of your CSV file
var csvUrl = '././data/evenements.csv';
var expos;
// Fetch the CSV file
fetch(csvUrl)
    .then(response => response.text())
    .then(csvString => {
        //console.log(csvString)
        // Convert the CSV string to GeoJSON
        var geojson = csvToGeojson(csvString);
        console.log(geojson)
        var expos = L.geoJSON(geojson, {
            onEachFeature:onEachFeature,
            filter:function(feature,layer){
                return feature.properties.statut === 'avenir'
            }
        });
        
        expos.addTo(map);
    })
    //.catch(error => console.error('Error fetching the CSV file:', error));





