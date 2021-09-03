// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array.pop()}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let greaterElem = Math.max(...array);
  let result = 0;
  array.forEach((num) => {
    if (num === greaterElem) {
      result += 1;
    }
  });
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  array.forEach((elem) => {
    if (elem % 3 === 0 && elem % 5 === 0) {
      result.push('fizzBuzz');
    } else if (elem % 3 === 0) {
      result.push('fizz');
    } else if (elem % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  });
  return result;
}

// Desafio 9
function encode(phr) {
  let phrase = phr;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let j = 0; j < phrase.length; j += 1) {
    for (let i = 0; i < vowels.length; i += 1) {
      phrase = phrase.replace(vowels[i], i + 1);
    }
  }
  return phrase;
}

function decode(phr) {
  let phrase = phr;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let j = 0; j < phrase.length; j += 1) {
    for (let i = 0; i < vowels.length; i += 1) {
      phrase = phrase.replace(i + 1, vowels[i]);
    }
  }
  return phrase;
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
