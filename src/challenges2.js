// Desafio 10
function techList( listArray, name ) {
  let newObject = [];
  let objectList = []; // cria um ojeto vazio
  let sortedList = []; // cria um array vazio
  
  sortedList = listArray.sort(); // Organiza o array
  
  if ( listArray.length > 0 ){
    for( let index = 0; index < sortedList.length; index += 1){
      //monta um objeto novo
      objectList[index] =  {
        tech: sortedList[ index ],
        name: name
      }
    }
    return objectList;
  }else {
    return 'Vazio!';
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
