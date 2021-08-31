// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  let result = false;
  if (bool1 && bool2) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let lastIten = array[array.length - 1];
  let firstIten = array[0];
  let result = lastIten + ', ' + firstIten
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let higherNumber = 0;
  let timeRepeated = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > higherNumber) {
      higherNumber = array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === higherNumber) {
      timeRepeated += 1;
    }
  }
  return timeRepeated;
}
console.log(highestCount([0, 0, 0]))

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
