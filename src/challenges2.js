// Desafio 10
// Crie uma função que recebe um array de nomes de tecnologias que você quer aprender.
// Essa função deve receber também um segundo parâmetro chamado name com um nome.
// Para cada tecnologia no array, crie um objeto com a seguinte estrutura:
// {
//   tech: "NomeTech",
//   name: name
// }
// Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.
// A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.
function techList(listOfTechs, name) {
  let orderedList = listOfTechs.sort();
  let finalList = [];

  if (orderedList.length === 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < orderedList.length; index++) {
      let newObject = {
        tech: orderedList[index],
        name: name,
      };
      finalList.push(newObject);
    }
    return finalList;
  }
}

// Desafio 11
// Crie uma função chamada generatePhoneNumber que receba uma array com 11 números
// e retorne um número de telefone, respeitando parênteses, traços e espaços.
// Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
// generatePhoneNumber deverá retornar (12) 34567-8901.
// Se a função receber um array com tamanho diferente de 11,
// a mesma deve retornar "Array com tamanho incorreto.".
// Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais,
// generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".
function checkForThree(numbers) {
  // .sort() altera o array original
  // . slice() cria uma nova instância do array
  let sortedNumbers = numbers.slice().sort();
  let count = 1;

  for (let index = 0; index < sortedNumbers.length; index++) {
    let currentNumber = sortedNumbers[index];
    let numberToBeEvaluated = sortedNumbers[index + 1];

    if (currentNumber === numberToBeEvaluated) {
      count += 1;
      if (count > 2) {
        return false;
      }
    } else {
      numberToBeEvaluated = currentNumber;
      count = 1;
    }
  }
}

function checkForIncorrectNumbers(numbersForCheck) {
  for (let index = 0; index < numbersForCheck.length; index++) {
    let currentNumber = numbersForCheck[index];

    if (currentNumber < 0 || currentNumber > 9) {
      return false;
    }
  }
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (
    checkForThree(numbers) === false ||
    checkForIncorrectNumbers(numbers) === false
  ) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let phonePattern = [
    '(',
    '*',
    '*',
    ')',
    ' ',
    '*',
    '*',
    '*',
    '*',
    '*',
    '-',
    '*',
    '*',
    '*',
    '*',
  ];
  let finishedNumber = '';
  let numbersIndex = 0;

  for (let index = 0; numbersIndex < numbers.length; index++) {
    let patternIndex = phonePattern[index];
    if (patternIndex !== '*') {
      finishedNumber += patternIndex;
    } else {
      finishedNumber += numbers[numbersIndex];
      numbersIndex++;
    }
  }
  return finishedNumber;
}

// Desafio 12
// Um triângulo é composto de três linhas: lineA, lineB e lineC.
// Crie uma função chamada triangleCheck que deverá receber as três linhas como parâmetro
// e retornar se é possível formar um triângulo com os valores apresentados de cada linha.
// Para tanto, tenha em mente algumas considerações:
// Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados
// seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.
// Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.
// O retorno da sua função deverá ser um booleano.
function triangleCheck(lineA, lineB, lineC) {
  let a = lineA;
  let b = lineB;
  let c = lineC;

  conditionA = a < b + c;
  conditionB = b < a + c;
  conditionC = c < a + b;

  condition2A = a > Math.abs(b - c);
  condition2B = b > Math.abs(a - c);
  condition2C = c > Math.abs(a - b);

  conditions = [
    conditionA,
    conditionB,
    conditionC,
    condition2A,
    condition2B,
    condition2C,
  ];

  for (let index = 0; index < conditions.length; index++) {
    currentCondition = conditions[index];
    if (currentCondition !== true) {
      return false;
    }
  }
  return true;
}

// Desafio 13
// Crie uma função de boas vindas ao Bar da Trybe!
// Segundo as regras desse bar, a cada bebida deve-se beber um copo de água
// para que não se tenha ressaca.
// Crie a função hydrate que recebe uma string,
// e retorne a sugestão de quantos copos de água você deve beber.

function isItaNumber(element) {
  return /\d/.test(element);
}

function hydrate(drinkOrder) {
  let numberOfDrinks = 0;

  for (let index = 0; index < drinkOrder.length; index++) {
    let currentElement = drinkOrder[index];

    if (isItaNumber(currentElement)) {
      numberOfDrinks += parseInt(currentElement);
    }
  }

  if (numberOfDrinks === 1) {
    return numberOfDrinks + ' copo de água';
  }
  return numberOfDrinks + ' copos de água';
}
hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
