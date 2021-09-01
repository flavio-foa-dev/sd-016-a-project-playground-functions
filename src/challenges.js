// Desafio 1
function compareTrue(x, y) {
  if (x === true && y === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(text) {
  return `${text[text.length - 1]}, ${text[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let highestNumber = Math.max(...numbers);
  for (let x in numbers) {
    if (numbers[x] === highestNumber) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1;
  let distanceCat2;

  distanceCat1 = cat1 - mouse;
  if (mouse > cat1) distanceCat1 = mouse - cat1;

  distanceCat2 = cat2 - mouse;
  if (mouse > cat2) distanceCat2 = mouse - cat2;

  if (distanceCat1 > distanceCat2) return 'cat2';
  if (distanceCat2 > distanceCat1) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let text = [];

  for (let element of numbers) {
    if (element % 3 === 0 && element % 5 === 0) text.push('fizzBuzz');
    else if (element % 3 === 0) text.push('fizz');
    else if (element % 5 === 0) text.push('buzz');
    else text.push('bug!');
  }
  return text;
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
