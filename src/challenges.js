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
function highestCount(numbers) {
  // Função que identifica qual o maior numero e quantas vezes ele se repete
  let higherNumber = numbers[0]
  let countNumber = 0;
  for (let index = 1; index < numbers.lenght; index += 1){
    if (numbers[index] > higherNumber){
      higherNumber = numbers[index]
    }
  }
  for (let index = 0; index < numbers.lenght; index += 1){
    for (let index2 = index+1; index2 < numbers.lenght; index2 += 1){
      if (higherNumber === index2){
        countNumber +=1
      }
    }
  }
  return higherNumber
  return countNumber

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Função que determina qual gato chega primeiro ao rato
  let catPosition1 = cat1;
  let catPosition2 = cat2;
  let mousePostion = mouse;

  if (catPosition1 + mousePostion === mousePostion && catPosition2 - mousePostion === mousePostion){
    return 'os gatos trombam e o rato foge';
  }else if(catPosition2 < catPosition1){
    return 'cat2';
  }else {
    return 'cat1';
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