// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
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
function splitSentence(phrase) {
  let separete = phrase.split(' ');
  return separete;
}

// Desafio 4
function concatName(data) {
  let firstPosition = data[0];
  let lastPosition = data[data.length - 1];
  let result = lastPosition + ', ' + firstPosition;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalpoints = (wins * 3) + ties;
  return totalpoints;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = numbers[0];
  let total = 0;
  for (let index = 1; index < numbers.lengt; index += 1){
    if (numbers[index] >= higherNumber){
      higherNumber = numbers[index];    
    }
  }
    
  for (let index = 0; index < numbers.length; index += 1){
    if (higherNumber === numbers[index]) {
      total += 1;
    }
    
  } 
  return total;
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
