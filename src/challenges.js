// Desafio 1

function compareTrue (a , b) {
  if (a === true && b === true) {
  return true;
  } else {
  return false;
  }
};
  
// Desafio 2
function calcArea( base , height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(phrase) {
  return phrase.split (' ');
};

// Desafio 4
function concatName(arrayStrings) {
  let first = arrayStrings[0];
  let last = arrayStrings[arrayStrings.length -1]
  return (last + ',' + ' ' + first);
};

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