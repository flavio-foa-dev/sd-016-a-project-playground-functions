// Desafio 10
function techList(techNames, names) {
  let list= [];
  techNames.sort();
  if(techNames.length === 0) {
    return 'Vazio!';
  }
  for(let key in techNames) {
    techNames[key] = {
      tech: techNames[key],
      name: names
    };
    list.push(techNames[key]);
  }
  return list;
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
