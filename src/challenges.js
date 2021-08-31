// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  let result = false;
  if (bool1 && bool2) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let lastIten = array[array.length - 1];
  let firstIten = array[0];
  let result = lastIten + ', ' + firstIten
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let higherNumber = 0;
  let timeRepeated = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > higherNumber) {
      higherNumber = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === higherNumber) {
      timeRepeated += 1;
    }
  }
  return timeRepeated;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let diference1 = mouse - cat1;
  let diference2 = mouse - cat2;
  if (diference1 > diference2) {
  return 'cat2';
  } else if (diference1 < diference2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}
console.log(catAndMouse(5, 2, 3))

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
