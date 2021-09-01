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

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let higherNumber = 0;
  let timeRepeated = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > higherNumber) {
      higherNumber = array[i];
    }
    if (arr[index] < 0) {
      maxNumber = arr[index];
    }
  }
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
  } else if (distance1 > distance2) {
    return 'cat2';
  } else {
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
    } else if (array[i] % 5 !== 0 && array[i] % 3 === 0) {
      resultArray.push('fizz');
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
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
  let encode = [];
  for (let i = 0; i < stringSplit.length; i += 1) {
    if (stringSplit[i] === 'a') {
      encode.push(1);
    } else if (stringSplit[i] === 'e') {
      encode.push(2);
    } else if (stringSplit[i] === 'i') {
      encode.push(3);
    } else if (stringSplit[i] === 'o') {
      encode.push(4);
    } else if (stringSplit[i] === 'u') {
      encode.push(5);
    } else {
      encode.push(stringSplit[i]);
    }
  }
  return encode.join('')
}
function decode(string) {
  // seu código aqui
  let stringSplit = string.split('');
  let decode = [];
  for (let i = 0; i < stringSplit.length; i += 1) {
    if (stringSplit[i] == 1) {
      decode.push('a');
    } else if (stringSplit[i] == 2) {
      decode.push('e');
    } else if (stringSplit[i] == 3) {
      decode.push('i');
    } else if (stringSplit[i] == 4) {
      decode.push('o');
    } else if (stringSplit[i] == 5) {
      decode.push('u');
    } else {
      decode.push(stringSplit[i]);
    }
  }
  return decode.join('')
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
