// Desafio 10
function techList(lista, name) {
  if (lista.length !== 0) {
    let createObject = [];
    lista.sort();
    for (let item = 0; item < lista.length; item += 1) {
      createObject.push({
        tech: lista[item],
        name: `${name}`,
      });
    } return createObject;
  } return 'Vazio!';
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
