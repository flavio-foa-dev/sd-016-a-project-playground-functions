// Desafio 10
function techList(array, name) {
  // seu código aqui
  if (array.length === 0) {
    return 'Vazio!';

  } else {
    array.sort();
    let arrayOrdenada = [];
    for (let index = 0 ; index < array.length ; index++) {
      arrayOrdenada.push({'tech':array[index], 'name': name});
    }
    return arrayOrdenada;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (array.length === 11){
    let validacao = true;
    for(let index = 0; index < array.length ; index++){
      if(array[index] < 0 || array[index] > 9){
        validacao = false;
        return "não é possível gerar um número de telefone com esses valores"
      }
      let number = array[index]
      let repeatNumber = 0 ;
      for (let count = 0 ; count < array.length ; count++){
        if(array[count] == number){
          repeatNumber++;
        }
        if (repeatNumber >= 3){
          return "não é possível gerar um número de telefone com esses valores"
        }

      }
    }
    if(validacao == true){
      let telefone = "("+array[0]+array[1]+") "+array[2]+array[3]+array[4]+array[5]+array[6]+"-"+array[7]+array[8]+array[9]+array[10];
      console.log(telefone);
      return telefone;
    }

  }else {
    return "Array com tamanho incorreto."
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if(lineA > lineB+lineC || lineB > lineA+lineC || lineC > lineB+lineA){
    return false;
  }else if(lineA < Math.abs(lineB-lineC) || lineB < Math.abs(lineA-lineC) || lineC < Math.abs(lineA - lineB)){
    return false;
  }else if(lineA < lineB+lineC && lineA > Math.abs(lineB-lineC) || lineB < lineA+lineC && lineB > Math.abs(lineA-lineC) || lineC > lineB+lineA && lineC > Math.abs(lineA - lineB)){
    return true;
  }

}

// Desafio 13
function hydrate(texto) {

  let numbers = texto.match(/\d+/g).map(Number);
  let soma = 0;
  let frase = " copo de água";

  for (let index = 0; index < numbers.length ; index++){
    soma = soma + numbers[index];

  }
  if (numbers.length > 1){
    frase = " copos de água"
  }
  return soma + frase;
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
