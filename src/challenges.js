// Desafio 1
function compareTrue(x, y) {
  return (x && y);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(palavra) {
  let corte = [];
  corte = (palavra.split(' '));
  return corte
}

// Desafio 4
function concatName(array) {
  let x = array[array.length - 1];
  let y = array[0]
  let unir = (x + ', ' + y);
  return (unir)
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1))
}

// Desafio 6
function highestCount(numeros) {
  let cont = Math.max(...numeros);
  let quant = 0;
  for (let numero in numeros) {
    if (numeros[numero] === cont) {
      quant++;
    }

  }
  return quant;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaoC1 = Math.abs(cat1 - mouse);
  let posicaoC2 = Math.abs(cat2 - mouse);
  let resposta;

  if (posicaoC1 < posicaoC2) {
    resposta = "cat1"
  } else if (posicaoC2 < posicaoC1) {
    resposta = "cat2"
  } else if (posicaoC1 === posicaoC2) {
    resposta = "os gatos trombam e o rato foge"
  };

  return (resposta);
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
