// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ');
}

// Desafio 4
function concatName(stringArr) {
  // seu código aqui
  return `${stringArr[stringArr.length - 1]}, ${stringArr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numArr) {
  // seu código aqui
  const counter = {};
  let maxNum = -Infinity;
  let numRepetition = 0;

  for (let i = 0; i < numArr.length; i += 1) {
    if (counter[numArr[i]]) counter[numArr[i]] += 1;
    else counter[numArr[i]] = 1;
  }
  for (const key in counter) {
    if (key > maxNum) {
      maxNum = key;
      numRepetition = counter[key];
    }
  }
  return numRepetition;
}
highestCount([-2, -2, -1]);
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) return 'cat1';
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numArr) {
  // seu código aqui
  for (let i = 0; i < numArr.length; i += 1) {
    if (numArr[i] % 5 === 0 && numArr[i] % 3 === 0) numArr[i] = 'fizzBuzz';
    else if (numArr[i] % 5 === 0) numArr[i] = 'buzz';
    else if (numArr[i] % 3 === 0) numArr[i] = 'fizz';
    else numArr[i] = 'bug!';
  }
  return numArr;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let letters = [...string];
  function checkLetter(letter) {
    const vogals = ['a', 'e', 'i', 'o', 'u'];
    return vogals.includes(letter);
  }
  function returnValue(letter) {
    switch (letter) {
      case 'a':
        return 1;
      case 'e':
        return 2;
      case 'i':
        return 3;
      case 'o':
        return 4;
      default:
        return 5;
    }
  }
  for (let i = 0; i < letters.length; i += 1) {
    if (checkLetter(letters[i])) letters[i] = returnValue(letters[i]);
  }
  return letters.join('');
}
function decode(string) {
  // seu código aqui
  let letters = [...string];
  function checkLetter(letter) {
    const nums = ['1', '2', '3', '4', '5'];
    return nums.includes(letter);
  }
  function returnValue(letter) {
    switch (letter) {
      case '1':
        return 'a';
      case '2':
        return 'e';
      case '3':
        return 'i';
      case '4':
        return 'o';
      default:
        return 'u';
    }
  }
  for (let i = 0; i < letters.length; i += 1) {
    if (checkLetter(letters[i])) letters[i] = returnValue(letters[i]);
  }
  return letters.join('');
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
