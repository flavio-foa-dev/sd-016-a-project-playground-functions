// Desafio 10
function techList(tech, name) {
tech = tech.sort
let list = []
if(tech.length === 0){
  return'Vazio!'
}
else if(tech.length !== 0){
  for(let g = 0; g < tech.length; g += 1){
    let x = { tech: tech[g], name: name}
    list.push(x)
  }
return list
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
