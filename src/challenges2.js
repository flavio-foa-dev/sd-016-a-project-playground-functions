// Desafio 10
function techList(techs, name) {
  let arrayOfTechs = [];
  let sortedTechs = techs.sort();
  if (techs.length === 0) {
    arrayOfTechs = 'Vazio!';
  } else {
    for (let i = 0; i < techs.length; i += 1) {
      arrayOfTechs.push({
        tech: sortedTechs[i],
        name,
      });
    }
  }
  return arrayOfTechs;
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
