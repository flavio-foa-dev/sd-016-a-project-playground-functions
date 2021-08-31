// Desafio 1
function compareTrue(value1, value2) {
  let result = null;
  if (value1 === true && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  let lastName = arrayString[arrayString.length - 1];
  let firstName = arrayString[0];
  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  return wins + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maxNumber = arrayNumbers[0];
  let maxNumberCount = 1;
  for (let index = 1; index < arrayNumbers.length; index += 1) {
    if (maxNumber < arrayNumbers[index]) {
      maxNumber = arrayNumbers[index];
      maxNumberCount = 1;
    } else if (maxNumber === arrayNumbers[index]) {
      maxNumberCount += 1;
    }
  }
  return maxNumberCount;
}

console.log(highestCount([1, 9, 2, 3, 9, 5, 7]));

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
