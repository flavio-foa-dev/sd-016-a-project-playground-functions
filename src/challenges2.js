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
function generatePhoneNumber( number ) { //(51)12345-6789
  let numberResult = [];
  let myVar = '';
  let errorCode1 = "Array com tamanho incorreto.";
  let errorCode2 = "não é possível gerar um número de telefone com esses valores";
  let equalCount = 0;


  //Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".
  if( number.length != 11 ){
    return errorCode1;
  }

  //Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".
  // Teste se algum dos números é menor que 0 ou maior que 9
  for ( let index = 0 ; index < number.length; index += 1 ){
    if( number[index] < 0 || number[index] > 9 ){
      return errorCode2;
    }
  }
  // Teste se algum dos numeros se repete 3 vezes ou mais
  for ( let idy = 0; idy < number.length ; idy += 1 ){
    equalCount = 0;
    for ( let index = 0; index < number.length; index += 1 ){
      let comparedNumber = number[idy];
      if ( comparedNumber === number[index] ){
        equalCount += 1;
        if( equalCount >= 3 ){
          return errorCode2;
        }
      }
    }
  }


  // Começa montando o inicio ()
  numberResult.push('(' + number[0] + number[1] + ') ' + number[2] + number[3] + number[4] + number[5] + number[6] + '-' + number[7] + number[8] + number[9] + number[10] );
  myVar = numberResult.toString();

  return myVar;
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
