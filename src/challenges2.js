// Desafio 10
function techList(tech, name) {
  //declarando uma pessoa generica
  let person = {
    tech: "a", 
    name: name
  }

  //declarando o array que vamos imprimir
  let theList = new Array();

  //arrumando em ordem alfabetica o tech
  let techAlpha = tech.sort();

  //fazendo a lista de tech com a pessoa
  if(tech == undefined || tech == null || tech.length === 0){
    return "Vazio!";
  } else{ //criando os objetos pessoas
    for(i = 0; i < tech.length; i++){
      person[i] = {
        tech: techAlpha[i],
        name: name
      }
      //adicinando essa pessoa no array
      theList[i] = person[i];
    }
  
    //retornando a lista
    return theList;
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let counter = 0;
  let phoneNumber;

  //checando se tem 11 valores
  if(numbers.length === 11){
    for(i=0; i < numbers.length; i++){
      if(numbers[i]<0 || numbers[i] > 9){
        return "não é possível gerar um número de telefone com esses valores";
      }
      for(x = 0; x < numbers.length; x++){
        if(numbers[i] === numbers[x]){
          counter++
          if(counter >= 3){
            return "não é possível gerar um número de telefone com esses valores";
          }
        }
      }
      counter = 0;
    }
    //feio mas da certo
    phoneNumber = "(" + numbers[0] + numbers[1] + ")" + " " + numbers[2] + numbers[3] + numbers[4] + numbers[5] +  numbers[6] + "-" + numbers[7]+ numbers[8] + numbers[9] + numbers[10];
    return phoneNumber;
  } else{ //caso nao tenha
    return "Array com tamanho incorreto.";
  }
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
