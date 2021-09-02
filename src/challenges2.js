// Desafio 10
function techList(techs, name) {
  let object = {};
  let arrayObjects = [];
  let sortTechs = techs.sort()
  for (let index in sortTechs){
    object.tech = techs[index]
    object.name = name
    arrayObjects.push(object)
    object = {};
  }
  if (arrayObjects.length === 0){
    return 'Vazio!'
  }
  else{
    return arrayObjects
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
