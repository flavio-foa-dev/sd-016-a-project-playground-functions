// Desafio 1
function compareTrue(firstBool, secondBool) {
  if (firstBool && secondBool) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let firstElement = arrayOfStrings[0];
  let lastElement = arrayOfStrings[arrayOfStrings.length - 1];
  let newString = lastElement + ', ' + firstElement;

  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = numberArray[0];
  let highestNumberRepetitions = 0;

  for (let number of numberArray) {
    if (highestNumber < number) {
      highestNumber = number;
      highestNumberRepetitions = 1;
    } else if (highestNumber === number) {
      highestNumberRepetitions += 1;
    }
  }

  return highestNumberRepetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  function negativeToPositive(cat) {
    let distanciaMouse = mouse - cat;

    if (distanciaMouse < 0) {
      distanciaMouse *= -1;
    }
    return distanciaMouse;
  }
  let distanciaMouseCat1 = negativeToPositive(cat1);
  let distanciaMouseCat2 = negativeToPositive(cat2);
  if (distanciaMouseCat1 < distanciaMouseCat2) {
    return 'cat1';
  } else if (distanciaMouseCat2 < distanciaMouseCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numberArray) {
  let newArray = [];
  for (let number of numberArray) {
    if (number % 3 === 0 && number % 5 !== 0) {
      newArray.push('fizz');
    } else if (number % 3 !== 0 && number % 5 === 0) {
      newArray.push('buzz');
    } else if (number % 3 === 0 && number % 5 === 0) {
      newArray.push('fizzBuzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  let arrayStringCharacters = [];
  let newString = '';
  for (let character of string) {
    if (character === 'a') {
      arrayStringCharacters.push('1');
    } else if (character === 'e') {
      arrayStringCharacters.push('2');
    } else if (character === 'i') {
      arrayStringCharacters.push('3');
    } else if (character === 'o') {
      arrayStringCharacters.push('4');
    } else if (character === 'u') {
      arrayStringCharacters.push('5');
    } else {
      arrayStringCharacters.push(character);
    }
  }

  for (let element of arrayStringCharacters) {
    newString += element;
  }

  return newString;
}

function decode(string) {
  let arrayStringCharacters = [];
  let newString = '';
  for (let character of string) {
    if (character === '1') {
      arrayStringCharacters.push('a');
    } else if (character === '2') {
      arrayStringCharacters.push('e');
    } else if (character === '3') {
      arrayStringCharacters.push('i');
    } else if (character === '4') {
      arrayStringCharacters.push('o');
    } else if (character === '5') {
      arrayStringCharacters.push('u');
    } else {
      arrayStringCharacters.push(character);
    }
  }

  for (let element of arrayStringCharacters) {
    newString += element;
  }

  return newString;
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
