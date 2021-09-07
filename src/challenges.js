// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let words = phrase.split(' ');
  return words;
}

// Desafio 4
function concatName(words) {
  let lastFirst = `${words[words.length - 1]}, ${words[0]}`;
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = -1;
  let counter = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
      counter = 1;
    } else if (numbers[index] === higherNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = cat1 - mouse;
  let distance2 = cat2 - mouse;
  if ((distance1) === (distance2) || (distance1 * (-1)) === (distance2)
  || (distance2 * (-1)) === (distance1)) {
    return 'os gatos trombam e o rato foge';
  } if (distance1 < distance2) {
    return 'cat1';
  } return 'cat2';
}

// Desafio 8
function fizzBuzz(numbers) {
  let words = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      words.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      words.push('fizz');
    } else if (numbers[index] % 3 !== 0 && numbers[index] % 5 === 0) {
      words.push('buzz');
    } else {
      words.push('bug!');
    } 
  } return words;
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
