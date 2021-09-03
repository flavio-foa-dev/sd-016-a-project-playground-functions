// Desafio 1
function compareTrue(value1, value2) {
  let result = false;
  if (value1 === true && value2 === true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let separete = phrase.split(' ');
  return separete;
}

// Desafio 4
function concatName(data) {
  let firstPosition = data[0];
  let lastPosition = data[data.length - 1];
  let result = lastPosition + ', ' + firstPosition;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalpoints = (wins * 3) + ties;
  return totalpoints;
}

// Desafio 6
function highestCount(number) {
  let higherNumber = number[0];
  let total = 0;
  for (let index = 1; index < number.length; index += 1) {
    if (number[index] > higherNumber) {
      higherNumber = number[index];
    }
  }
  for (let index = 0; index < number.length; index += 1) {
    if (higherNumber === number[index]) {
      total += 1;
    }
  }
  return total;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 === cat2 - mouse) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(value) {
  let result = [];
  for (let i = 0; i < value.length; i += 1) {
    if (value[i] % 3 === 0 && value[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (value[i] % 3 === 0) {
      result.push('fizz');
    } else if (value[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
// Desafio 9
/// Desafio cumprido com a Ajuda de vídeo no canal da Trybe sobre O que é JavaScript REPLACE? https://youtu.be/UShV_TFxs_A
function encode(phrase) {
  let phraseEncode = phrase.replace(/a/g, '1');
  let phraseEncode2 = phraseEncode.replace(/e/g, '2');
  let phraseEncode3 = phraseEncode2.replace(/i/g, '3');
  let phraseEncode4 = phraseEncode3.replace(/o/g, '4');
  let phraseEncode5 = phraseEncode4.replace(/u/g, '5');

  return phraseEncode5;
}

function decode(phrase) {
  let phraseDecode = phrase.replace(/1/g, 'a');
  let phraseDecode2 = phraseDecode.replace(/2/g, 'e');
  let phraseDecode3 = phraseDecode2.replace(/3/g, 'i');
  let phraseDecode4 = phraseDecode3.replace(/4/g, 'o');
  let phraseDecode5 = phraseDecode4.replace(/5/g, 'u');

  return phraseDecode5;
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
