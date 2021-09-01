// Desafio 1
function compareTrue(x, y) {
  return (x && y) === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringUnknown) {
  return stringUnknown.split(' ');
}

// Desafio 4
function concatName(arrayUnnown) {
  return `${arrayUnnown[arrayUnnown.length - 1]}, ${arrayUnnown[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  if (wins > 0) points = wins * 3;
  if (ties > 0) points += ties;
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}
console.log(footballPoints(0, 0));

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
