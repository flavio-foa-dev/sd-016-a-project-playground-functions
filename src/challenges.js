// Desafio 1
function compareTrue(x, y) {
  return (x && y);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(palavra) {
  let corte = [];
  corte = (palavra.split(' '));
  return corte
}

// Desafio 4
function concatName(array) {
  let x = array[array.length - 1];
  let y = array[0]
  let unir = (x + ', ' + y);
  return (unir)
}

// Desafio 5
function footballPoints(wins, ties) {
  return((wins * 3) + (ties * 1))
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
