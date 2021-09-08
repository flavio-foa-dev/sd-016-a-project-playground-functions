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
  let msg = 'não é possível gerar um número de telefone com esses valores';
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';
  if (checkNumbers(numbers) === false) return msg;
  if (checkCount(numbers) === false) return msg;

  let ddd = numbers.slice(0, 2);
  ddd = ddd.join('');
  let firstFour = numbers.slice(2, 7);
  firstFour = firstFour.join('');
  let lastFour = numbers.slice(7, 11);
  lastFour = lastFour.join('');

  return `(${ddd}) ${firstFour}-${lastFour}`;
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
