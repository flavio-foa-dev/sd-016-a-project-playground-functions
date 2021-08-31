const { RuleTester } = require("eslint");

// Desafio 1
function compareTrue(boo1, boo2) {
  if (boo1 === true && boo2 === true) {
    return(true);
  } else {
    return (false);
  }
}

// Desafio 2
function calcArea(base, height) {
  area = base * height / 2;
  return (area);
}

// Desafio 3
function splitSentence(frase) {
  split = frase.split(' ');
  return (split);
}

// Desafio 4
function concatName(str) {
  let concat = str[str.length - 1] + ', ' + str[0];
  return (concat);
}

// Desafio 5
function footballPoints(wins, ties) {
  points = (wins * 3) + ties;
  return (points);
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
