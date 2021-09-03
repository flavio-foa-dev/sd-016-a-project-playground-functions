// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height;
  let areaParte2 = area / 2;
  return areaParte2;
}

// Desafio 3
function splitSentence(word) {
  let resultadoSplit = word.split(' ');
  return resultadoSplit;
}

// Desafio 4
function concatName(array) {
  let lastName = array[array.length - 1];
  let firstName = array[0];
  let virgula = ', ';
  return lastName + virgula + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiesPoints = ties * 1;
  return winPoints + tiesPoints;
}

// Desafio 6
function highestCount(arrayNum) {
  let maior = arrayNum[0];
  let contador = 0;
  for (let i = 0; i < arrayNum.length; i += 1) {
    if (arrayNum[i] > maior) {
      maior = arrayNum[i];
      contador = 1;
    } else if (arrayNum[i] === maior) {
      contador += 1;
    }
  }
  return contador;
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
