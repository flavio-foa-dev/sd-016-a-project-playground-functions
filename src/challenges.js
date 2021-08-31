// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
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
function splitSentence(phase) {
  return phase.split(' ');
}

// Desafio 4
function concatName(array) {
  let lastItem = array[array.length - 1] + ', ';
  let firstItem = array[0];
  return lastItem.concat(firstItem);
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties;
  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(array) {
  let highest = -100;
  let times = 0;
  for (let i = 0; i < array.length; i += 1){
    if (array[i] > highest){
      highest = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1){
    if (array[i] === highest){
      times += 1;
    }
  }
  return times;
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
