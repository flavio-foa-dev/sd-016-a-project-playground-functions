// Desafio 10
function techList(arrayTechnology, name) {
  let technologies;
  if (arrayTechnology.length === 0) {
    technologies = 'Vazio!';
  } else {
    let order = arrayTechnology.sort();
    technologies = [];
    for (let i = 0; i < arrayTechnology.length; i += 1) {
      technologies[i] = { tech: order[i], name };
    }
  }
  return technologies;
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
