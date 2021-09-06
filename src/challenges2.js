// Desafio 10
function techList(techNames, name) {
  let objects = [];
  if (techNames.length === 0) {
    return 'Vazio!';
  }
  {
    for (let index = 0; index < techNames.length; index += 1) {
      let techObj = {
        tech: techNames.sort()[index],
        name: name,
      };
      objects.push(techObj);
    }
    return objects;
  }
}

// Desafio 11
function generatePhoneNumber(number) {
  const notPossible = 'não é possível gerar um número de telefone com esses valores';
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index <= number.length; index += 1) {
    if (number[index] < 0) {
      return notPossible;
    }
    if (number[index] > 9) {
      return  notPossible;
    }
    for (let numbers = 0; numbers <= number.length; numbers += 1) {
      let count = 0;
      if (number[index] === number[numbers]){
        count += 1;
        if (count >= 3) {
          return  notPossible;
        }
        return '(' + number[0] + number[1] + ') ' + number[2] + number[3] + number[4] + number[5] + number[6] + '-' + number[7] + number[8] + number[9] + number[10] 
      }
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB + lineC) && lineB < Math.abs(lineA + lineC) && lineC < Math.abs(lineA + lineC)) {
    return true;
  }
  return false;
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
