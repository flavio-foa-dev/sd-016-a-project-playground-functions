// Desafio 1
function compareTrue(value1, value2) {
  let result = false;
  if (value1 === true && value2 === true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let separete = phrase.split(' ');
  return separete;
}

// Desafio 4
function concatName(data) {
  let firstPosition = data[0];
  let lastPosition = data[data.length - 1];
  let result = lastPosition + ', ' + firstPosition;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalpoints = (wins * 3) + ties;
  return totalpoints;
}

// Desafio 6
function highestCount(number) {
  let higherNumber = number[0];
  let total = 0;
  for (let index = 1; index < number.length; index += 1) {
    if (number[index] > higherNumber) {
      higherNumber = number[index];
    }
  }
  for (let index = 0; index < number.length; index += 1) {
    if (higherNumber === number[index]) {
      total += 1;
    }
  }
  return total;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 === cat2 - mouse) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  }
  return 'cat2';
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
