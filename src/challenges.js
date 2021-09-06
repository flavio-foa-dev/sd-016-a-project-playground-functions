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
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  }
  if ((cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  }
  if (cat1 && cat2 === mouse) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
