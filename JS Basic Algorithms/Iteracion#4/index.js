//1.1//

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
var avenger = avengers[0];
console.log(avenger)

//1.2//

avengers[0] = "IRONMAN";
console.log(avengers)

//1.3//

alert(avengers.length);

//1.4.//

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push ("Morty","Summer");
console.log(rickAndMortyCharacters);

//1.5//

rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[0]);

let lastItem = rickAndMortyCharacters [rickAndMortyCharacters.length-1];
console.log(lastItem);

//1.6//
rickAndMortyCharacters.pop(rickAndMortyCharacters[1])
console.log(rickAndMortyCharacters);

