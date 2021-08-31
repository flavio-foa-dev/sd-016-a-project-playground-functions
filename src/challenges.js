// Desafio 1
function compareTrue(parm1, parm2) {
  if (parm1 === true && parm2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(phrase) {
  return `${phrase[phrase.length - 1]}, ${phrase[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  numbers.sort((a, b) => a - b).reverse();
  let count = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[0] === numbers[i]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catM1 = Math.abs(cat1 - mouse);
  let catM2 = Math.abs(cat2 - mouse);
  let menor = '';
  if (catM2 > catM1) {
    menor = 'cat1';
  } else if (catM2 < catM1) {
    menor = 'cat2';
  } else {
    menor = 'os gatos trombam e o rato foge';
  }
  return menor;
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
