// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let words = sentence.split(' ');
  return words;
}

// Desafio 4
function concatName(arrayNames) {
  let lastName = arrayNames[arrayNames.length - 1];
  let firstName = arrayNames[0];
  let stringNames = lastName + ', ' + firstName;
  return stringNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victoryPoints = wins * 3;
  let tiePoints = ties;
  let totalPoints = victoryPoints + tiePoints;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  let repetitions = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > highestNumber) {
      highestNumber = arrayNumbers[i]
    }
    if (arrayNumbers[i] == highestNumber)
      repetitions += 1
  }
  return repetitions;
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