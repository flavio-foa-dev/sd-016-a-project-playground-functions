// Desafio 10
function techList(tech, name) {
  tech.sort();
  let array = [{
    tech,
    name,
  }];

  if (tech.length === 0) {
    array = 'Vazio!';
  } else {
    for (let index = 0; index < tech.length; index += 1) {
      array[index] = {
        tech: tech[index],
        name: name,
      };
    }
  }
  return array;
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
