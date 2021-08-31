// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(array) {
  const firstWord = array[0];
  const lastWord = array.pop();
  const exitValue = lastWord + ', ' + firstWord;
  return exitValue;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  for (let i = 0; i < wins; i += 1) {
    points += 3;
  }
  for (let i = 0; i < ties; i += 1) {
    points += 1;
  }
  return points;
}

// Desafio 6
function highestCount(array) {
  let biggestNumber = array[0];
  let biggestNumberAppear = 0;
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > biggestNumber) {
      biggestNumber = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === biggestNumber) {
      biggestNumberAppear += 1;
    }
  }
  return biggestNumberAppear;
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
