// Desafio 10
function techList(techArray, name) {
  let objectArray = [];
  techArray.sort();

  if (techArray.length === 0) {
    return "Vazio!";
  }

  for (let key in techArray) {
    let techs = {
      tech: techArray[key],
      name: name
    }
    objectArray.push(techs);
  }

  return objectArray
}
// Desafio 11
function generatePhoneNumber(array) {
  if (array.length != 11) {
    return "Array com tamanho incorreto."
  }
  let currentNumberCount = 0;
  for (let key in array) {
    if (array[key] < 0 || array[key] > 9) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    let validateNumber = array[key]
    for (let key2 in array) {
      if (validateNumber === array[key2]) {
        currentNumberCount += 1;
      }
    }
    if (currentNumberCount >= 3) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    currentNumberCount = 0;
  }
  return "(" + array[0] + array[1] + ") " + array[2] + array[3] + array[4] + array[5] + array[6] + "-" + array[7] + array[8] + array[9] + array[10]
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
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
