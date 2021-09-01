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
  let exitValue = [];
  for (let i = 0; i < array.length; i += 1) {
    const currentValue = array[i];
    if (currentValue % 3 === 0 && currentValue % 5 === 0) {
      exitValue.push('fizzBuzz');
    } else if (currentValue % 5 === 0) {
      exitValue.push('buzz');
    } else if (currentValue % 3 === 0) {
      exitValue.push('fizz');
    } else {
      exitValue.push('bug!');
    }
  }
  return exitValue;
}

// Desafio 9
function encode(phrase) {
  for (let i = 0; i < phrase.length; i += 1) {
    switch(phrase[i]) {
    case 'a':
      phrase = phrase.replace('a', '1');
      break;
    case 'e':
      phrase = phrase.replace('e', '2');
      break;
    case 'i':
      phrase = phrase.replace('i', '3');
      break;
    case 'o':
      phrase = phrase.replace('o', '4');
      break;
    case 'u':
      phrase = phrase.replace('u', '5');
      break;
    }
  }
  return phrase;
}
function decode(phrase) {
  for (let i = 0; i < phrase.length; i += 1) {
    switch(phrase[i]) {
    case '1':
      phrase = phrase.replace('1', 'a');
      break;
    case '2':
      phrase = phrase.replace('2', 'e');
      break;
    case '3':
      phrase = phrase.replace('3', 'i');
      break;
    case '4':
      phrase = phrase.replace('4', 'o');
      break;
    case '5':
      phrase = phrase.replace('5', 'u');
      break;
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
