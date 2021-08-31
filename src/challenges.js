// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true; 
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}

// Desafio 3
function splitSentence(word1) {
  array = word1.split(" "); 
  return array;
}

// Desafio 4
function concatName(names) {
  let lastName = names[names.length -1];
  let firstName = names[0];
  return lastName + ", " + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = 3;
  let tie = 1;
  let points = (wins*victory) + (ties*tie);
  return(points);
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
