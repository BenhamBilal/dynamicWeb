'use strict'
// E2: Loading Message
// Schrijf code die:

// Een div toont met "Loading..." wanneer de pagina begint te laden
// Deze tekst verandert in "Welcome!" wanneer alles geladen is
// Na nog eens 2 seconden de tekst verbergt

let div  = document.querySelector('#loadingMessage');


window.addEventListener("load" , () => {
    div.innerHTML = "Welcome!"

    this.setTimeout(() => {
        div.innerHTML = ""
    },2000)
},)