// Desafio 1
function compareTrue(val1, val2) {
  let comparator = false;
  if (val1 === true && val2 === true) {
    comparator = true;
  }
  return comparator;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = [''];
  let index = 0;
  for (let x = 0; x < string.length; x += 1) {
    if (string[x] === ' ') {
      index += 1;
      array[index] = '';
    } else {
      array[index] += string[x];
    }
  }
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let size = array.length - 1;
  let string = `${array[size]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(array) {
  let counter = 0;
  let higherNumber;
  let higherNumberRepeat = 0;
  for (let x = 0; x < array.length; x += 1) {
    counter = 0;
    for (let y = 0; y < array.length; y += 1) {
      if (array[x] >= array[y]) {
        counter += 1;
      }
    }
    if (counter === array.length) {
      higherNumber = array[x];
    }
  }
  for (let x = 0; x < array.length; x += 1) {
    if (array[x] === higherNumber) {
      higherNumberRepeat += 1;
    }
  }
  return higherNumberRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let deltaCat1 = mouse - cat1;
  let deltaCat2 = mouse - cat2;
  if (deltaCat1 < 0) {
    deltaCat1 *= (-1);
  }
  if (deltaCat2 < 0) {
    deltaCat2 *= (-1);
  }
  if (deltaCat1 < deltaCat2) {
    return 'cat1';
  }
  if (deltaCat1 > deltaCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let afterMath = [];
  for (let x = 0; x < array.length; x += 1) {
    if ((array[x] % 3 === 0) && (array[x] % 5 === 0)) {
      afterMath.push('fizzBuzz');
    } else if (array[x] % 5 === 0) {
      afterMath.push('buzz');
    } else if (array[x] % 3 === 0) {
      afterMath.push('fizz');
    } else {
      afterMath.push('bug!');
    }
  }
  return afterMath;
}

// Desafio 9
function encode(string) {
  let encoder = '';
  for (let x = 0; x < string.length; x += 1) {
    if (string[x] === 'a') {
      encoder += '1';
    } else if (string[x] === 'e') {
      encoder += '2';
    } else if (string[x] === 'i') {
      encoder += '3';
    } else if (string[x] === 'o') {
      encoder += '4';
    } else if (string[x] === 'u') {
      encoder += '5';
    } else {
      encoder += string[x];
    }
  }
  return encoder;
}

function decode(string) {
  let decoder = '';
  for (let x = 0; x < string.length; x += 1) {
    if (string[x] === '1') {
      decoder += 'a';
    } else if (string[x] === '2') {
      decoder += 'e';
    } else if (string[x] === '3') {
      decoder += 'i';
    } else if (string[x] === '4') {
      decoder += 'o';
    } else if (string[x] === '5') {
      decoder += 'u';
    } else {
      decoder += string[x];
    }
  }
  return decoder;
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
