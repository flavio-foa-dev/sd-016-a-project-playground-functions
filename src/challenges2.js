// Desafio 10
function techList(array, name) {
  // seu código aqui
  if (array.length === 0) {
    return 'Vazio!';

  } else {
    array.sort();
    let arrayOrdenada = [];
    for (let index = 0 ; index < array.length ; index++) {
      arrayOrdenada.push({'tech':array[index], 'name': name});
    }
    return arrayOrdenada;
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
