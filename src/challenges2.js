// Desafio 10
function techList(arrayTechs, name) {
  let arrayTechSort = [];
  const arrayTechObject = [];
  let techs;

  if (arrayTechs.length === 0) {
    return `Vazio!`;
  } else {
    arrayTechSort = arrayTechs.sort();
    for (let index = 0; index < arrayTechs.length; index += 1) {
      techs = {
        tech: arrayTechSort[index],
        name: name
      };
      arrayTechObject.push(techs);
    }
    return arrayTechObject;
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
