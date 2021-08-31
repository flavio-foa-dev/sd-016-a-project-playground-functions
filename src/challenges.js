// Desafio 1 bora!
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {

 return((base * height)/2);

}

// Desafio 3
function splitSentence(Array) {
  let array01 = Array;
  let splitSentence = array01.split(/[\s,]+/);
  
  return splitSentence;

}

// Desafio 4
function concatName(nameConcat) {
  let firstItem = nameConcat.shift();
  let lastItem = nameConcat.pop();
  let resultContat = lastItem + ', ' + firstItem;

  return resultContat;

}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let totalPoints = winPoints + ties;

  return totalPoints;

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
