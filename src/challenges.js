// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
//Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) 
//de um triângulo e retorne o cálculo da sua área.
//Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2. 
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
//Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.
//Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].
function splitSentence(stringSplit) {
  let shareArray = stringSplit.split(" ");
  return shareArray;
}

// Desafio 4
function concatName() {
  // seu código aqui
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
