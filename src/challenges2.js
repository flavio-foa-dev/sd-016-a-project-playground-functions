// Desafio 10
function techList(technology, name) {
  technology = technology.sort();
  let list = [];
  if (technology === 0) return 'Vazio!';
  for (let index = 0; index < technology.length; index += 1) {
    list[index] = { tech: technology[index], name };
  }
  return list;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
