// Desafio 1
const compareTrue = (param1, param2) => {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
};
// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (string) => string.split(' '); /* Utilizo .split para quebrar strings, nesse caso ele é quebrada a cada espaço */

// Desafio 4
function concatName(string) {
  let concat = `${string[string.length - 1]}, ${string[0]}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}
// Desafio 6
function highestCount(numbers) {
  let maxNumber = numbers[0];
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maxNumber) maxNumber = numbers[index];
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (maxNumber === numbers[index]) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = mouse - cat1;
  let positionCat2 = mouse - cat2;
  if (positionCat1 > 0) {
    positionCat1 = -1 * positionCat1;
  } else if (positionCat2 > 0) {
    positionCat2 = -1 * positionCat2;
  }
  if (positionCat1 > positionCat2) {
    return 'cat1';
  } if (positionCat2 > positionCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(string) {
  let newArray = [];
  for (index = 0; index < string.length; index++) {
    if (string[index] % 3 === 0 && string[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (string[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (string[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

function encode(text) {
  let newText = text.split('');
  for (index = 0; index < newText.length; index++) {
    if (newText[index] === 'a') {
      newText.splice(index, 1, '1');
    } else if (newText[index] === 'e') {
      newText.splice(index, 1, '2');
    } else if (newText[index] === 'i') {
      newText.splice(index, 1, '3');
    } else if (newText[index] === 'o') {
      newText.splice(index, 1, '4');
    } else if (newText[index] === 'u') {
      newText.splice(index, 1, '5');
    }
  }
  return newText.join('');
}

function decode(text) {
  let newText = text.split('');
  for (let index = 0; index < newText.length; index++) {
    if (newText[index] === '1') {
      newText.splice(index, 1, 'a');
    } else if (newText[index] === '2') {
      newText.splice(index, 1, 'e');
    } else if (newText[index] === '3') {
      newText.splice(index, 1, 'i');
    } else if (newText[index] === '4') {
      newText.splice(index, 1, 'o');
    } else if (newText[index] === '5') {
      newText.splice(index, 1, 'u');
    }
  }
  return newText.join('');
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
