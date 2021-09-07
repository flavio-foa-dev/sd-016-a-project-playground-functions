// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2) {
    return true;
  }
  if (value1 === false || value2 === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arrayString = [];
  let word = '';
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      word += string[i];
    } else {
      arrayString[count] = word;
      word = '';
      count += 1;
    }
  }
  if (word !== ' ') {
    arrayString[count] = word;
  }
  return arrayString;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(win, ties) {
  // seu código aqui
  return (win * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let max = array[0];
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (max < array[i]) {
      max = array[i];
      count = 0;
    }
    if (max === array[i]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  }
  if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }
  console.log(distanceCat1);
  console.log(distanceCat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function divisor(number) {
  if (number % 3 === 0 && number % 5 === 0) return 'fizzBuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return 'bug!';
}
function fizzBuzz(array) {
  // seu código aqui
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray[i] = divisor(array[i]);
  }
  return newArray;
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
