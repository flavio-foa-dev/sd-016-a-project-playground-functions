// Desafio 1
// let num1 = true
// let num2 = false
function compareTrue(num1, num2) {
  if (num1 && num2 === true) {
    return true;
  }
  // else {
  return false;
  // }
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
  let first = Array[0];
  let last = Array[Array.length - 1];
  let lastFirst = `${last}, ${first}`;
  // let lastFirst = last.concat(', ' + first);
  // let lastFirst = (last + ', ' + first);
  // let lastFirst = (Array[Array.length - 1] + ', ' + Array[0]);
  return lastFirst;
}
// console.log(concatName(Array))
// Referencia Utilizada para resolver Lynt https://palantir.github.io/tslint/rules/prefer-template/
// Referencia Utilizada para resolver Concat https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

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
// let Array = [2,4,6,2,9,8,9,8,7,6]
function highestCount(Array) {
  let highestone = (Math.max(...Array));
  let counter = 0;
  for (let index = 0; index < Array.length; index += 1) {
    if (Array[index] === highestone) {
      counter += 1;
    }
  }
  return counter;
}
// console.log(highestCount(Array))
// Consulta https://backefront.com.br/encontrar-maior-numero-array/

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let cat1distance = (cat1 - mouse);
  let cat2distance = (cat2 - mouse);
  let message = 0;
  if ((Math.abs(cat2distance)) < (Math.abs(cat1distance))) {
    message = 'cat2';
  } else if ((Math.abs(cat1distance)) < (Math.abs(cat2distance))) {
    message = 'cat1';
  } else if ((Math.abs(cat1distance)) === (Math.abs(cat2distance))) {
    message = 'os gatos trombam e o rato foge';
  }
  return message;
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
