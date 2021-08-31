// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base*height/2);
  return resultado;
}

// Desafio 3
function splitSentence(frase) {
  let retorno = frase.split(/[\s,]+/); // https://blog.betrybe.com/javascript/javascript-split/ varrerá a string em busca de caractere de espaço.
  return retorno;
}

// Desafio 4
function concatName(arr) {
  let primeiro = arr.shift();
  let ultimo = arr.pop();

  return (ultimo + ", " + primeiro);
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = ((3 * wins) + (1 * ties));

  return totalPontos;
}

// Desafio 6
function highestCount(numbers) {
  let maiorValor = numbers[0];
  let qtd = 0;
  for (let key in numbers){
    if (numbers[key] > maiorValor){
      maiorValor = numbers[key];
    }
  }
  for (let key in numbers){
    if (maiorValor === numbers[key]){
      qtd += 1
    }
  }
  return qtd;
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
