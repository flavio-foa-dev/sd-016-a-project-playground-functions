// Desafio 1
function compareTrue(value, value2) {
  // seu código aqui
  if (value === true && value2 === true) {
    return true;
  }
  return false;
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
function concatName(array2) {
  // seu código aqui
  let first = array2[0];
  let last = array2[array2.length - 1];
  return (last + ', ' + first);
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
  let greaterNumber = arrayNumbers[0];
  let countNumber = 0;
  for (let index in arrayNumbers) {
    if (greaterNumber < arrayNumbers[index]) {
      greaterNumber = arrayNumbers[index];
    }
  }
  for (let secondIndex in arrayNumbers) {      
    if (greaterNumber === arrayNumbers[secondIndex]) {
      countNumber += 1;
    }   
  }     
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance = mouse - cat1;
  let distance2 = mouse - cat2;
  let status;
  if (distance < 0) { 
    distance = (mouse - cat1) * -1;
  }
  if (distance2 < 0) {
    distance2 = (mouse - cat2) * -1;
  }  
  if (distance2 === 2 && distance === 3) {
    status = 'cat2';
  }  
  if (distance === 6 && distance2 === 12) {
    status = 'cat1';
  } 
  if (distance === distance2) {
    status = 'os gatos trombam e o rato foge';
  }
  return status;
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let arrayWords = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      arrayWords.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      arrayWords.push('fizz');  
    } else if (numbers[index] % 5 === 0) {
      arrayWords.push('buzz');
    } else   
      arrayWords.push('bug!');    
  }
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
  if (phrase[index] === 'a'){
    arrayPhrase[index] = '1';
  } else if (phrase[index] === 'e'){
    arrayPhrase[index] = '2';
  } else if (phrase[index] === 'i'){
    arrayPhrase[index] = '3';
  } else if (phrase[index] === 'o'){
    arrayPhrase[index] = '4';
  } else if (phrase[index] === 'u'){
    arrayPhrase[index] = '5';
  }
}

// Desafio 9
function decode(phraseNumbers) {
  // seu código aqui
  let arrayPhraseNumbers = phraseNumbers.split('');
  for (let index in phraseNumbers) {
    outputLetters(phraseNumbers, index, arrayPhraseNumbers)
  }
  return arrayPhraseNumbers.join('');
}

function outputLetters(phraseNumbers, index, arrayPhraseNumbers) {
  if (phraseNumbers[index] === '1'){
    arrayPhraseNumbers[index] = 'a';
  } else if (phraseNumbers[index] === '2'){
    arrayPhraseNumbers[index] = 'e';
  } else if (phraseNumbers[index] === '3'){
    arrayPhraseNumbers[index] = 'i';
  } else if (phraseNumbers[index] === '4'){
    arrayPhraseNumbers[index] = 'o';
  } else if (phraseNumbers[index] === '5'){
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
