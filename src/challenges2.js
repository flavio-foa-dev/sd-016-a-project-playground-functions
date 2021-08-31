// Desafio 10
function techList(tech, name) {
  let object = [];
  let ordena = tech.sort();
  if (name.length === 0 || ordena.length === 0) {
    return 'Vazio!';
  }
  // eslint-disable-next-line guard-for-in
  for (const key in ordena) {
    object[key] = {
      tech: ordena[key],
      name,
    };
  }

  return object;
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
