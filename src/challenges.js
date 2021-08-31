// Desafio 1
function compareTrue(firstValue, secondValue) {
  //criar função para verificar se ambos os parametros são verdadeiros.
  if (firstValue === true && secondValue === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // função que calcula area de um triangulo
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // Função que separa uma string em Array
  let array = string.split(' ')
  return array;
}

// Desafio 4
function concatName(arrayInvert) {
  // Função que inverte a ordem dos elementos de um array
  
  //variavel que inverte a posição dos elementos do array
  let reverse = arrayInvert.reverse();
  //variavel que seleciona o primeiro item do array
  let first = arrayInvert[0];
  //varivel que seleciona o ultimo item do array
  let last = arrayInvert.pop();
  //variavel que une os dois arrays em uma string
  let join = first + ', '+ last;
  
  return join;

}

// Desafio 5
function footballPoints(wins=0, ties=0) {
  // função que calcula a quantidade de pontos no futebol
 winPoints = (wins * 3);
 socrePoints = (winPoints + ties);
 return socrePoints;
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
