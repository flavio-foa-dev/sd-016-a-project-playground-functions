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
    return "Vazio!"
  } else {
    for (let index = 0; index < orderedList.length; index++) {
      let newObject = {
        tech: orderedList[index],
        name: name,
      }
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
    let currentNumber = numbersForCheck[index]

    if (currentNumber < 0 || currentNumber > 9) {
      return false;
    }
  }
}

function generatePhoneNumber(numbers) {
 
  if (numbers.length !== 11) {
    return "Array com tamanho incorreto."
  }

  if (checkForThree(numbers) === false || checkForIncorrectNumbers(numbers) === false) {
    return "não é possível gerar um número de telefone com esses valores";
  }
  
  let phonePattern = ["(", "*", "*", ")", " ", "*", "*", "*", "*", "*", "-", "*", "*", "*", "*",];
  let finishedNumber = "";
  let numbersIndex = 0;

  for (let index = 0; numbersIndex < numbers.length; index++) {
    let patternIndex = phonePattern[index];
    if (patternIndex !== "*") {
      finishedNumber += patternIndex;
    } else {
      finishedNumber += numbers[numbersIndex];
      numbersIndex++
    }
  }
  return finishedNumber;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
