// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}
calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}
splitSentence('go Trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');

// Desafio 4
function concatName(arr) {
let first;
let last;
let firstLast;

first = arr[0];
last  = arr[arr.length -1];
firstLast = last.concat (", " + first);

return firstLast;
}
concatName(['Lucas','Cassiano','Ferraz','Paolillo']);
concatName(['foguete','não','tem','ré']);
concatName(['captain','my','captain']);

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = 3;
  let pointsTies = 1;
  let resultado =  wins*pointsWins + ties*pointsTies
   return resultado
  }

footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

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
