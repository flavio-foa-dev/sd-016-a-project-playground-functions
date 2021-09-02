// Desafio 10
function techList(arr, name) {
  if (arr.length < 1) {
    return 'Vazio!';
  }
  let newArray = [];
  arr.sort();
  for (let tech of arr) {
    newArray.push({ tech, name });
  }
  return newArray;
}

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < arr.length; i += 1) {
    let count = 0;
    let number = 0;
    for (let j = 0; j < arr.length; j += 1) {
      number = arr[j];
      if (number === arr[i]) {
        count += 1;
      }
    }
    if (arr[i] < 0 || arr[i] > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {}

// Desafio 13
function hydrate(str) {
  let numbers = str.match(/[0-9]+/g).flat(); // Essa RegEx pega somente os números de uma string.
  // Fonte 'https://stackoverflow.com/questions/42532450/extract-number-from-string-javascript'
  // return numbers;
  let sum = numbers.reduce((function (prev, curr) { return (+prev + +curr); }));
  //                                 Operador unário '+' serve pra transformar o operando em número
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
