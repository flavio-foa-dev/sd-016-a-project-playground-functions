/* eslint-disable complexity */
/* eslint-disable guard-for-in */
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = ' pontos';
  return 3 * wins + ties + pontos;
}

// Desafio 6
function highestCount(numeros) {
  let contagem = 0;
  let maiorContagem = 0;
  for (let index1 = 0; index1 < numeros.length; index1 += 1) {
    for (let index2 in numeros) {
      if (numeros[index1] === numeros[index2]) {
        contagem += 1;
      }
    }
    if (contagem > maiorContagem) {
      maiorContagem = contagem;
    }
    contagem = 0;
  }

  return maiorContagem;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 > distance2) {
    return 'cat2';
  }
  if (distance1 < distance2) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeros) {
  let resultado = [];
  for (let index in numeros) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (numeros[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (numeros[index] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }

  return resultado;
}

// Desafio 9
function encode(frase) {
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] === 'a') {
      frase = frase.replace('a', '1');
    }
    if (frase[index] === 'e') {
      frase = frase.replace('e', '2');
    }
    if (frase[index] === 'i') {
      frase = frase.replace('i', '3');
    }
    if (frase[index] === 'o') {
      frase = frase.replace('o', '4');
    }
    if (frase[index] === 'u') {
      frase = frase.replace('u', '5');
    }
  }
  return frase;

function decode(frase) {
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] === '1') {
      frase = frase.replace('1', 'a');
    }
    if (frase[index] === '2') {
      frase = frase.replace('2', 'e');
    }
    if (frase[index] === '3') {
      frase = frase.replace('3', 'i');
    }
    if (frase[index] === '4') {
      frase = frase.replace('4', 'o');
    }
    if (frase[index] === '5') {
      frase = frase.replace('5', 'u');
    }
  }
  return frase;
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
