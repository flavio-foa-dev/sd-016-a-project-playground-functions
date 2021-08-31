// Desafio 1
function compareTrue(param1, param2) {
  // retorna true apenas se os dois parametros satisfizerem a condicao
  if (param1 && param2) {
    return true;
  } else {
  return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  //retorna a area do triangulo
  return (base*height)/2;
}

// Desafio 3
function splitSentence(str) {
  // retorna um array com a frase separada em palavras
  return str.split(" ");
}

// Desafio 4
function concatName(arr) {
  let newArr = [arr[0], arr[arr.length-1]];
  return newArr[newArr.length-1]+", "+newArr[0];
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
