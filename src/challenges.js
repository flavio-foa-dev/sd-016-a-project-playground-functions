// Desafio 1
function compareTrue(param1, param2) {
  // Recebe dois valores e compara se verdadeiro
  if (param1 === true && param2 === true) {
    return true;
  }
  // Retorna false se nao for true
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  let area;
  area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let array;
  array = frase.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let first;
  let last;
  let firstLast;

  first = array[0];
  last = array[array.length - 1];
  firstLast = last.concat(", " + first);

  return firstLast;
}
// Desafio 5
function footballPoints(wins, ties) {
  let winers;
  let tiers;
  let result;

  winers = wins * 3;
  tiers = ties * 1; 
  result = winers + tiers;

  return result;
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
