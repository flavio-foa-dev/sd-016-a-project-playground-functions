// Desafio 10
function techList(array, string) {
  // seu código aqui
  let orderedArray = array.sort();
  let newArray = [];
  
  if (array.length > 0) {
    for (let key in orderedArray) {
      let object = {
        tech: orderedArray[key],
        name: string
      }
      newArray.push(object);
    }
    return newArray;
  } else {
    return 'Vazio!';
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
