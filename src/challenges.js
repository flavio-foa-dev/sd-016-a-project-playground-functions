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
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
