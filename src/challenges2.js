// Desafio 10
function techList(techArray, name) {
  let objectArray = [];
  techArray.sort();

  if (techArray.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < techArray.length; index += 1) {
    let techs = {
      tech: techArray[index],
      name,
    };
    objectArray.push(techs);
  }
  return objectArray;
}
// Desafio 11
function checkingNumbers(array) {
  let allFine = true;
  array.forEach(function (number) {
    let count = 0;
    array.forEach(function (numberCount) {
      if (numberCount === number) {
        count += 1;
      }
    });
    if (number < 0 || number > 9 || count >= 3) {
      allFine = false;
      return allFine;
    }
  });
  return allFine;
}
function generatePhoneNumber(arr) {
  if (arr.length === 11) {
    if (checkingNumbers(arr) === true) {
      return `(${arr.slice(0, 2).join('')}) ${arr.slice(2, 7).join('')}-${arr.slice(7).join('')}`;
    }
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'Array com tamanho incorreto.';
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
  for (let index = 0; index < last.length; index += 1) {
    waterQuantity += last[index];
  }

  if (waterQuantity === 1) {
    return `${waterQuantity} copo de água`;
  }
  return `${waterQuantity} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
