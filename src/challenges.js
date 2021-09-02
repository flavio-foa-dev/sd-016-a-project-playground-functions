// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true ) {
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
function splitSentence(oneString) {
  let words = oneString.split(" ");
  return words;
}

// Desafio 4
function concatName(nameList) {
  let firstName = nameList[0];
  let lastName = nameList[nameList.length - 1];
  return (lastName  + ', ' + firstName);
}

// Desafio 5
function footballPoints(wins, ties) {
  let scoreTotal = (wins * 3) + ties;
  return scoreTotal;
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
