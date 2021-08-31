// Desafio 10
function techList(arr, name) {
  if (arr.length < 1) {
    return 'Vazio!';
  }
  let newArray = [];
  arr.sort();
  for (let tech of arr) {
    newArray.push({ tech, name });
  }
  return newArray;
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
