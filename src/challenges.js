// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2) {
    return true;
  }
  if (value1 === false || value2 === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arrayString = [];
  let word = '';
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      word += string[i];
    } else {
      arrayString[count] = word;
      word = '';
      count += 1;
    }
  }
  if (word !== ' ') {
    arrayString[count] = word;
  }
  return arrayString;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(win, ties) {
  // seu código aqui
  return (win * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let max = array[0];
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (max < array[i]) {
      max = array[i];
      count = 0;
    }
    if (max === array[i]) {
      count += 1;
    }
  }
  return count;
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
