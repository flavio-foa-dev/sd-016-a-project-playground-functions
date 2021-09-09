// Desafio 10
function techList(nomeTech, name) {
  // seu código aqui
  let nameETech = [];
  for(let key of nomeTech){
   nameETech.push({tech:key,name})
  }
  if(nameETech.length === 0){
    return "Vazio!"
}
  return nameETech
}
console.log(techList(["HTML","CSS","Jest","React","JavaScript"],"Victor"))

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
