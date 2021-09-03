// Desafio 10
function techList(technology, yourName) {
  // seu código aqui
  let techs = 'Vazio!';

  if (Array.isArray(technology) && technology.length > 0) {
    techs = [];
    for (let item of technology.sort()) {
      techs.push({ tech: item, name: yourName });
    }
  } else if (!Array.isArray(technology)) {
    techs = { tech: technology, name: yourName };
  }

  return techs;
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
