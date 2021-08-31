// Desafio 10
function techList(array, name) {

  if(array.length == 0){
    return 'Vazio!';
  }

  array = array.sort();
  let returnArray = [];
  for(let i = 0; i < array.length; i += 1){
    let info = {
      tech: array[i],
      name: name,
    }
    returnArray.push(info)
  }
  return returnArray;
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
