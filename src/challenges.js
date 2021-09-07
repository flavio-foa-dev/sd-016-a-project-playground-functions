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

function halfFizzBuzz(numArray) {
  for (let index = 0; index < numArray.length; index += 1) {
    if (numArray[index] % 5 === 0) {
      numArray[index] = 'buzz';
    } else if (typeof (numArray[index]) === 'number') {
      numArray[index] = 'bug!';
    }
  }
  return numArray;
}
// Desafio 8
function fizzBuzz(numArray) {
  for (let index = 0; index < numArray.length; index += 1) {
    if (numArray[index] % 3 === 0 && numArray[index] % 5 === 0) {
      numArray[index] = 'fizzBuzz';
    } else if (numArray[index] % 3 === 0) {
      numArray[index] = 'fizz';
    }
  }
  numArray = halfFizzBuzz(numArray);
  return numArray;
}

// Desafio 9
function encode(word) {
  for (let index = 0; index < word.length; index += 1) {
    word = word.replace('a', '1');
    word = word.replace('e', '2');
    word = word.replace('i', '3');
    word = word.replace('o', '4');
    word = word.replace('u', '5');
  }
  return word;
}

function decode(word) {
  for (let index = 0; index < word.length; index += 1) {
    word = word.replace('1', 'a');
    word = word.replace('2', 'e');
    word = word.replace('3', 'i');
    word = word.replace('4', 'o');
    word = word.replace('5', 'u');
  }
  return word;
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
