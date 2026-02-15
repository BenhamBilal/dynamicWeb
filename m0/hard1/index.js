"use strict";
// H1: Light/Dark Toggle
// Maak een knop die de pagina wisselt tussen een licht en donker thema.

// Vereisten:

// Gebruik een extern JavaScript bestand
// Verander minstens 3 stijleigenschappen (bijvoorbeeld achtergrondkleur, tekstkleur en linkkleur)
// Laat de knop ook van tekst veranderen ("Donker thema" / "Licht thema")

let knop = document.getElementById("themaKnop");
let bodyAchterGrondList = document.getElementsByTagName("Body");
let linkTag = document.getElementById("linkTag");

let isDarkMode = false;

knop.addEventListener("click", function () {

  if (isDarkMode === false) {

    for (let i = 0; i < bodyAchterGrondList.length; i++) {
      bodyAchterGrondList[i].style.backgroundColor = "black";
      bodyAchterGrondList[i].style.color = "white";
    }
    linkTag.style.color = "white";

    isDarkMode = true

  }else {

    for (let i = 0; i < bodyAchterGrondList.length; i++) {
      bodyAchterGrondList[i].style.backgroundColor = "";
      bodyAchterGrondList[i].style.color = "";
    }
    linkTag.style.color = "";

    isDarkMode = false

  }
});
