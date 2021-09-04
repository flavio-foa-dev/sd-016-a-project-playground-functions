/* eslint-disable prefer-template */
// Desafio 1
function compareTrue(a, b) {
  return (a === true && b === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let word = '';
  let result = [];

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ' ') {
      result.push(word);
      word = '';
    } else {
      word += string[i];
    }
  }

  result.push(word);
  return result;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let big = array[0];
  let count = 1;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] === big) count += 1;
    if (array[i] > big) {
      big = array[i];
      count = 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);

  if (dist1 < dist2) return 'cat1';
  if (dist1 > dist2) return 'cat2';
  if (dist1 === dist2) return 'os gatos trombam e o rato foge';
}

function IsDivisible(number) {
  let word;
  if (number % 15 === 0) {
    word = 'fizzBuzz';
  } else if (number % 5 === 0) {
    word = 'buzz';
  } else if (number % 3 === 0) {
    word = 'fizz';
  } else word = 'bug!';

  return word;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    result.push(IsDivisible(array[i]));
  }
  return result;
}

// Desafio 9
// eslint-disable-next-line complexity
function encode(string) {
  let result = '';
  let letter;
  for (let i = 0; i < string.length; i += 1) {
    letter = string[i].toLowerCase();

    if (letter === 'a') {
      result += '1';
    } else if (letter === 'e') {
      result += '2';
    } else if (letter === 'i') {
      result += '3';
    } else if (letter === 'o') {
      result += '4';
    } else if (letter === 'u') {
      result += '5';
    } else result += string[i];
  }
  return result;
}

// eslint-disable-next-line complexity
function decode(string) {
  let result = '';
  let letter;
  for (let i = 0; i < string.length; i += 1) {
    letter = string[i];

    if (letter === '1') {
      result += 'a';
    } else if (letter === '2') {
      result += 'e';
    } else if (letter === '3') {
      result += 'i';
    } else if (letter === '4') {
      result += 'o';
    } else if (letter === '5') {
      result += 'u';
    } else result += letter;
  }
  return result;
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
