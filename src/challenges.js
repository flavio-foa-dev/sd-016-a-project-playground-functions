// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 === true && valor2 === true){
    return true
  }
  else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2
  return area;
}

// Desafio 3
function splitSentence(string) {
    let array = string.split([' '])
  return array;
}
console.log(splitSentence('go trybe'))

// Desafio 4
function concatName(array) {
  let concat = "'" + array[array.length-1] + ', ' + array[0]+"'";
  return concat;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
// Desafio 5
function footballPoints(wins, ties) {
  let pointWins = 3*wins
  let pointTies = 1*ties
  let points = pointWins + pointTies;
  return points
}
console.log(footballPoints(3, 2))
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
