// Charler le fichier evenements.csv où sont décrites les expos et animations
document.addEventListener("DOMContentLoaded", function() {
    loadCSV("data/evenements.csv");
  });

// Fonction qui permet d'ouvrir un fichier csv
function loadCSV(file) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    processData(this.responseText);
    }
};
xhttp.open("GET", file, true);
xhttp.send();
}

//Fonction qui créé les divs du calendrier
  function processData(csvData) {
    var eventsContainer = document.getElementById("calendrier");

    var lines = csvData.split("\n");

    for (var i = 1; i < lines.length; i++) {
      var eventData = lines[i].split(";");
      if (eventData[0] === 'avenir') {
      
      var expoDiv = document.createElement("div");

      expoDiv.classList.add("expo");
      if (i % 2 === 0) {
        //Une ligne sur deux prend le style expo-grey
        expoDiv.classList.add("expo-grey");
      }

      if (eventData[9] != ""){
        expoDiv.innerHTML = `
        <h4 class="titreevent"><b>${eventData[1]}</b></h4>
        <div class="affiche">
          <div class="affiche-with-img">
            <img src="./affiches/2024/${eventData[9]}" class="affiche-img">
          </div>
        </div>
        <p class="typevent"><i>${eventData[2]}</i></p>
        <div class="horaires">
          <span class="jour1">${eventData[3]}</span><br/>
          <span class="jour2">${eventData[4]}</span>
        </div>
        <div class=tarif>${eventData[10]}</div>
        <div class=autresinfos>${eventData[11]}</div>
        <div class="localisation">
          <span class="lieu"><b>${eventData[5]}</b></span><br/>
          <span class="adresse">${eventData[6]}</span><br/>
          <span class="codepostal">${eventData[7]}</span> <span class="ville">${eventData[8]}</span>
        </div>
        </div>
      `;
      } else {
        expoDiv.innerHTML = `
        <h4 class="titreevent"><b>${eventData[1]}</b></h4>
        <div class="affiche affiche-no-img"></div>
        <p class="typevent"><i>${eventData[2]}</i></p>
        <div class="horaires">
          <span class="jour1">${eventData[3]}</span><br/>
          <span class="jour2">${eventData[4]}</span>
        </div>
        <div class=tarif>${eventData[10]}</div>
        <div class=autresinfos>${eventData[11]}</div>
        <div class="localisation">
          <span class="lieu"><b>${eventData[5]}</b></span><br/>
          <span class="adresse">${eventData[6]}</span><br/>
          <span class="codepostal">${eventData[7]}</span> <span class="ville">${eventData[8]}</span>
        </div>
        
      `;
      }
      
      eventsContainer.appendChild(expoDiv);
    }
    }
  }