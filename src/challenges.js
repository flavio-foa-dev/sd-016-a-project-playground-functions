// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let space = ' ';
  let array = string.split(space);
return array;
}


// Desafio 4
function concatName(array) {
let string = " ";
for (let i = array.length - 1; i >= 0; i -= 1) {
 string = array[array.length-1] + ", " + array[0];
}
return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  ties = ties * 1;
  return wins + ties;
}

// Desafio 6
function highestCount(inteiros) {
  let maior = inteiros[0];
  let indice = [];
      for (let i = inteiros[0]; i < inteiros.length; i += 1) {
          if (inteiros[i] > maior) {
          maior = inteiros[i];
      } 
  } 
      for (let i = inteiros[0]; i < inteiros.length; i += 1) {
      if (inteiros[i] === maior) {
      indice.push(maior)
  }
      }
          return indice.length 
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
