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

  console.log(gato1, gato2);

  if (gato1 < gato2) {
    return 'cat1';
  } if (gato2 < gato1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

console.log(catAndMouse(20, -3, 435));

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

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
