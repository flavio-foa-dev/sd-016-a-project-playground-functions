// Desafio 1
function compareTrue(firstBool, secondBool) {
  if (firstBool && secondBool) {
    return true;
  };

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let firstElement = arrayOfStrings[0];
  let lastElement = arrayOfStrings[arrayOfStrings.length - 1];
  let newString = lastElement + ', ' + firstElement;

  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = numberArray[0];
  let highestNumberRepetitions = 0;

  for (let number of numberArray) {
    if (highestNumber < number) {
      highestNumber = number;
      highestNumberRepetitions = 1;
    } else if (highestNumber === number) {
      highestNumberRepetitions += 1;
    }
  }

  return highestNumberRepetitions;
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
