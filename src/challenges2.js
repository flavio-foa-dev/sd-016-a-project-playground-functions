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
  let count = 0;
  let selfFone;
  if(number.length === 11){
    for(i = 0; i < number.length; i += 1){
      if(number[i] < 0 || number[i] > 9){
        return "não é possível gerar um número de telefone com esses valores";
      }
      for(l = 0; l < number.length; l += 1){
        if(number[i] === number[l]){
          count += 1;
          if(count >= 3){
            return "não é possível gerar um número de telefone com esses valores";
          }
        }
      }
      count = 0;
    }
    selfFone = "(" + number[0] + number[1] + ")" + " " + number[2] + number[3] + number[4] + number[5] +  number[6] + "-" + number[7]+ number[8] + number[9] + number[10];
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
