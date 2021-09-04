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
  for (let index = 0; index < conjunto.length; index = index + 1) {
    if (conjunto[index] > maiorNumero) {
      maiorNumero = conjunto[index];
      contagem = 1;
      } else if (maiorNumero === conjunto[index]) {
      contagem = contagem + 1
   }
  }
  return contagem;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2, ) {
  let discat1 = math.abs(mouse) - math.abs(cat1)
  let discat2 = math.abs(mouse) - math.abs(cat2)

  if (discat1 === discat2){
    return "os gatos trombam e o rato foge"
   } else if (discat1 > discat2){
    return "cat1"
   }else if (discat2 > discat1){
    return "cat2"
   }
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
