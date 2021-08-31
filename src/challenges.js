// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne === true && valueTwo === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
 function splitSentence(string) {

} 

// Desafio 4
  function concatName(array) {
  let concat = array[array.length - 1] + ", " + (array[0]);
    return concat;
  }

// Desafio 5
function footballPoints(wins, ties) {
  wins = (wins * 3);
  ties = (ties * 1);
  let pontos = wins + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maior = -1000;
  let repeticoesMaior = 0;

  for (let index in array) {
    
    if (array[index] > maior) {
      maior = array[index];
      repeticoesMaior = 1;
    } else if (array[index] === maior) {
      repeticoesMaior += 1;
    }
  }
  return repeticoesMaior;
}
/* console.log(highestCount([-2, -2, -1])) */

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
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
  splitSentence
};
