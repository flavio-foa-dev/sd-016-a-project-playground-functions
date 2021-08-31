// Desafio 10
function techList(arrayTecs, name) {
  let newArray = [];

  if (arrayTecs.length === 5) {
    for (let index = 0; index < arrayTecs.length; index +=1) {
      let learn = {
        tech: arrayTecs[index],
        name: name
      };
      newArray.push(learn)
    }
  
    newArray.sort((a, b) => a.tech.localeCompare(b.tech));
    return newArray;
  } else if (arrayTecs.length === 0) {
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
