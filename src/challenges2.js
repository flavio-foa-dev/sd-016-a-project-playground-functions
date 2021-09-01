// Desafio 10
function techList(array,name) {
  // seu código aqui
  if(array.length==0){
    return "Vazio!"
  }
  else{
      array_ordenada=array.sort()
      for(cont=0;cont<array_ordenada.length;cont+=1){
        array_ordenada[cont] = {
          tech:array_ordenada[cont],
          name:name,
        }
      }
      
      
        return array_ordenada
      }
}

console.log(techList([],"sergio"))

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
