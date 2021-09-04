// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne === true && valueTwo === true) {
    return true;
  }
  return false;
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
// Código pesquisado no site w3c school
function concatName(arrString) {
  return `${arrString[arrString.length - 1]}, ${arrString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
// Código em parceria com Emerson Moreiro && Filho - Tiago
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  let catAttack;

  if (distanceCat1 < 0) {
    distanceCat1 *= (-1);
  } else {
    distanceCat2 *= (-1);
  } if (distanceCat1 < distanceCat2) {
    catAttack = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    catAttack = 'cat2';
  } else {
    catAttack = 'os gatos trombam e o rato foge';
  }
  return catAttack;
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(arrNumber) {
  const newArr = [];
  for (let index = 0; index < arrNumber.length; index += 1) {
    if (arrNumber[index] % 3 === 0 && arrNumber[index] % 5 === 0) {
      newArr.push('fizzBuzz');
    } else if (arrNumber[index] % 5 === 0) {
      newArr.push('buzz');
    } else if (arrNumber[index] % 3 === 0) {
      newArr.push('fizz');
    } else {
      newArr.push('bug!');
    }
  }
  return newArr;
}

// Desafio 9
function encode() {
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
