// Desafio 10
function techList(array, name) {
  let arr = array.sort();
  let object = [];
  for (let index = 0; index < arr.length; index += 1) {
    let obj = {};
    obj.tech = arr[index];
    obj.name = name;
    object[index] = obj;
  }
  if (arr.length === 0) {
    object = "Vazio!"
  }
  return(object);
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
