// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  let result = false;
  if (bool1 && bool2) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + ties;
  return points;
}

function getHigherNumber(array) {
  let higherNumber = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > higherNumber) {
      higherNumber = array[i];
    }
    if (array[i] < 0) {
      higherNumber = array[i];
    }
  }
  return higherNumber;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let higherNumber = getHigherNumber(array);
  let timeRepeated = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === higherNumber) {
      timeRepeated += 1;
    }
  }
  return timeRepeated;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance1 = mouse - cat1;
  let distance2 = mouse - cat2;

  if (cat1 > mouse) {
    distance1 = cat1 - mouse;
  }
  if (cat2 > mouse) {
    distance2 = cat2 - mouse;
  }
  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance1 > distance2) {
    return 'cat2';
  }
  if (distance2 === distance1) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resultArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 5 === 0 && array[i] % 3 === 0) {
      resultArray.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      resultArray.push('fizz');
    } else if (array[i] % 5 === 0) {
      resultArray.push('buzz');
    } else {
      resultArray.push('bug!');
    }
  }
  return resultArray;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let stringSplit = string.split('');
  let encodeArray = [];
  for (let i = 0; i < stringSplit.length; i += 1) {
    if (stringSplit[i] === 'a') {
      encodeArray.push(1);
    } else if (stringSplit[i] === 'e') {
      encodeArray.push(2);
    } else if (stringSplit[i] === 'i') {
      encodeArray.push(3);
    } else if (stringSplit[i] === 'o') {
      encodeArray.push(4);
    } else if (stringSplit[i] === 'u') {
      encodeArray.push(5);
    } else {
      encodeArray.push(stringSplit[i]);
    }
  }
  return encode.join('');
}
function decode(string) {
  // seu código aqui
  let stringSplit = string.split('');
  let decodeString = [];
  for (let i = 0; i < stringSplit.length; i += 1) {
    if (stringSplit[i] === '1') {
      decodeString.push('a');
    } else if (stringSplit[i] === '2') {
      decodeString.push('e');
    } else if (stringSplit[i] === '3') {
      decodeString.push('i');
    } else if (stringSplit[i] === '4') {
      decodeString.push('o');
    } else if (stringSplit[i] === '5') {
      decodeString.push('u');
    } else {
      decodeString.push(stringSplit[i]);
    }
  }
  return decode.join('');
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
