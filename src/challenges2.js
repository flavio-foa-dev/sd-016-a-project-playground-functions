// Desafio 10
function techList(array, name) {
  // seu código aqui
  array = array.sort();
  let arrayResult = [];
  if (array.length === 0) {
    return "Vazio!"
  } else {
    for( let i = 0; i < array.length; i += 1 ) {
      let object = {
        tech: array[i],
        name: name,
      }
      arrayResult.push(object);
    }
    return arrayResult;
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
