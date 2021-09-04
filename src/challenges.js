// Desafio 1
function compareTrue(um, dois) {
  let result = false;
  if (um === true && dois === true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, altura) {
  let calculo = (base * altura) / 2;

  return calculo;
}

// Desafio 3
function splitSentence(text) {
  let palavras = text.split(' ');
  return palavras;
}

// Desafio 4
function concatName(nomes) {
  let nomes2 = nomes[nomes.length - 1] + ', ' + nomes[0];
  return nomes2;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuação = (wins * 3) + (ties * 1);
  return pontuação;
}

// Desafio 6
function highestCount(conjunto) {
  let contagem = 1;
  let maiorNumero = -100;
  for(let index = 0; index < conjunto.length; index = index + 1){
    if (conjunto[index] > maiorNumero){
      maiorNumero = conjunto[index]
      contagem = 1
     } else if (maiorNumero === conjunto[index]) {
      contagem = contagem + 1
       }
    }
    return contagem
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
