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
// Desafio 6
function highestCount(array) {
  let countRepeat = 0;
  let indiceMaior = -1;
    for (let indice in array) {
      if (indiceMaior < array[indice]) {
        indiceMaior = array[indice];
      }
  }
  for (let index2 in array){
    if (indiceMaior === array[index2]){
      countRepeat += 1
    }
  }
  return countRepeat
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
