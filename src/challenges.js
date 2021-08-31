// Desafio 1
function compareTrue(a, b) {
  if(a === true && b === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth){
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let arr = str.split(' ');
  return arr;
}

// Desafio 4
function concatName(arr) {
  arr = arr.reverse();
  let conc = arr[0] +', '+arr[arr.length -1];
  return conc;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
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
function fizzBuzz(arr) {
  let arrFB = [];
  for (let index = 0; index < arr.length; index += 1){
    if (arr[index]% 3 === 0 && arr[index] % 5 !== 0 ){
      arrFB.push('fizz');
    } else if (arr[index]% 3 !== 0 && arr[index] % 5 === 0 ){
      arrFB.push('buzz');
    } else if (arr[index]% 3 === 0 && arr[index] % 5 === 0 ){
      arrFB.push('fizzBuzz');
    } else {
      arrFB.push('bug!');
    }
  }
  return arrFB;
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
