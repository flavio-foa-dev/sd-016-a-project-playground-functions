// Desafio 1
// eslint-disable-next-line no-unused-vars
function compareTrue(valueOne, valueTwo) {
  if (valueOne === true && valueTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
// eslint-disable-next-line no-unused-vars
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// eslint-disable-next-line no-unused-vars
function splitSentence(phrase) {
  return phrase.split(' ');
}

// // Desafio 4
// function concatName() {
//   // seu código aqui
// }

// Desafio 5
// eslint-disable-next-line no-unused-vars
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// // Desafio 6
// function highestCount() {
//   // seu código aqui
// }

// Desafio 7
// eslint-disable-next-line no-unused-vars
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = '';

}

// Desafio 8
// eslint-disable-next-line no-unused-vars
let arr = [2, 15, 7, 9, 45];
function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  } if (number % 3 === 0) {
    return 'fizz';
  } if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

console.log(fizzBuzz(arr));

// // Desafio 9
// function encode() {
//   // seu código aqui
// }
// function decode() {
//   // seu código aqui
// }

// module.exports = {
//   calcArea,
//   catAndMouse,
//   compareTrue,
//   concatName,
//   decode,
//   encode,
//   fizzBuzz,
//   footballPoints,
//   highestCount,
//   splitSentence,
// };
