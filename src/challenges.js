// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  let string = ['go', 'Trybe'];
  return string;
}

// Desafio 4
function concatName(name) {
  let firstLast = name[name.length - 1] + name[0];
  return firstLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins + ties;
  return points;
}

// Desafio 6
function highestCount() {
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 < cat2 && mouse === mouse[0]) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz() {
}

// Desafio 9
function encode(cript) {
  cript = cript.replace(/a/g, '1');
  cript = cript.replace(/e/g, '2');
  cript = cript.replace(/i/g, '3');
  cript = cript.replace(/o/g, '4');
  cript = cript.replace(/u/g, '5');
  return cript;
}
function decode(decrypt) {
  decrypt = decrypt.replace(/1/g, 'a');
  decrypt = decrypt.replace(/2/g, 'e');
  decrypt = decrypt.replace(/3/g, 'i');
  decrypt = decrypt.replace(/4/g, 'o');
  decrypt = decrypt.replace(/5/g, 'u');
  return decrypt;
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
