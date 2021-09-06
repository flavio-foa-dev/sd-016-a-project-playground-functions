// Desafio 1
/* JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são verdadeiros, e retorna false se algum dos valores não o f */
function compareTrue(valueOne, valueTwo) {
  if (valueOne && valueTwo) {
    return true;
  }
  return false;
}

// Desafio 2
/* Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área. */
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
/* Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original. */
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
/* Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array. */
function concatName(arrStr) {
  let firstName = arrStr[0];
  let secondName = '';
  for (let index = 0; index < arrStr.length; index += 1) {
    if (index === arrStr.length - 1) {
      secondName = arrStr[index];
    }
  }
  return `${secondName}, ${firstName}`;
}

// Desafio 5
/* Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato. */
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
/* Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete. */
function returnHigh(arrayNumber) {
  let hightValue = arrayNumber[0];
  for (let number of arrayNumber) {
    if (number > hightValue) {
      hightValue = number;
    }
  }
  return hightValue;
}

function highestCount(arrayNumber) {
  let count = 0;
  for (let number of arrayNumber) {
    if (returnHigh(arrayNumber) === number) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
/* Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão caçando um mesmo rato chamado mouse. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número. */
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
/* Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!"; */
function fizzBuzzTest(arr) {
  if (arr % 3 === 0 && arr % 5 === 0) {
    return 'fizzBuzz';
  } if (arr % 5 === 0) {
    return 'buzz';
  } if (arr % 3 === 0) {
    return 'fizz';
  }
  return 'bug!';
}

function fizzBuzz(arrayNumber) {
  const newCollection = [];
  for (let index = 0; index < arrayNumber.length; index += 1) {
    newCollection.push(fizzBuzzTest(arrayNumber[index]));
  }
  return newCollection;
}

// Desafio 9
/* Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir: */
function encode(str) {
  let strSplit = str;
  const vogais = ['a', 'e', 'i', 'o', 'u'];

  for (let index = 0; index < str.length; index += 1) {
    for (let secIndex = 0; secIndex < vogais.length; secIndex += 1) {
      strSplit = strSplit.replace(vogais[index], index + 1);
    }
  }
  return strSplit;
}

function decode(str) {
  let strSplit = str;
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < str.length; index += 1) {
    for (let secIndex = 0; secIndex < vogais.length; secIndex += 1) {
      strSplit = strSplit.replace(index + 1, vogais[index]);
    }
  }
  return strSplit;
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
