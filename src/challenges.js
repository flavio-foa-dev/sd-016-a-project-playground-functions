// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea
}

// Desafio 3
function splitSentence(phrase) {
  let transformInToArray = phrase.split(" ");
  return transformInToArray;
}
// Desafio 4
function concatName(array) {
  let firstName = [];
  let lastName = [];
  for (index = 0; index < array.length; index += 1) {
    if (index == 0) {
      firstName.push(array[index])
    } else if(index == (array.length) - 1) {
      lastName.push(array[index])
    }
  }
  return lastName +", " +  firstName
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
// Desafio 6
function highestCount() {
  // seu código aqui
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
