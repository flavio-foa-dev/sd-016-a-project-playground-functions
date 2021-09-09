// Desafio 10
function techList(array, nameForTech) {
  // seu código aqui
  let objectList = [];

  array.sort();

  for (let i = 0; i < array.length; i += 1) {
    let a = {
      tech: array[i],
      name: nameForTech,
    };
    objectList[i] = a;
  }
  if (objectList.length === 0) {
    return 'Vazio!';
  }
  return objectList;
}
let b = [];
console.log(techList(b, 'flavio'));

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
