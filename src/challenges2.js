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
        name: "Lucas",
      }
      arrayResult.push(object);
    }
    return arrayResult;
  }
}
console.log(techList([], "Lucas"))

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
