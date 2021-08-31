// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true){
    return true;
  }else{
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base*height)/2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let separador = /\s* \s*/;
  let divideFrase = frase.split(separador);
  return divideFrase;
}

// Desafio 4
function concatName(arrayFrase) {
  // seu código aqui
  let arrayUltimate = [];
  let maior = 0;
  arrayUltimate.push(arrayFrase[arrayFrase.length-1]);
  arrayUltimate.push(arrayFrase[0]);
  let stringJoin = arrayUltimate.join(", ");
  return stringJoin;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
