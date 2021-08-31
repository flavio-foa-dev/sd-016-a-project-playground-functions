// Desafio 1
function compareTrue(valueOne, valueTwo) {
  let compare;

  if (valueOne === true && valueTwo === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arr) {
  let lastElement = arr.pop();
  let firstElement = arr.shift();
  let concatElements = `${lastElement}, ${firstElement}`;

  return concatElements;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties;

  let sumPoints = pointsWins + pointsTies;
  return sumPoints;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let counter = 0;

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
  }
  
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
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
