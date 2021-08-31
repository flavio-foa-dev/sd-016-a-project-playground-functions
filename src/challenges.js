// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue === true && secondValue === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let resultArray = string.split(" ");
  return resultArray;
}

// Desafio 4
function concatName(stringsArray) {
  let lastItem = stringsArray[stringsArray.length -1];
  let firstItem = stringsArray[0];
  return lastItem + ", " + firstItem; 
}

// Desafio 5
function footballPoints(wins, ties) {
  let tiePoints = ties;
  let winPoints = wins * 3;
  return winPoints + tiePoints;
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
