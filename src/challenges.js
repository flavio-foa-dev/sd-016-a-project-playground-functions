// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ');
}

// Desafio 4
function concatName(str) {
  // seu código aqui
  return str[str.length -1] + ', ' + str[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins = wins * 3;
  ties = ties * 1;
  return wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  //Achar numero maior
  //criar array vezesRepetidas
  //Percorrer a array pra saber se o valor se repete, se repetir, guardar na array: vezesRepetidas
  let maiorNum = numbers[0];
  let vezesRepete = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] >= maiorNum) {
      maiorNum = numbers[index];
    } 
  } 
  for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    if( numbers[index1] === maiorNum) {
      vezesRepete +=1;
      }
  }
  return vezesRepete;
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
