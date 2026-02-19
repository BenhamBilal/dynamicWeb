// E1: Mini Quiz
// Maak een simpele quiz met alerts en prompts:

// Vraag de gebruiker eerst om hun naam via prompt
// Stel vervolgens 3 vragen over programmeren via prompts
// Voor elk juist antwoord toon je een alert met "Goed gedaan!"
// Voor elk fout antwoord toon je een alert met het juiste antwoord
// Op het einde toon je een alert met de totaalscore

let naam = prompt("Wat is je naam?");

let antwoordVraag1 = prompt(
  `Hoi ${naam} , vraag 1 : is "let leeftijd = 18;" een variabele? : (ja/neen) `,
);

if (antwoordVraag1 == "ja") {
  alert("Goed gedaan!");
} else {
  alert("onjuist , het juiste antwoord was 'ja'");
}
let antwoordVraag2 = prompt(`vraag 2 : Geeft 5 + 5 het getal 10? : (ja/neen) `);

if (antwoordVraag2 == "ja") {
  alert("Goed gedaan!");
} else {
  alert("onjuist , het juiste antwoord was 'ja'");
}

let antwoordVraag3 = prompt(
  `vraag 3 : Wordt een "if" gebruikt om een keuze te maken in code? : (ja/neen) `,
);

if (antwoordVraag3 == "ja") {
  alert("Goed gedaan!");
} else {
  alert("onjuist , het juiste antwoord was 'ja'");
}
