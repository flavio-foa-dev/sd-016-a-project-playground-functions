// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}
// Desafio 3
function splitSentence(words) {
  let wordsSplit = words.split(' ');
  return wordsSplit;
}
// Desafio 4
function concatName(array) {
  let resultado = (array[array.length - 1]);
  resultado = resultado + ", " + (array[0]);
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosDeVitoria = wins * 3;
  let pontosDeEmpate = ties * 1;
  if (pontosDeVitoria && pontosDeEmpate !== 0) {
    return pontosDeVitoria + pontosDeEmpate;
  } else {
    return 0;
  }
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
