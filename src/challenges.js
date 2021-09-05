// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne && valueTwo) {
    return true;
  }
  return false;
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
function concatName(arrStr) {
  let firstName = arrStr[0];
  let secondName = '';
  for (let index = 0; index < arrStr.length; index += 1) {
    if (index === arrStr.length - 1) {
      secondName = arrStr[index];
    }
  }
  return `${secondName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6

function returnHigh(arrayNumber) {
  let hightValue = arrayNumber[0];
  for (let number of arrayNumber) {
    if (number > hightValue) {
      hightValue = number;
    }
  }
  return hightValue;
}

function highestCount(arrayNumber) {
  let count = 0;
  for (let number of arrayNumber) {
    if (returnHigh(arrayNumber) === number) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8

function fizzBuzz(arrayNumber) {
  const newCollection = [];
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0) {
      newCollection.push('fizzBuzz');
    } else if (arrayNumber[index] % 5 === 0) {
      newCollection.push('buzz');
    } else if (arrayNumber[index] % 3 === 0) {
      newCollection.push('fizz');
    } else {
      newCollection.push('bug!');
    }
  }
  return newCollection;
}

// Desafio 9
function encode(str) {
  let strSplit = str.split('');
  const vogais = ['a', 'e', 'i', 'o', 'u'];

  for (let index = 0; index < strSplit.length; index += 1) {
    for (let secIndex = 0; secIndex < vogais.length; secIndex += 1) {
      if (strSplit[index] === vogais[secIndex]) {
        strSplit[index] = secIndex + 1;
      }
    }
  }
  return strSplit.join('');
}

function decode(str) {
  let strSplit = str.split('');
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < strSplit.length; index += 1) {
    for (let secIndex = 0; secIndex < vogais.length; secIndex += 1) {
      if (strSplit[index] === String(secIndex + 1)) {
        strSplit[index] = vogais[secIndex];
      }
    }
  }
  return strSplit.join('');
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
