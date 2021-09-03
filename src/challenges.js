// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(share) {
  return share.split(' ');
}

// Desafio 4
function concatName(namesfor) {
  return `${namesfor[namesfor.length - 1]}, ${namesfor[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = (wins * 3) + ties;
  return totalPontos;
}

// Desafio 6
function highestCount(number) {
  let maxNumber = number[0];
  let index = 0;
  for (let i = 0; i < number.length; i += 1) {
    if (maxNumber < number[i]) {
      maxNumber = number[i];
      index = 0;
    }
    if (maxNumber === number[i]) {
      index += 1;
    }
  }
  return index;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let all = '';
  if (Math.abs((mouse - cat1)) < Math.abs((mouse - cat2))) {
    all = 'cat1';
  } else if (Math.abs((mouse - cat1)) > Math.abs((mouse - cat2))) {
    all = 'cat2';
  } else {
    all = 'os gatos trombam e o rato foge';
  }
  return all;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
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
