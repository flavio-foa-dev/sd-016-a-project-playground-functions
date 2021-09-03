// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
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
  return string.split(' ');
}

// Desafio 4
function concatName(Array) {
  for (let i = 0; i < Array.length; i += 1) {
    Array = Array[Array.length - 1] + ', ' + Array[0];
    return Array;
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let higherNumber = array[0];
  let higherNumberTimes = [];
  for (let i = array[0]; i < array.length; i += 1) {
    if (array[i] > higherNumber) {
      higherNumber = array[i];
    }
  }
   for (let i = array[0]; i < array.length; i += 1) {
      if (array[i] === higherNumber) {
        higherNumberTimes.push(array[i]);
      }
  }
  return higherNumberTimes.length;
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
 