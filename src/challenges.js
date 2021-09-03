// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    console.log(true);
  } else if (param1 === false && param2 === false) {
    console.log(false);
  }
}

// Desafio 2
function calcArea(base = 10, height = 50) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  let stringExemplo = ['foguete', 'não', 'tem', 'ré'];
  console.log(stringExemplo);
}

// Desafio 4
function concatName(param = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']) {
  let firstLast = param[param.length - 1] + param[0];
  return firstLast;
}

// Desafio 5
function footballPoints(wins = 3, ties = 1) {
  let points = wins + ties;
  return points;
}

// Desafio 6
function highestCount(numberGreat = [9, 1, 2, 3, 9, 5, 7]) {
  let repeat = 0;
  for (let i = 0; i < numberGreat.length; i += 1) {
    if (numberGreat[i] === Math.max(numberGreat)) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse = 0, cat1 = 1, cat2 = 2) {
  if (cat1 < cat2 && mouse === 0) {
    return cat1;
  }
}

// Desafio 8
function fizzBuzz(array = [2, 15, 7, 9, 45]) {
  if ((array[0] % 3) === 0) {
    return ("fizzBuzz");
  }
}

// Desafio 9
function encode(cript = ["hi there!"]) {
  cript[1] = 3;
  cript[5] = 2;
  cript[7] = 2;
  return cript;
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
