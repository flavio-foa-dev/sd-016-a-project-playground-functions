// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let arraySentence = frase.split(' ');
  return arraySentence;
}

// Desafio 4
function concatName(array) {
  let primeiroItem = array[0];
  let ultimoItem = array[array.length - 1];

  return `${ultimoItem}, ${primeiroItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let maiorNum = Math.max(...array);
  let quantidade = 0;

  for (let i = 0; i <= array.length; i += 1) {
    if (maiorNum === array[i]) {
      quantidade += 1;
    }
  }

  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);

  if (gato1 < gato2) {
    return 'cat1';
  } if (gato2 < gato1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzzAppendix(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return 'fizzBuzz';
  } if (numero % 3 === 0) {
    return 'fizz';
  } if (numero % 5 === 0) {
    return 'buzz';
  }
}

function fizzBuzz(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 || array[i] % 5 === 0) {
      resultado.push(fizzBuzzAppendix(array[i]));
    } else {
      resultado.push('bug!');
    }
  }

  return resultado;
}

// Desafio 9
function encode(string) {
  let codificado = '';
  codificado = string
    .replace(/a/gi, 1)
    .replace(/e/gi, 2)
    .replace(/i/gi, 3)
    .replace(/o/gi, 4)
    .replace(/u/gi, 5);

  return codificado;
}

console.log(encode('hI there!'));

function decode(string) {
  let decodificado = '';
  decodificado = string
    .replace(/1/gi, 'a')
    .replace(/2/gi, 'e')
    .replace(/3/gi, 'i')
    .replace(/4/gi, 'o')
    .replace(/5/gi, 'u');

  return decodificado;
}

console.log(decode('h3 th2r2!'));

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
