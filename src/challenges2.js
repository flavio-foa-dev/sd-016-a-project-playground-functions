// Desafio 10
function techList(array, name) {
  let newArray = array.sort();
  let myArray = [];
  let allArray = {};
    for (let i = 0; i < newArray.length; i += 1) {
    allArray = {
      tech: newArray[i],
      name: name,
    }
    myArray.push(allArray);
  }
  if (myArray == 0){
    return 'Vazio!';
    } else {
      return myArray
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
