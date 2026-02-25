// E1: Café bestelapp
// Maak een functie 'maakBestelling' met parameters 'drank' en 'snack'

// Gebruik default waardes: bv. drank: "cola" en snack: "chips"

// Return een object met deze waardes

// Bestelling 1: Geen parameters
// Bestelling 2: Alleen "fanta" als drank
// Bestelling 3: "sprite" als drank en "nootjes" als snack
// Bonus: Voeg een timestamp toe aan elke bestelling!

const maakBestelling = (drank = 'cola',snack = 'chips', date = new Date()) => {
    return {
        drank : drank,
        snack : snack,
        date : `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
}



console.log(maakBestelling());
console.log(maakBestelling("fanta"));
console.log(maakBestelling("sprite" ,"nootjes"));


