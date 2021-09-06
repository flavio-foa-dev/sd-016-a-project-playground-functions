// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne === true && valueTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayWords = sentence.split(' ');
  return arrayWords;
}

// Desafio 4
function concatName(arrayWords) {
  let lastItem = arrayWords[arrayWords.length - 1];
  let firstItem = arrayWords[0];
  let stringWords = '';
  stringWords = `${lastItem}, ${firstItem}`;
  return stringWords;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  let cont = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > highestNumber) {
      highestNumber = arrayNumbers[i];
      cont = 1;
    } else if (highestNumber === arrayNumbers[i]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = cat1 - mouse;
  let distanceMouseCat2 = cat2 - mouse;
  let msg;
  if (distanceMouseCat1 < 0) {
    distanceMouseCat1 *= (-1);
  } else if (distanceMouseCat2 < 0) {
    distanceMouseCat2 *= (-1);
  }
  if (distanceMouseCat1 < distanceMouseCat2) {
    msg = 'cat1';
  } else if (distanceMouseCat2 < distanceMouseCat1) {
    msg = 'cat2';
  } else {
    msg = 'os gatos trombam e o rato foge';
  }
  return msg;
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayreturn = [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    let divisionFor3 = arrayNumbers[i] % 3;
    let divisionFor5 = arrayNumbers[i] % 5;
    let word = 'bug!';
    if (divisionFor5 === 0) {
      if (divisionFor3 === 0) {
        word = 'fizzBuzz';
      } else {
        word = 'buzz';
      }
    } else if (divisionFor3 === 0) {
      word = 'fizz';
    }
    arrayreturn.push(word);
  }
  return arrayreturn;
}

// Desafio 9
function encode(phrase) {
  let phraseReturn = phrase;
  let letterEncode = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  phraseReturn = phraseReturn.replace(/a/g, letterEncode.a);
  phraseReturn = phraseReturn.replace(/e/g, letterEncode.e);
  phraseReturn = phraseReturn.replace(/i/g, letterEncode.i);
  phraseReturn = phraseReturn.replace(/o/g, letterEncode.o);
  phraseReturn = phraseReturn.replace(/u/g, letterEncode.u);
  return phraseReturn;
}

function decode(phrase) {
  let phraseReturn2 = phrase;
  let numberDecode = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  phraseReturn2 = phraseReturn2.replace(/1/g, numberDecode[1]);
  phraseReturn2 = phraseReturn2.replace(/2/g, numberDecode[2]);
  phraseReturn2 = phraseReturn2.replace(/3/g, numberDecode[3]);
  phraseReturn2 = phraseReturn2.replace(/4/g, numberDecode[4]);
  phraseReturn2 = phraseReturn2.replace(/5/g, numberDecode[5]);
  return phraseReturn2;
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
