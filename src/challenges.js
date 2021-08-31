// Desafio 1
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(String) {
  return String.split(' ')
}

// Desafio 4
function concatName(arrays) {
  nomes = arrays[arrays.length -1] + ', ' + arrays[0]
  return nomes
}
// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3
  ties = ties * 1
  return (wins + ties);
}

// Desafio 6
function highestCount(array) {
  for (let index = 0; index < array.length; i++)
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
