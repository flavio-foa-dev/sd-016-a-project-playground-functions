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
  let arrayPhrase = phrase.split('');
  for (let index in phrase) {
    outputNumbers(phrase, index, arrayPhrase)
  }
  return arrayPhrase.join('');
}

function outputNumbers(phrase, index, arrayPhrase) {
  if (phrase[index] === 'a') {
    arrayPhrase[index] = '1';
  } else if (phrase[index] === 'e') {
    arrayPhrase[index] = '2';
  } else if (phrase[index] === 'i') {
    arrayPhrase[index] = '3';
  } else if (phrase[index] === 'o') {
    arrayPhrase[index] = '4';
  } else if (phrase[index] === 'u') {
    arrayPhrase[index] = '5';
  }
}

// Desafio 9
function decode(phraseNumbers) {
  // seu código aqui
  let arrayPhraseNumbers = phraseNumbers.split('');
  for (let index in phraseNumbers) {
    outputLetters(phraseNumbers, index, arrayPhraseNumbers);
  }
  return arrayPhraseNumbers.join('');
}

function outputLetters(phraseNumbers, index, arrayPhraseNumbers) {
  if (phraseNumbers[index] === '1') {
    arrayPhraseNumbers[index] = 'a';
  } else if (phraseNumbers[index] === '2') {
    arrayPhraseNumbers[index] = 'e';
  } else if (phraseNumbers[index] === '3') {
    arrayPhraseNumbers[index] = 'i';
  } else if (phraseNumbers[index] === '4') {
    arrayPhraseNumbers[index] = 'o';
  } else if (phraseNumbers[index] === '5') {
    arrayPhraseNumbers[index] = 'u';
  }
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
