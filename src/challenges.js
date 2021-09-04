// Desafio 1
// Retornar true se ambos os valores forem verdadeiros;
// Retornar false se um ou ambos os parâmetros forem falsos.
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
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
  let splittedSentence = sentence.split(' ');
  return splittedSentence;
}

// Desafio 4
// Escreva uma função com o nome concatName que, ao receber uma array de strings,
// retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
function concatName(arrayOfStrings) {
  let firstItem = arrayOfStrings[0];
  let lastItem = arrayOfStrings[arrayOfStrings.length - 1];
  return lastItem + ', ' + firstItem;
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
  let sortedNumbers = arrayOfNumbers.sort((a, b) => b - a);
  let theFirst = sortedNumbers[0];
  let count = 1;

  for (let index = 1; index < sortedNumbers.length; index++) {
    if (theFirst === sortedNumbers[index]) {
      count += 1;
    } else {
      break;
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
    return 'os gatos trombam e o rato foge';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
// Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:
// Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
// Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
// Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
// Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
function fizzBuzz(arrOfNumbers) {
  let result = [];

  for (let index = 0; index < arrOfNumbers.length; index++) {
    let currentNumber = arrOfNumbers[index];

    if (currentNumber % 3 !== 0 && currentNumber % 5 !== 0) {
      result.push('bug!');
    } else if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      result.push('fizzBuzz');
    } else if (currentNumber % 3 === 0) {
      result.push('fizz');
    } else if (currentNumber % 5 === 0) {
      result.push('buzz');
    }
  }
  return result;
}

// Desafio 9
// Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro,
// deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
function encode(stringToEncode) {
  let A = stringToEncode.replace(/a/g, 1);
  let E = A.replace(/e/g, 2);
  let I = E.replace(/i/g, 3);
  let O = I.replace(/o/g, 4);
  let encoded = O.replace(/u/g, 5);
  return encoded;
}

// A segunda função deverá se chamar decode e faz o contrário de encode -
// ou seja, recebe uma string contendo números no lugar de letras minúsculas
// e retornará uma string com vogais minúsculas no lugar dos números
// (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").
function decode(stringToDecode) {
  let s1 = stringToDecode.replace(/1/g, 'a');
  let s2 = s1.replace(/2/g, 'e');
  let s3 = s2.replace(/3/g, 'i');
  let s4 = s3.replace(/4/g, 'o');
  let decoded = s4.replace(/5/g, 'u');
  return decoded;
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
