// Desafio 1
function compareTrue(value, value2) {
  // seu código aqui
  return value && value2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(words) {
  // seu código aqui
  let phrase = words.split(' ');
  return phrase;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array.pop()}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  const greaterNumber = Math.max(...arrayNumbers);
  let count = 0;
  arrayNumbers.forEach((element) => {
    if (greaterNumber === element) count += 1;
  });
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance === distance2) return 'os gatos trombam e o rato foge';
  if (distance < distance2) return 'cat1';
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let arrayWords = [];
  numbers.forEach((value) => {
    if (value % 3 === 0 && value % 5 === 0) {
      arrayWords.push('fizzBuzz');
    } else if (value % 3 === 0) {
      arrayWords.push('fizz');
    } else if (value % 5 === 0) {
      arrayWords.push('buzz');
    } else {
      arrayWords.push('bug!');
    }
  });
  return arrayWords;
}

// Desafio 9
function encode(phrase) {
  // seu código aqui
  let phraseWithNumbers = phrase;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < phraseWithNumbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < vowels.length; secondIndex += 1) {
      phraseWithNumbers = phraseWithNumbers.replace(vowels[secondIndex], secondIndex + 1);
    }
  }
  return phraseWithNumbers;
}

function decode(phraseNumbers) {
  // seu código aqui
  let phraseWithoutNumbers = phraseNumbers;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < phraseWithoutNumbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < vowels.length; secondIndex += 1) {
      phraseWithoutNumbers = phraseWithoutNumbers.replace(secondIndex + 1, vowels[secondIndex]);
    }
  }
  return phraseWithoutNumbers;
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
