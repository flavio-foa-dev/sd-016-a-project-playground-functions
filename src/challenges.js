// Desafio 1
function compareTrue(valueOne, valueTwo) {
  let compare;

  if (valueOne === true && valueTwo === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arr) {
  let lastElement = arr.pop();
  let firstElement = arr.shift();
  let concatElements = `${lastElement}, ${firstElement}`;

  return concatElements;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties;

  let sumPoints = pointsWins + pointsTies;
  return sumPoints;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let counter = 0;

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  let catAttack;

  if (distanceCat1 < 0) {
    distanceCat1 *= (-1);
  } else if (distanceCat2 < 0) {
    distanceCat2 *= (-1);
  }
  if (distanceCat1 < distanceCat2) {
    catAttack = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    catAttack = 'cat2';
  } else {
    catAttack = 'os gatos trombam e o rato foge';
  }
  return catAttack;
}

// Desafio 8
function fizzBuzz(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      numbers[index] = 'fizzBuzz';
    } else if (numbers[index] % 3 === 0) {
      numbers[index] = 'fizz';
    } else if (numbers[index] % 5 === 0) {
      numbers[index] = 'buzz';
    } else {
      numbers[index] = 'bug!';
    }
  }
  return numbers;
}

// Desafio 9
function encode(string) {
  let newString = string.split('');

  for (let index = 0; index < newString.length; index += 1) {
    if (newString[index] === 'a') {
      newString[index] = '1';
    } else if (newString[index] === 'e') {
      newString[index] = '2';
    } else if (newString[index] === 'i') {
      newString[index] = '3';
    } else if (newString[index] === 'o') {
      newString[index] = '4';
    } else if (newString[index] === 'u') {
      newString[index] = '5';
    }
  }
  return newString.join('');
}
function decode(secondString) {
  let newSecondString = secondString.split('');

  for (let secondIndex = 0; secondIndex < newSecondString.length; secondIndex += 1) {
    if (newSecondString[secondIndex] === '1') {
      newSecondString[secondIndex] = 'a';
    } else if (newSecondString[secondIndex] === '2') {
      newSecondString[secondIndex] = 'e';
    } else if (newSecondString[secondIndex] === '3') {
      newSecondString[secondIndex] = 'i';
    } else if (newSecondString[secondIndex] === '4') {
      newSecondString[secondIndex] = 'o';
    } else if (newSecondString[secondIndex] === '5') {
      newSecondString[secondIndex] = 'u';
    }
  }
  return newSecondString.join('');
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
