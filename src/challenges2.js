// Desafio 10
function techList(techArray, name) {
  let objectArray = [];
  techArray.sort();

  if (techArray.length === 0) {
    return 'Vazio!';
  }

  for (let key in techArray) {
    let techs = {
      tech: techArray[key],
      name: name,
    };
    objectArray.push(techs);
  }

  return objectArray;
}
// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let currentNumberCount = 0;
  for (let key in array) {
    if (array[key] < 0 || array[key] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let validateNumber = array[key];
    for (let key2 in array) {
      if (validateNumber === array[key2]) {
        currentNumberCount += 1;
      }
    }
    if (currentNumberCount >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    currentNumberCount = 0;
  }
  return '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let a = Math.abs(lineA);
  let b = Math.abs(lineB);
  let c = Math.abs(lineC);

  return a < b + c && b < a + c && c < a + b;
}
// Desafio 13
function hydrate(string) {
  // fui pesquisar sobre regex aqui: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994

  let regex = /\d+/g;
  let result = string.match(regex);
  // Pesquisei sobre trasformar um array de strings em números aqui: https://www.codegrepper.com/code-examples/javascript/javascript+Convert+an+array+of+strings+to+numbers

  const last = result.map((i) => Number(i));

  let waterQuantity = 0;
  for (let key in last) {
    waterQuantity += last[key];
  }

  if (waterQuantity === 1) {
    return waterQuantity + ' copo de água';
  } else if (waterQuantity > 1) {
    return waterQuantity + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
