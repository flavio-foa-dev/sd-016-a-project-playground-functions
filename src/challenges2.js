// Desafio 10
function techList(techArray , name) {
  let array1= [];
  let arrayOrdenado = techArray.sort();
  for (let index = 0 ; index < techArray.length; index += 1){
    let objeto = {
      tech: arrayOrdenado[index],
      name: name,
    }
    array1.push(objeto);
  }
  if(array1.length === 0){
    return 'Vazio!';
  }
  else{
    return array1;
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
