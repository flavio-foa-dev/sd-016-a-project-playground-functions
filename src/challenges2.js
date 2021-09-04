/* eslint-disable prefer-template */
// Desafio 10
function techList(array, name) {
  let result = [];

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  array.sort(); // sort = ordena o array de acordo com a  pontuação de código unicode.

  if (array.length === 0) return 'Vazio!';
  for (let i = 0; i < array.length; i += 1) {
    result.push({
      tech: array[i],
      name,
    });
  }
  return result;
}

// Desafio 11
function generatePhoneNumber() {
  // nope
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (a > b + c) return false;
  if (b > a + c) return false;
  if (c > a + b) return false;
  return true;
}

// Desafio 13
function hydrate() {
  // ...
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
