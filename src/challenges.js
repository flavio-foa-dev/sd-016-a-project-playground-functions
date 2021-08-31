// Desafio 1
// Retornar true se ambos os valores forem verdadeiros;
// Retornar false se um ou ambos os parâmetros forem falsos.
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
// Escreva uma função com o nome calcArea que receba um valor de base (chamado base)
// e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// Escreva uma função com o nome splitSentence, a qual receberá uma string
// e retornará uma array de strings separadas por cada espaço na string original.
function splitSentence(sentence) {
  let splittedSentence = sentence.split(" ")
  return splittedSentence;
}

// Desafio 4
// Escreva uma função com o nome concatName que, ao receber uma array de strings,
// retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
function concatName(arrayOfStrings) {
  let firstItem = arrayOfStrings[0];
  let lastItem = arrayOfStrings[arrayOfStrings.length - 1];
  return lastItem + ", " + firstItem;
}

// Desafio 5
// Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins)
// e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.
// Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiesPoints = ties;
  return winPoints + tiesPoints;
}

// Desafio 6
// Escreva uma função chamada highestCount que, ao receber uma array de números,
// retorne a quantidade de vezes que o maior deles se repete.

function highestCount(arrayOfNumbers) {
  let sortedNumbers = arrayOfNumbers.sort((a,b) => b-a);
  let theFirst = sortedNumbers[0];
  let count = 1;

  for (let index = 1; index < sortedNumbers.length; index++) {
    if (theFirst === sortedNumbers[index]) {
      count += 1;
    } else {
      break
    }
  }
  return count;
}

// Desafio 7
// Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2,
// e que ambos estão caçando um mesmo rato chamado mouse.
// Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.
// Sabendo disso, crie uma função chamada catAndMouse que,
// ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e cada um dos gatos,
// em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 === distanceCat2) {
    return "os gatos trombam e o rato foge";
  } else if (distanceCat1 < distanceCat2) {
    return "cat1";
  } else {
    return "cat2";
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
