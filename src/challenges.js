// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) return true;
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  const area = (base * altura) / 2;
  return area;
}

function splitSentence(string) {
  const splitString = string.split(' ');
  return splitString;
}

// Desafio 4
function concatName(array) {
  const firstI = array[0];
  const lastI = array[array.length - 1];
  return (`${lastI}, ${firstI}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  const win = 3;
  const tie = 1;

  return ((wins * win) + (ties * tie));
}

// Desafio 6
function highestCount(arrayNumbers) {
  const maxNumber = arrayNumbers.reduce((acc, number) => Math.max(acc, number));
  return arrayNumbers.filter((number) => maxNumber === number).length;
}

module.exports = {
  calcArea,
  // catAndMouse,
  compareTrue,
  concatName,
  // decode,
  // encode,
  // fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
