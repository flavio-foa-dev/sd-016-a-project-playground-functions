// Desafio 10
function techList(list, name) {
  let nomeTech =[]
  list = list.sort(); 
  for(let i = 0; i < list.length; i += 1){
  nomeTech.push({tech: list[i], name: name})
}
  if(nomeTech.length === 0 ){
    return 'Vazio!';  
  } 
  return nomeTech
} 
techList( [], "Lucas")

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
