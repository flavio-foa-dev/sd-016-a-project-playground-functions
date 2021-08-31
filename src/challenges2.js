// Desafio 10
function techList(array, name) {
  if (array.length <= 0)
    return "Vazio!";
  let arraySort = array.sort();
  let result = [];
  for (elem of arraySort) {
    result.push({
      tech: elem,
      name: name,
    })
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
