// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2
}

// Desafio 3
function splitSentence(string) {
  let array = []
  array = string.split(' ')
  return array
}

// Desafio 4'
function concatName(array) {
  let resultado = []
  resultado = array[array.length - 1] + ', ' + array[0];
  return resultado
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointWins = wins * 3;
  let resultado = pointWins + ties;
  return resultado
}

// Desafio 6 :
function highestCount(array) {
  let result = 0;
  let maxNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (maxNumber < array[index]) {
      maxNumber = array[index]
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (maxNumber === array[i]) {
      result += 1;
    }
  }
  return result
}

// Desafio 7
function catAndMouse(cat1, cat2) {
  let mause = 1;
  let distance1 = cat1 - mause;
  let distance2 = cat2 - mause;
  if (distance1 < distance2) {
    return 'cat1'
  } else if (distance1 > distance2) {
    return 'cat2'
  } else {
    return "os gatos trombam e o rato foge."
  }
}

// Desafio 8
function fizzBuzz(valory) {
  let result = [];
  for (let counter = 0; counter < valory.length; counter += 1) {
    if (valory[counter] % 3 === 0 && valory[counter] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (valory[counter] % 5 === 0) {
      result.push('buzz');
    } else if (valory[counter] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug !')
    }
  }
  return result
}

// Desafio 9
function encode(string) {
  let nameNumber = ' ';
  for (i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      nameNumber += 1;
    } else if (string[i] === 'e') {
      nameNumber += 2;
    } else if (string[i] === 'i') {
      nameNumber += 3;
    } else if (string[i] === 'o') {
      nameNumber += 4;
    } else if (string[i] === 'u') {
      nameNumber += 5;
    } else {
      nameNumber += string[i];
    }
  }
  return nameNumber
}

function decode(nameNumber) {
  let dename = ' ';
  for (i = 0; i < nameNumber.length; i += 1) {
    if (nameNumber[i] === '1') {
      dename += 'a';
    } else if (nameNumber[i] === '2') {
      dename += 'e';
    } else if (nameNumber[i] === '3') {
      dename += 'i';
    } else if (nameNumber[i] === '4') {
      dename += 'o';
    } else if (nameNumber[i] === '5') {
      dename += 'u';
    } else {
      dename += nameNumber[i];
    }
  }
  return dename
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
