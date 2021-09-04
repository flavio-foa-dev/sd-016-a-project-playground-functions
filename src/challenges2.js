// Desafio 10
function techList(tecName, name) {
  let result = [];
  tecName = tecName.sort();
  if (tecName.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tecName.length; index += 1) {
    result[index] = {tech: tecName[index], name: name};
  }
  return result;
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
