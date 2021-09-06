// Desafio 1
function compareTrue(a, b) {
  return a && b;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(phrase) {
  let transformInToArray = phrase.split(' ');
  return transformInToArray;
}
// Desafio 4
function concatName(array) {
  let firstName = [];
  let lastName = [];
  for (let index = 0; index < array.length; index += 1) {
    if (index === 0) {
      firstName.push(array[index]);
    } else if (index === (array.length) - 1) {
      lastName.push(array[index]);
    }
  }
  return `${lastName}, ${firstName}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
// Desafio 6
function highestCount(numbersArray) {
  let maxNumber = Math.max.apply(null, numbersArray);
  let maxNumberCount = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === maxNumber) {
      maxNumberCount += 1;
    }
  }
  return maxNumberCount;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1position = Math.abs(cat1 - mouse);
  let cat2position = Math.abs(cat2 - mouse);
  if (cat1position > cat2position) {
    return 'cat2';
  } if (cat1position < cat2position) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8
function fizzBuzz(numbersArray) {
  let namesArray = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    switch (numbersArray[index] !== 0) {
    case numbersArray[index] % 15 === 0:
      namesArray.push('fizzBuzz');
      break;
    case numbersArray[index] % 3 === 0:
      namesArray.push('fizz');
      break;
    case numbersArray[index] % 5 === 0:
      namesArray.push('buzz');
      break;
    default:
      namesArray.push('bug!');
      break;
    }
  }
  return namesArray;
}
// Desafio 9
function encode(string) {
  let newString = string.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4')
    .replace(/u/g, '5');
  return newString;
}
function decode(string) {
  let newString = string.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return newString;
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
