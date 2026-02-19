"use strict";

// Schrijf code die:

// Alle elementen met class "special" vindt en hun tekst rood maakt
// De tweede paragraaf vindt en onderstreept
// Het aantal gevonden "special" elementen toont in het output div
// Gebruik verschillende selector methodes (getElementById, querySelector, etc.)

let specielList = document.getElementsByClassName("special");
let ouputDiv = document.getElementById("output");

console.log(specielList);

for (const element of specielList) {
  element.style.color = "red";
}

let secondParagraph = document.querySelector("p:nth-child(2)");

secondParagraph.style.textDecoration = "underline";

let aantalSpecials = specielList.length

ouputDiv.innerHTML = `Het aantal gevonden "special" elementen is ${aantalSpecials}`
