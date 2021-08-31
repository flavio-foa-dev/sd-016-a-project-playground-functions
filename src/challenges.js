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
    } else
    if (numbers[index] % 3 === 0) {
      arrayWords.push('fizz');
    } else
    if (numbers[index] % 5 === 0) {
      arrayWords.push('buzz');
    } else
    if (numbers[index] % 3 !== 0 && numbers[index] % 5 !== 0) {
      arrayWords.push('bug!');
    }
  }
  return arrayWords;
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
