// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) return 'Vazio!';

  let list = [];

  techs.sort();
  for (let value of techs) {
    list.push({ tech: value, name });
  }

  return list;
}

// Desafio 11
function countNumber(array, value) {
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) count += 1;
  }
  return count;
}

function checkCount(numbers) {
  for (let value of numbers) {
    if (countNumber(numbers, value) >= 3) return false;
  }
}

function checkNumbers(numbers) {
  for (let value of numbers) {
    if (value > 9) return false;
    if (value < 0) return false;
  }
  return true;
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';

  let error = 'não é possível gerar um número de telefone com esses valores';
  if (checkNumbers(numbers) === false) return error;
  if (checkCount(numbers) === false) return error;

  let ddd = numbers.slice(0, 2);
  ddd = ddd.join('');
  let firstNumbers = numbers.slice(2, 7);
  firstNumbers = firstNumbers.join('');
  let lastNumbers = numbers.slice(7, 11);
  lastNumbers = lastNumbers.join('');

  return `(${ddd}) ${firstNumbers}-${lastNumbers}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB < lineC || Math.abs(lineA - lineB) > lineC) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let result = /[1-9]/g;
  let sum = string.match(result);
  let water = 0;

  for (let value of sum) {
    water += parseInt(value, 6);
  }

  if (water === 1) return `${water} copo de água`;
  return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
