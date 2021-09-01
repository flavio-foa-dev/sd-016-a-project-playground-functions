// Desafio 10
function techList(lista, nome) {
  if (lista.length === 0) {
    return ('Vazio!')
  } else {
    listaO = lista.sort();
    let objetos = [];
    for (let index in listaO) {

      objetos.push({ tech: listaO[index], name: nome });

    }
    return (objetos);
  }
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
