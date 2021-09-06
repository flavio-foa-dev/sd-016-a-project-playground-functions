// Desafio 10
function techList(techListArray, techListNome) {
  let lista = [];
  let novoArray = techListArray.sort();
  let saidaVazia = "Vazio!";
  if (techListArray.length > 0) {
    for (let posicao in novoArray) {
      let objeto = {};
      objeto.tech = novoArray[posicao];
      objeto.name = techListNome;
      lista.push(objeto);
    }
    return lista;
  }
  return saidaVazia;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
