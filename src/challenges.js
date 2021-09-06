// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
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
function splitSentence(sentence) {
  // seu código aqui
  let words = sentence.split(' ');
  return words;
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  let lastIndex = names.length - 1;
  return `${names[lastIndex]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let eachWin = 3;
  let eachTie = 1;

  return ((wins * eachWin) + (ties * eachTie));
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let highestNumber = numbers[0];
  let counter = 0;

  for (let i = 0; i <= numbers.length - 1; i += 1) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i];
    }
  }
  for (let j = 0; j <= numbers.length - 1; j += 1) {
    if (highestNumber === numbers[j]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Distance = mouse - cat1;
  let cat2Distance = mouse - cat2;

  if (cat1Distance < 0) cat1Distance *= -1;
  if (cat2Distance < 0) cat2Distance *= -1;

  if (cat1Distance < cat2Distance) {
    return 'cat1';
  }
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

catAndMouse(1, 0, 2);

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let array = [];

  for (let i = 0; i <= numbers.length - 1; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0) {
      array.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      array.push('buzz');
    }
    array.push('bug!');
  }
  return array;
}

console.log(fizzBuzz([9, 25]));

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
