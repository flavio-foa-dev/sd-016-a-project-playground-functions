// Desafio 10
function techList(techs, name) {
  let lista = [];
  techs = techs.sort();
  if (techs.length > 0){
    for (let index = 0; index < techs.length; index++) {
      lista[index] = {tech: techs[index], name: name};
    }
  }
  else lista = 'Vazio!';
  return lista;
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
