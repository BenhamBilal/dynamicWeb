'use strict';
// E1: Begroeting Button
// Maak een webpagina met een knop die van tekst verandert als je erop klikt. De knop wisselt tussen "Hallo!" en "Tot ziens!".

// Maak dit op 3 verschillende manieren:

// Met inline JavaScript
// Met een <script> tag in je HTML
// Met een extern JavaScript bestand

// let knop = document.querySelector("button");
// knop.addEventListener("click", () => {
//     knop.textContent = "knap";
// })

// let buttonList = document.getElementsByClassName("buttonList");
// console.log(buttonList);
// for(let i = 0; i < buttonList.length ; i++){
//     buttonList[i].addEventListener("click" ,function(){
//         this.textContent = "kniiip"
//     })
// }

// M1: Strict Rekenmachine"
// Maak een simpele rekenmachine die twee getallen optelt. Je hebt nodig:

// Twee input velden voor de getallen
// Een knop met "Bereken"
// Een plek waar het resultaat komt
// Het speciale: gebruik 'use strict' en zorg dat je code controleert of er wel echt getallen worden ingevoerd.

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let result = document.getElementById('result');
let calculateButton = document.getElementById('calculateButton');

calculateButton.addEventListener('click', function (){
    result.textContent = parseInt(input1.value) / parseInt(input2.value) 
})