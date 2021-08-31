// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
  return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let calc = ((base * height) / 2)
  return calc
}

// Desafio 3
function splitSentence(word) {
  let string = word.split(' ')
  return string
}

// Desafio 4
function concatName(array) {
  let result = [];
  result = array[array.length-1] + ', ' + array[0];
  return result
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + ties);
  return points
}

// Desafio 6
function highestCount(numbers) {
  count = 1;
  num = numbers[0];
  for (index = 1; index <= numbers.length-1; index += 1) {
    if (num > numbers[index]) {
        num = num;
    } else if (num === (numbers[index])) {
        count += 1;
      } else {
          num  = numbers[index]
          count = 1;
        }
  }
  return count
}

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
