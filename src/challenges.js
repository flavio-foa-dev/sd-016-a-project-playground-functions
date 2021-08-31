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
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = (mouse - cat1);
  let distanciaCat2 = mouse - cat2;

 if (distanciaCat1 < 0){
   distanciaCat1 = distanciaCat1 * (-1);
 }

 if (distanciaCat2 < 0){
  distanciaCat2 = distanciaCat2 * (-1);
}

  if (distanciaCat1 < distanciaCat2){
    return "cat1"
  } else if ( distanciaCat1 > distanciaCat2){
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
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
