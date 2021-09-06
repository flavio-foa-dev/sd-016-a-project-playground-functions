// Desafio 10

function techList(arrayTech, name) {
  arrayTech = arrayTech.sort();
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }

  const newCollectionArrayObject = [];
  for (let index = 0; index < arrayTech.length; index += 1) {
    newCollectionArrayObject.push({ tech: arrayTech[index], name });
  }
  return newCollectionArrayObject;
}

// Desafio 11

function repeatedNumber(arrayNumber, num) {
  // Encontrar números repetidos acima de 3x
  let count = 0;
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] === num) {
      count += 1;
    }
  }
  return count;
}

function lengthArray(arr) {
  // Verificar as condições: numero meor que 0, numero mairo 9 e repetição de numeros 3x ou mais
  for (let index = 0; index < arr.length; index += 1) {
    let count = repeatedNumber(arr, arr[index]);
    if (arr[index] < 0 || arr[index] > 9 || count >= 3) {
      return true;
    }
  }
}

function generatePhoneNumber(a) {
  if (a.length !== 11) return 'Array com tamanho incorreto.';

  let test = lengthArray(a);
  if (test === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${a[0]}${a[1]}) ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}${a[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let result = false;
  if (
    Math.abs(lineA + lineB) > lineC
    && Math.abs(lineB + lineC) > lineA
    && Math.abs(lineA + lineC) > lineB
  ) {
    result = true;
  }
  return result;
}

// Desafio 13
function extractNumber(str) {
  // Extrair o número de uma string
  let result;

  for (let index = 0; index < str.length; index += 1) {
    result = str.match(/[0-9]/g);
  }
  return result;
}

function convertStringNumber(str) {
  // Converter a string de números em números e soma-los
  let sum = 0;
  for (let index = 0; index < extractNumber(str).length; index += 1) {
    sum += Number(extractNumber(str)[index]);
  }
  return sum;
}

function hydrate(str) {
  // seu código aqui
  if (convertStringNumber(str) === 1) {
    return '1 copo de água';
  }
  return `${convertStringNumber(str)} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
