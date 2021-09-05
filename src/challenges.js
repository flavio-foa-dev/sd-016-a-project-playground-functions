// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let firstName = array[0];
  const string = ', ';
  let lastName = array[array.length - 1];
  let concat = lastName.concat(string).concat(firstName);
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let math = wins * 3 + ties;
  return math;
}

// Desafio 6
function highestCount() {
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1Wins = 'cat1';
  const cat2Wins = 'cat2';
  const mouseWins = 'os gatos trombam e o rato foge';
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return mouseWins;
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return cat1Wins;
  } else {
    return cat2Wins;
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let crypto = [];
  for (let key in arrayNumeros) {
    if (arrayNumeros[key] % 3 === 0 && arrayNumeros[key] % 5 === 0) {
      crypto.push('fizzBuzz');
    } else if (arrayNumeros[key] % 3 === 0) {
      crypto.push('fizz');
    } else if (arrayNumeros[key] % 5 === 0) {
      crypto.push('buzz');
    } else {
      crypto.push('bug!');
    }
  }
  return crypto;
}

// Desafio 9
function encode(string) {
  let newString = string.split('');
  let codigo = [];
  for (let i in newString) {
    if (newString[i] === 'a') {
      newString[i] = 1;
    } if (newString[i] === 'e') {
      newString[i] = 2;
    } if (newString[i] === 'i') {
      newString[i] = 3;
    } if (newString[i] === 'o') {
      newString[i] = 4;
    } if (newString[i] === 'u') {
      newString[i] = 5;
    }
    codigo = newString.join('');
  }
  return codigo;
}

function decode(string) {
  let oldString = string.split('');
  let finalString = [];
  for (let i in oldString) {
    if (oldString[i] === '1') {
      oldString[i] = 'a';
    } if (oldString[i] === '2') {
      oldString[i] = 'e';
    } if (oldString[i] === '3') {
      oldString[i] = 'i';
    } if (oldString[i] === '4') {
      oldString[i] = 'o';
    } if (oldString[i] === '5') {
      oldString[i] = 'u';
    }
    finalString = oldString.join('');
  }
  return finalString;
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
