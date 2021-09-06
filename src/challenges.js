// Desafio 1
function compareTrue(x, y) {
  if (x === true && y === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = ((base * height) / 2);
  return calc;
}

// Desafio 3
function splitSentence(words) {
  let array = words.split(' ');
  return array;
}

// Desafio 4
function concatName(Array) {
  let lastArrayAndfirstArray = (`${Array[Array.length - 1]}, ${Array[0]}`);
  return lastArrayAndfirstArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let score = winsPoints + tiesPoints;
  return score;
}

// Desafio 6
function highestCount(values) {
  let highestValue = Math.max(...values);
  let count = 0;
  for (let i in values) {
    if (highestValue === values[i]) count += 1;
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = 0;
  if (Math.abs((mouse - cat1)) < Math.abs((mouse - cat2))) {
    result = 'cat1';
  } else if (Math.abs((mouse - cat1)) > Math.abs((mouse - cat2))) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(values) {
  let Array = [];
  for (let i = 0; i < values.length; i += 1) {
    if (values[i] % 3 === 0 && values[i] % 5 === 0) {
      Array.push('fizzBuzz');
    } else if (values[i] % 5 === 0) {
      Array.push('buzz');
    } else if (values[i] % 3 === 0) {
      Array.push('fizz');
    } else {
      Array.push('bug!');
    }
  }
  return (Array);
}

// Desafio 9
function encode(letter) {
  for (let i = 0; i < letter.length; i += 1) {
    letter = letter.replace('a', '1');
    letter = letter.replace('e', '2');
    letter = letter.replace('i', '3');
    letter = letter.replace('o', '4');
    letter = letter.replace('u', '5');
  }
  return letter;
}

function decode(number) {
  for (let i = 0; i < number.length; i += 1) {
    number = number.replace('a', '1');
    number = number.replace('e', '2');
    number = number.replace('i', '3');
    number = number.replace('o', '4');
    number = number.replace('u', '5');
  }
  return number;
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
