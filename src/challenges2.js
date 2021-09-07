// Desafio 10
function techList() {
  let tech = ["React","Jest","HTML","CSS","JavaScript"]
  let name = "Rafaela";
  let nomeTech =[]
  for(let i = 0; i < tech.length; i += 1){
  nomeTech.push("{tech: 'React', name: name}")
  }
  return nomeTech 
  }
techList()

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
