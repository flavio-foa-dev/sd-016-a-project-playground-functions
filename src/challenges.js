// Desafio 1
function compareTrue(val1, val2) {
  return val1 && val2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arr) {
  let highest = -100;
  let times = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === highest) {
      times += 1;
    }
  }
  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(cat1) - Math.abs(mouse) < Math.abs(cat2) - Math.abs(mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat1) - Math.abs(mouse) > Math.abs(cat2) - Math.abs(mouse)) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz() {}

// Desafio 9
function encode() {}
function decode() {}

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
