// Desafio 10
function criaNewObject(arrayTech, name) {
  arrayTech = arrayTech.sort();
  const newCollectionArrayObject = [];
  for (let index = 0; index < arrayTech.length; index += 1) {
    let objectCollection = { tech: '', name: '' };
    objectCollection = { tech: arrayTech[index], name };

    newCollectionArrayObject.push(objectCollection);
  }
  return newCollectionArrayObject;
}

function techList(arrayTech, name) {
  const newCollectionArrayObject = criaNewObject(arrayTech, name);
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  return newCollectionArrayObject;
}

// Desafio 11
// function verficaValorNegativo(arrayNumber) {
//   let count2 = 0;
//   for (let index = 0; index < arrayNumber.length; index += 1) {
//     if (arrayNumber[index] < 0 || arrayNumber[index] > 9) {
//       count2 += 1;
//     }
//   }
//   return count2;
// }
// function teste(arrayNumber) {
//   let count = 0;
//   for (let index = 0; index < arrayNumber.length; index += 1) {
//     if (arrayNumber[index + 1] === arrayNumber[index]) {
//       count += 1;
//     }
//   }
//   return count;
// }
function generatePhoneNumber() {
  // arrayNumber = arrayNumber.sort();
  // let count = teste(arrayNumber);
  // let count2 = verficaValorNegativo(arrayNumber);
  // if (arrayNumber.length > 11) {
  //   return 'Array com tamanho incorreto.';
  // }
  // if (count >= 3 || count2 > 0) {
  //   return 'não é possível gerar um número de telefone com esses valores';
  // }
  // return count;
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2]));
// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let result = false;
  if (Math.abs(lineA + lineB) > lineC && Math.abs(lineB + lineC) > lineA
    && Math.abs(lineA + lineC) > lineB) {
    result = true;
  }
  return result;
}

// Desafio 13
function extractNumber(str) {
  // Extrair o número de uma string
  let result;

  for (let index = 0; index < str.length; index += 1) {
    result = str.match(/[0-9]/g);
  }
  return result;
}

function convertStringNumber(str) {
  // Converter a string de números em números e soma-los
  let sum = 0;
  for (let index = 0; index < extractNumber(str).length; index += 1) {
    sum += Number(extractNumber(str)[index]);
  }
  return sum;
}

function hydrate(str) {
  // seu código aqui
  if (convertStringNumber(str) === 1) {
    return '1 copo de água';
  }
  return `${convertStringNumber(str)} copos de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
