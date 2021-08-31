// Desafio 10
function techList(tech, name) {
  tech = tech.sort();
  let lista = [];
  if (tech === 0) return 'Vazio!';
  if (tech.length === 0) return 'Vazio!';
  for (let i = 0; i < tech.length; i += 1) {
    lista[i] = { tech: tech[i], name };
  }
  return lista;
}
// Desafio 11
function generatePhoneNumber(array) {
  if (array.length === 11) {
    return '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
  } if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
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
