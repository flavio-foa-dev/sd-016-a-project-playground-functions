// Desafio 10
function techList(tech, name) {
  if (tech.length <= 0) {
    return 'Vazio!';
  }
  let listTech = tech.sort()
  let listObject = [];
 
  for (let i of listTech) {
      listObject.push( {
          tech: i,
         name: name
      } )
  }
  return listObject;
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
