// Desafio 10
function techList(array, name) {
  // seu código aqui
      let objetoFinal = []
      if(array.length <= 0){
        return "Vazio!"
      }
      array = array.sort()
      for (techno of array){
        objetoFinal.push({tech: techno, name: name,})
      }
    return objetoFinal;
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
