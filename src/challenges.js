// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}


// Desafio 3
function splitSentence(frase) {
  return frase.split(" ")
}

// Desafio 4
function concatName(palavras) {
  // seu código aqui
  return palavras[palavras.length - 1] + ", " + palavras[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}



// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maiorNumero = numeros[0];
  let repeticoes = 1;

  for (let indice = 1; indice < numeros.length; indice += 1) {
    if (maiorNumero < numeros[indice]) {
      maiorNumero = numeros[indice];
      repeticoes = 1;
    }
    else if (maiorNumero === numeros[indice]) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

//
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

