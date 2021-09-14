// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length === 0) {
    return "Vazio!"
  }
  arrayTech = arrayTech.sort()
  let array = [];
  for (let i = 0; i < arrayTech.length; i += 1) {
    let obj = {
      tech: arrayTech[i],
      name: name,
    }
    array.push(obj);
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(number) {
  let counter = 0;
  let selfFone;

  //checando se tem 11 valores
  if(numbers.length === 11){
    for(i = 0; i < number.length; i += 1){
      if(number[i] < 0 || number[i] > 9){
        return "não é possível gerar um número de telefone com esses valores";
      }
      for(l = 0; l < number.length; l += 1){
        if(number[l] === number[l]){
          counter += 1;
          if(counter >= 3){
            return "não é possível gerar um número de telefone com esses valores";
          }
        }
      }
      counter = 0;
    }
    selfFone = "(" + numbers[0] + numbers[1] + ")" + " " + numbers[2] + numbers[3] + numbers[4] + numbers[5] +  numbers[6] + "-" + numbers[7]+ numbers[8] + numbers[9] + numbers[10];
    return selfFone;
  } else{
    return "Array com tamanho incorreto.";
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB < lineC || Math.abs(lineA - lineB) > lineC) {
    return false;
  }
  return true;
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
