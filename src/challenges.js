// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base = 10, height = 50) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence() {
  let stringExemplo = ['foguete', 'não', 'tem', 'ré'];
  return stringExemplo;
}

// Desafio 4
function concatName(param = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']) {
  let firstLast = param[param.length -1] + param[0];
  return firstLast;
}

// Desafio 5
function footballPoints(wins = 3, ties = 1) {
  let points = wins + ties;
  return points;
}

// Desafio 6
function highestCount(numberGreat = [9, 1, 2, 3, 9, 5, 7]) {
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
