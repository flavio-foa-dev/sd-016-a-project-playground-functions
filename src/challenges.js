// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne === true && valueTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arrStr) {
  let firstName = arrStr[0];
  let secondName = '';
  for (let index = 0; index < arrStr.length; index += 1) {
    if (index === arrStr.length - 1) {
      secondName = arrStr[index];
    }
  }
  return `${secondName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = wins * 3 + ties * 1;
  return totalPoints;
}

// Desafio 6

function returnHigh(arrayNumber) {
  let hightValue = arrayNumber[0];
  for (let index of arrayNumber) {
    if (index > hightValue) {
      hightValue = index;
    }
  }
  return hightValue;
}

function highestCount(arrayNumber) {
  let count = 0;
  let hightValue = returnHigh(arrayNumber);
  for (let secIndex of arrayNumber) {
    if (hightValue === secIndex) {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([1, 9, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([-2, -2, -1]));
console.log(highestCount([0, 0, 0]));
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
