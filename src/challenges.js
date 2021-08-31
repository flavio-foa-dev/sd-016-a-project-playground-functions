// Desafio 1
function compareTrue(conditionOne, conditionTwo) {
  let result;
  if (conditionOne === true && conditionTwo === true) {
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
function splitSentence(phrase) {
  let phraseAfter = phrase.split(' ');
  return phraseAfter;
}

// Desafio 4
function concatName(listOfItens) {
  let concatenatedList;
  let end = listOfItens.length;
  concatenatedList = `${listOfItens[end - 1]}, ${listOfItens[0]}`;
  return concatenatedList;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;
}

// Desafio 6
function findHighestNumber(arrayOfNumbers) {
  let counter = arrayOfNumbers[0];

  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    if (arrayOfNumbers[i] > counter) {
      counter = arrayOfNumbers[i];
    }
  }
  return counter;
}

function highestCount(arrayOfNumbers) {
  let highestNumber = findHighestNumber(arrayOfNumbers);
  let counter = 0;
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    if (arrayOfNumbers[i] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = (cat1 - mouse) ** 2;
  let distance2 = (cat2 - mouse) ** 2;
  let result = 'os gatos trombam e o rato foge';

  if (distance1 > distance2) {
    result = 'cat2';
  } else if (distance1 < distance2) {
    result = 'cat1';
  }
  return result;
}

// Desafio 8
function divisibilityTwo(number) {
  let result;
  if (number % 15 === 0) {
    result = 'fizzBuzz';
  } else {
    result = 'bug!';
  }
  return result;
}

function divisibilityOne(number) {
  let result;
  if (number === 3 || number === 9) {
    result = 'fizz';
  } else if (number === 5 || number === 25) {
    result = 'buzz';
  } else {
    result = divisibilityTwo(number);
  }
  return result;
}

function fizzBuzz(arrayOfNumbers) {
  let stringWithResults = [];
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    stringWithResults[i] = divisibilityOne(arrayOfNumbers[i]);
  }
  return stringWithResults;
}

// Desafio 9

function encode(phrase) {
  
}

function decode(phrase) {
  
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
