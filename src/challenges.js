// Desafio 1
function compareTrue(conditionOne, conditionTwo) {
  let result;
  if (conditionOne === true && conditionTwo === true) {
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
function splitSentence(phrase) {
  let splitPhrase = phrase.split(' ');
  return splitPhrase;
}

// Desafio 4
function concatName(listOfItens) {
  let concatenatedList;
  let end = listOfItens.length;
  concatenatedList = listOfItens[end - 1] + ', ' + listOfItens[0];
  return concatenatedList;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;
}

// Desafio 6
function findHighestNumber(arrayOfNumbers) {
  let counter = arrayOfNumbers[0];

  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    if (arrayOfNumbers[i] > counter) {
      counter = arrayOfNumbers[i];
    }
  }
  return counter;
}

function highestCount(arrayOfNumbers) {
  let highestNumber = findHighestNumber(arrayOfNumbers);
  let counter = 0;
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    if (arrayOfNumbers[i] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse() {
  
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
