// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(array) {
  const firstWord = array[0];
  const lastWord = array.pop();
  const wordWrap = ', ';
  const exitValue = lastWord + wordWrap + firstWord;
  return exitValue;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  for (let i = 0; i < wins; i += 1) {
    points += 3;
  }
  for (let i = 0; i < ties; i += 1) {
    points += 1;
  }
  return points;
}

// Desafio 6
function takeBiggestNumberFromArray(array) {
  let biggestNumber = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > biggestNumber) {
      biggestNumber = array[i];
    }
  }
  return biggestNumber;
}

function highestCount(array) {
  const biggestNumber = takeBiggestNumberFromArray(array);
  let biggestNumberAppear = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === biggestNumber) {
      biggestNumberAppear += 1;
    }
  }
  return biggestNumberAppear;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  /* Source: https://stackoverflow.com/questions/4652104/convert-a-negative-number-to-a-positive-one-in-javascript */
  const cat1Distance = Math.abs(cat1 - mouse);
  const cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(array) {
  return array.map((item) => {
    if (item % 3 === 0 && item % 5 === 0) {
      return 'fizzBuzz';
    } if (item % 5 === 0) {
      return 'buzz';
    } if (item % 3 === 0) {
      return 'fizz';
    }
    return 'bug!';
  });
}

// Desafio 9
const changeLettersOrNumbers = (phrase, encoder) => (
  phrase.split('').map((letter) => {
    if (encoder[letter]) {
      return encoder[letter];
    }
    return letter;
  }).join('')
);

function encode(phrase) {
  const encoder = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return changeLettersOrNumbers(phrase, encoder);
}

function decode(phrase) {
  const encoder = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return changeLettersOrNumbers(phrase, encoder);
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
