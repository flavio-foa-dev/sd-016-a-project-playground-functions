// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else  {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringExemplo) {
  stringExemplo = stringExemplo.split(" ");
  return stringExemplo;
}

// Desafio 4
function concatName(name) {
  let first = name[0];
  let last = name[name.length - 1]
  let firstLast = last +", "+ first;
  return firstLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function highestCount(numberGreat) {
  let repeat = 0;
  for (let i = 0; i < numberGreat.length; i += 1) {
    if (numberGreat[i] === Math.max(numberGreat)) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 < cat2 && mouse === mouse[0]) {
    return 'cat2';
  } else if (cat2 < cat1) {
    return 'cat1';
  } else if (cat1 === cat2) {
    return 'gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let number = 0;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    number = array[i];
    if (number % 3 === 0 && number % 5 === 0) {
      result[i] = 'fizzBuzz';
    } else if (number % 5 === 0) {
      result[i] = 'buzz';
    } else if (number % 3 === 0) {
      result[i] = 'fizz';
    } else {
      result[i] = 'bug';
    }
  }
}

// Desafio 9
function encode(cript) {
  cript = cript.replace(/a/g, '1');
  cript = cript.replace(/e/g, '2');
  cript = cript.replace(/i/g, '3');
  cript = cript.replace(/o/g, '4');
  cript = cript.replace(/u/g, '5');
  return cript;
}
function decode(decrypt) {

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
