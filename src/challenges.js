// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base*height/2);
  return resultado;
}

// Desafio 3
function splitSentence(frase) {
  let retorno = frase.split(/[\s,]+/); // https://blog.betrybe.com/javascript/javascript-split/ varrerá a string em busca de caractere de espaço.
  return retorno;
}

// Desafio 4
function concatName(arr) {
  let primeiro = arr.shift();
  let ultimo = arr.pop();

  return (ultimo + ", " + primeiro);
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
