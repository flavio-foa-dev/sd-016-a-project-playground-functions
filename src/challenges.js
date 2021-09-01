// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) { return true; }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(strings) {
  // seu código aqui
  return strings.split(' ');
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let count = 0;
  let maxNumber = numbers[0];

  for (let number of numbers) {
    if (maxNumber < number) {
      count = 0;
      maxNumber = number;
    } if (maxNumber === number) {
      count += 1;
    }
  }

  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
