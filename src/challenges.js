// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');
  return string;
}

// Desafio 4
function concatName(name) {
  let PRIMEIRO_ITEM = name[0];
  let ULTIMO_ITEM = name[name.length - 1];
  let concat = ULTIMO_ITEM + PRIMEIRO_ITEM;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function highestCount(array) {
  let big = array[0];
  let repeat = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > big) {
      big = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === big) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let position1 = Math.abs(mouse - cat1);
  let position2 = Math.abs(mouse - cat2);
  if (position1 > position2) {
    return 'cat2';
  } else if (position2 > position1) {
    return 'cat1';
  } else if (position1 === position2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(comp) {
  let number = 0;
  let resultado = [];
  for (let i = 0; i < comp.length; i += 1) {
    number = comp[i];
    if (number % 3 === 0 && number % 5 === 0) {
      resultado[i] = 'fizzBuzz';
    } else if (number % 5 === 0) {
      resultado[i] = 'buzz';
    } else if (number % 3 === 0) {
      resultado[i] = 'fizz';
    } else {
      resultado[i] = 'bug!';
    }
  }
  return resultado;
}

// Desafio 9
function encode(cript) {
  cript = cript.replace(/a/g, '1');
  cript = cript.replace(/e/g, '2');
  cript = cript.replace(/i/g, '3');
  cript = cript.replace(/o/g, '4');
  cript = cript.replace(/u/g, '5');
  return cript;
}
function decode(decrypt) {
  decrypt = decrypt.replace(/1/g, 'a');
  decrypt = decrypt.replace(/2/g, 'e');
  decrypt = decrypt.replace(/3/g, 'i');
  decrypt = decrypt.replace(/4/g, 'o');
  decrypt = decrypt.replace(/5/g, 'u');
  return decrypt;
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