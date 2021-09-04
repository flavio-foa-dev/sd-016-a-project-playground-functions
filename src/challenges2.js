// Desafio 10
function techList(techNames, name ) {
  let objects = []
  if (techNames.length == 0) {
    return 'Vazio!'
  }
  else {
    for (let index = 0; index < techNames.length; index += 1) {
      let techObj = {
        'tech': techNames.sort()[index],
        'name': name
    };
    objects.push(techObj)
  };
  return objects;
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
