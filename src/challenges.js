// Desafio 1
// let num1 = true
// let num2 = false
function compareTrue(num1, num2) {
  if (num1 && num2 === true) {
    return true;
  } else {
    return false;
  }
}
// console.log(compareTrue(num1, num2))

// Desafio 2
// let base = 3
// let height = 4
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// console.log(calcArea(base, height))

// Desafio 3
// let anyString = "Meu nome é Marcello"
function splitSentence(anyString) {
  return anyString.split(' ');
}
// console.log(splitSentence(anyString));
// Consulta ao MDN Referencia

// Desafio 4

// let Array = ['Lucas', 'Cassiano', 'Ferraz','Paolillo', 'Angelo']
function concatName(Array) {
  // let first = Array[0]
  // let last = Array[Array.length - 1]
  let lastFirst = (Array[Array.length - 1] + ', ' +  Array[0])
  return lastFirst
}
// console.log(concatName(Array))

// Desafio 5
// let wins = 10
// let ties = 5
function footballPoints(wins, ties) {
  let winPoints = (wins * 3);
  let tiePoints = (ties * 1);
  let totalPoints = (winPoints + tiePoints);
  return totalPoints;
}
// console.log(footballPoints(wins,ties))

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
