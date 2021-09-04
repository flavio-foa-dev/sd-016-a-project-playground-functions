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
// Código em parceria com Emerson Moreira && Filho - Tiago
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
function encode(strg) {
  let srtgSplit = strg.split('');
  for (let index = 0; index < strg.length; index += 1) {
    for (let secindex = 0; secindex < strg.length; secindex += 1) {
      if (srtgSplit[index] === 'a') {
        srtgSplit[index] = '1';
      } else if (srtgSplit[index] === 'e') {
        srtgSplit[index] = '2';
      } else if (srtgSplit[index] === 'i') {
        srtgSplit[index] = '3';
      } else if (srtgSplit[index] === 'o') {
        srtgSplit[index] = '4';
      } else if (srtgSplit[index] === 'u') {
        srtgSplit[index] = '5';
      }
    }
  }
  return srtgSplit.join('');
}

function decode(strg) {
  let srtgSplit = strg.split('');
  for (let index = 0; index < strg.length; index += 1) {
    for (let secindex = 0; secindex < strg.length; secindex += 1) {
      if (srtgSplit[index] === '1') {
        srtgSplit[index] = 'a';
      } else if (srtgSplit[index] === '2') {
        srtgSplit[index] = 'e';
      } else if (srtgSplit[index] === '3') {
        srtgSplit[index] = 'i';
      } else if (srtgSplit[index] === '4') {
        srtgSplit[index] = 'o';
      } else if (srtgSplit[index] === '5') {
        srtgSplit[index] = 'u';
      }
    }
  }
  return srtgSplit.join('');
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
