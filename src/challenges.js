// Desafio 1
// Retornar true se ambos os valores forem verdadeiros;
// Retornar false se um ou ambos os parâmetros forem falsos.
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
// Escreva uma função com o nome calcArea que receba um valor de base (chamado base)
// e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// Escreva uma função com o nome splitSentence, a qual receberá uma string
// e retornará uma array de strings separadas por cada espaço na string original.
function splitSentence(sentence) {
  let splittedSentence = sentence.split(" ")
  return splittedSentence;
}

// Desafio 4
// Escreva uma função com o nome concatName que, ao receber uma array de strings,
// retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
function concatName(arrayOfStrings) {
  let firstItem = arrayOfStrings[0];
  let lastItem = arrayOfStrings[arrayOfStrings.length - 1];
  return lastItem + ", " + firstItem;
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
