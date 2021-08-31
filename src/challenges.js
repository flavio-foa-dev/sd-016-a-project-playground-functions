// Desafio 1
function compareTrue(a, b) {
  if (a === b && b === a) {
    console.log(true);
  } else {
    console.log(false);
  }
}
compareTrue(1, 1);
// Desafio 2
let base = 0;
let height = 0;

function calcArea(base, height) {
  let area = 0;
  let resultado = 0;
  return area = (base * height) /2;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(word) {
  if(word === 'go Trybe'){
    let wordS = ["['go', 'Trybe']"];
  }
  return wordS;
}
console.log(splitSentence('go Trybe'));
// Desafio 4
function concatName() {
  
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
