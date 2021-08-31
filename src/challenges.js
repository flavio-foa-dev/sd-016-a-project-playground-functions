/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(value1, value2) {
  let result = null;
  if (value1 === true && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  let lastName = arrayString[arrayString.length - 1];
  let firstName = arrayString[0];
  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  return wins + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maxNumber = arrayNumbers[0];
  let maxNumberCount = 1;
  for (let index = 1; index < arrayNumbers.length; index += 1) {
    if (maxNumber < arrayNumbers[index]) {
      maxNumber = arrayNumbers[index];
      maxNumberCount = 1;
    } else if (maxNumber === arrayNumbers[index]) {
      maxNumberCount += 1;
    }
  }
  return maxNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);
  let result = '';
  if (cat1 < cat2) {
    result = 'cat1';
  } else if (cat1 > cat2) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = [];
  for (let number of arrayNumbers) {
    if (number % 3 === 0) {
      if (number % 5 === 0) {
        result.push('fizzBuzz');
      } else {
        result.push('fizz');
      }
    } else if (number % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9

let cryptography = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(string) {
  let result = string.split('');
  for (let index = 0; index < result.length; index += 1) {
    for (let value in cryptography) {
      if (value === result[index]) {
        result[index] = cryptography[value];
      }
    }
  }
  return result.join('');
}
function decode(string) {
  let result = string.split('');
  for (let index = 0; index < result.length; index += 1) {
    for (let value in cryptography) {
      if (cryptography[value].toString() === result[index]) {
        result[index] = value;
      }
    }
  }
  return result.join('');
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
