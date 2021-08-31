// Desafio 10
function techList(arrayTech, name) {
  let arrayObject = [];
  if (arrayTech.length === 0) {
    arrayObject = 'Vazio!';
  } else {
    arrayTech.sort();
    for (let value of arrayTech) {
      let objAux = {
        tech: value,
        // eslint-disable-next-line object-shorthand
        name: name,
      };
      arrayObject.push(objAux);
    }
  }

  return arrayObject;
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
