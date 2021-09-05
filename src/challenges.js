// Desafio 1
function compareTrue(x, y) {
  if (x === true && y === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = ((base * height) / 2);
  return calc;
}

// Desafio 3
function splitSentence(words) {
  let array = words.split(' ');
  return array;
}

// Desafio 4
function concatName(Array) {
  let lastArrayAndfirstArray = (`${Array[Array.length - 1]}, ${Array[0]}`);
  return lastArrayAndfirstArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let score = winsPoints + tiesPoints;
  return score;
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
