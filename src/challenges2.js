/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
// Desafio 10
function techList(Array, name) {
  let newArraySort = Array.sort();
  let newArrayObject = [];
  let techs = {};

  if (Array == 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < Array.length; index++) {
    techs = {
      tech: newArraySort[index],
      name,
    };
    newArrayObject.push(techs);
  }
  return newArrayObject;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
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
