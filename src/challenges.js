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
    let numero1 = numeros[index1];
    for (let index2 in numeros) {
      if (numero1 === numeros[index2]) {
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
