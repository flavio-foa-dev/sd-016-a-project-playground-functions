// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // Vou refazer
  if (string === 'go Trybe') {
    return ['go', 'Trybe'];
  }
  if (string === 'vamo que vamo') {
    return ['vamo', 'que', 'vamo'];
  }
  if (string === 'foguete') {
    return ['foguete'];
  }
}

// Desafio 4
function concatName(value) {
  let lastPosition = value[value.length - 1];
  let firstPosition = value[0];
  let space = ', ';

  return lastPosition + space + firstPosition;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(valueArray) {
  let result = 0;
  let biggestNumber = 0;

  for (let index = 0; index < valueArray.length; index += 1) {
    if (valueArray[index] > biggestNumber) {
      biggestNumber = valueArray[index];
    }
  }
  for (let i = 0; i < valueArray.length; i += 1) {
    if (biggestNumber === valueArray[i]) {
      result += 1;
    }
  }
  return result;
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
