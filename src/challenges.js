// Desafio 1
// let num1 = true 
// let num2 = false
function compareTrue(num1, num2) {
  if (num1 && num2 === true) {
    return true;
  } else {
    return false;
  }
}
// console.log(compareTrue(num1, num2))

// Desafio 2
// let base = 3
// let height = 4
function calcArea(base, height) { 
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// console.log(calcArea(base, height))

// Desafio 3

// let anyString = "Meu nome é Marcello"
function splitSentence(anyString) {
  return anyString.split(' ');
}
// console.log(splitSentence(anyString));
// Consulta ao MDN 


// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
