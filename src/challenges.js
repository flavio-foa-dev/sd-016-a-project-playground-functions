// Desafio 1
function compareTrue(value1, value2) {
  return (value1 === true && value2 === true);
}// By ViniciusTnK

// Desafio 2
function calcArea(base, height) {
  return base * height * 0.5;
}

// Desafio 3
function splitSentence(word) {
  let resultadoSplit = word.split(' ');
  return resultadoSplit;
}

// Desafio 4
function concatName(array) {
  let virgula = ', ';
  return array[array.length - 1] + virgula + array[0];
}// By ViniciusTnK

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
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
