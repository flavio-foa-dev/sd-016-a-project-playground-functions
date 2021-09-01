// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(value) {
  let lastPosition = value[value.length - 1];
  let firstPosition = value[0];
  let space = ', ';

  return lastPosition + space + firstPosition;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = wins * 3 + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(value) {
  let result = 0;
  let biggestNumber = value[0];

  for (let index = 0; index < value.length; index += 1) {
    if (biggestNumber < value[index]) {
      biggestNumber = value[index];
    }
  }
  for (let i = 0; i < value.length; i += 1) {
    if (biggestNumber === value[i]) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
/*  let cat1Proximity = Math.abs(mouse - cat1);
  let cat2Proximity = Math.abs(mouse - cat2);
  if (cat1Proximity < cat2Proximity) {
    return cat1;
  } else if (cat2Proximity < cat1Proximity) {
    return cat2;
  } else {
    return 'os gatos trombam e o rato foge';
  }*/
}

// Desafio 8
function fizzBuzz(valueArray) {
  let result = [];
  for (let i = 0; i < valueArray.length; i += 1) {
    if (valueArray[i] % 3 === 0 && valueArray[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (valueArray[i] % 3 === 0) {
      result.push('fizz');
    } else if (valueArray[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
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
