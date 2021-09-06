/* eslint-disable no-undef */
// Desafio 10
function techList(Array, name) {
    let newArraySort = Array.sort();
    let newArrayObject = [];
    let techs ;

    if(Array == 0){
      return 'Vazio!'
    }    
    for(let index = 0; index < Array.length; index++) {
      techs = {
        tech:newArraySort[index],
        name:name,
      }
       newArrayObject.push(techs);
    } return newArrayObject;
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
