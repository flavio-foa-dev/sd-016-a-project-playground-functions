// Desafio 1
function compareTrue(a, b) {
  if (a === b && b === a) {
    console.log(true);
  } else {
    console.log(false);
  }
}
compareTrue(1, 1);
// Desafio 2
let base = 0;
let height = 0;

function calcArea(base, height) {
  let area = 0;
  return area = (base * height) /2;
}

console.log(calcArea(51, 1));

// Desafio 3
// ** source: https://www.youtube.com/watch?v=O2OZir_ba1I
// ** source: https://blog.betrybe.com/javascript/javascript-split/
/* Utilizado as explicações acima, para entender que o split realiza a separação por meio de uma base de um separador */
function splitSentence(word) {
  let array = word.split(" ");
  return array;
}

console.log(splitSentence("vamo que vamo"));
// Desafio 4
function concatName(words) {
  let lastItem = words[words.lenght-1];
  let firstItem = words[0];
  return lastItem + " " + firstItem;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
