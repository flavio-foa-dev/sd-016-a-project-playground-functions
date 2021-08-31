// Desafio 10
function techList(technologies, name) {
let techName = technologies;
techName.sort();
let objName = name;
let listArray = [];

if (techName.length > 0) {
  for (index = 0; index < techName.length; index +=1) {
    let objeto = {
      tech: techName[index],
      name: objName,
    }
  listArray.push(objeto);
  }
  return(listArray);
} else {
  return "Vazio!"
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
