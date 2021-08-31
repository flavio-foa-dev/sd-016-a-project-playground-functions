// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  // retorne o calculo da area do triangulo
  // formula (base*altura) / 2
  let calculo = (base*height) / 2;
  return calculo
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let frase = string.split(" ")
  return frase;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let first = array[0];
  let last = array[array.length - 1];
  let result = last.concat(", " + first)
  return result 
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = wins*3 + ties
  return points;
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