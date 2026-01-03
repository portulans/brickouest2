// Charler le fichier evenements.csv où sont décrites les expos et animations
document.addEventListener("DOMContentLoaded", function() {
    loadCSV("data/evenements.csv");
  });

// Fonction qui permet d'ouvrir un fichier csv
function loadCSV(file) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      processData(this.responseText,'avenir');
      }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}

//Fonction qui créé les divs du calendrier
function processData(csvData,filter) {
  var eventsContainer = document.getElementById("calendrier");

  var lines = csvData.split("\n");

  for (var i = 1; i < lines.length; i++) {
    var eventData = lines[i].split(";");
    if (eventData[0] == filter) {
    
    var expoDiv = document.createElement("div");

    expoDiv.classList.add("expo");
    if (i % 2 === 0) {
      //Une ligne sur deux prend le style expo-grey
      expoDiv.classList.add("expo-grey");
    }

    content =  `
      <h4 class="titreevent"><b>${eventData[1]}</b></h4>
      `
    if (eventData[9] == "exposition.jpg" || eventData[9] == "animation.jpg" ){
      content += `<div class="affiche">
        <div class="affiche-with-img">
          <img src="./affiches/${eventData[9]}" class="affiche-img">
        </div>
      </div>`
    } else if (eventData[9] != ""){
      content += `<div class="affiche">
        <div class="affiche-with-img">
          <img src="./affiches/${eventData[16]}/${eventData[9]}" class="affiche-img">
        </div>
      </div>`
    } else {
        content += `<div class="affiche affiche-no-img"></div>`
    }
    
    if (eventData[11] != ""){
      content += `<p class="typevent"><i>${eventData[2]}</i> <i>organisée avec ${eventData[11]}</i></p>`
    } else {
      content += `<p class="typevent"><i>${eventData[2]}</i></p>`
    }
    content += `<div class="horaires">
        <span class="jour1">${eventData[3]}</span><br/>
        <span class="jour2">${eventData[4]}</span>
      </div>`
  
    if (eventData[10] != "") {
      content += `<div class=tarif><b>Tarifs : </b>${eventData[10]}</div>`}
    else {
      content += `<div class=tarif></div>`}

    content += `<div class=autresinfos>${eventData[12]}</div>
      <div class="localisation">
        <span class="lieu"><b>${eventData[5]}</b></span><br/>
        <span class="adresse">${eventData[6]}</span><br/>
        <span class="codepostal">${eventData[7]}</span> <span class="ville">${eventData[8]}</span>
      </div>
      </div>
    `
    if (eventData[13] != ""){
      content += `<div class="lien"><a href="${eventData[13]}" target="_blank">En savoir plus</a></div>`
    } else{
      content += ''
    }
    
    expoDiv.innerHTML = content
    eventsContainer.appendChild(expoDiv);
  }
  }
}