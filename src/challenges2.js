// Desafio 10
function techList(tecnologias, name) {
  if (tecnologias.length === 0) {
    return ('Vazio!');
  }

  let newTech = tecnologias.sort();

  let tec = [];

  for (let i = 0; i < newTech.length; i += 1) 
    tec.push({tech : newTech[i], name : name});

  return tec;
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
