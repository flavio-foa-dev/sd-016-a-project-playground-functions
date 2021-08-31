// Desafio 1
function compareTrue(val1, val2) {
  return val1 && val2;
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
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arr) {
  let highest = -100;
  let times = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === highest) {
      times += 1;
    }
  }
  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(cat1) - Math.abs(mouse) < Math.abs(cat2) - Math.abs(mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat1) - Math.abs(mouse) > Math.abs(cat2) - Math.abs(mouse)) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 !== 0 && arr[i] % 5 !== 0) {
      arr[i] = 'bug!';
    } else if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      arr[i] = 'fizzBuzz';
    } else if (arr[i] % 3 === 0) {
      arr[i] = 'fizz';
    } else if (arr[i] % 5 === 0) {
      arr[i] = 'buzz';
    }
  }
  return arr;
}

// Desafio 9
function encode(str) {
  let newString = str.split('');
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === 'a') {
      newString[i] = '1';
    } else if (newString[i] === 'e') {
      newString[i] = '2';
    } else if (newString[i] === 'i') {
      newString[i] = '3';
    } else if (newString[i] === 'o') {
      newString[i] = '4';
    } else if (newString[i] === 'u') {
      newString[i] = '5';
    }
  }
  return newString.join('');
}

function decode(str) {
  let newString = str.split('');
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === '1') {
      newString[i] = 'a';
    } else if (newString[i] === '2') {
      newString[i] = 'e';
    } else if (newString[i] === '3') {
      newString[i] = 'i';
    } else if (newString[i] === '4') {
      newString[i] = 'o';
    } else if (newString[i] === '5') {
      newString[i] = 'u';
    }
  }
  return newString.join('');
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
