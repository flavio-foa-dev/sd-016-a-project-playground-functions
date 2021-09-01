/* eslint-disable no-else-return */
/* eslint-disable sonarjs/no-unused-collection */
/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 10
function techList(arrayTech, name) {
  let arrayObject = [];
  if (arrayTech.length === 0) {
    arrayObject = 'Vazio!';
  } else {
    arrayTech.sort();
    for (let value of arrayTech) {
      let objAux = {
        tech: value,
        // eslint-disable-next-line object-shorthand
        name: name,
      };
      arrayObject.push(objAux);
    }
  }

  return arrayObject;
}

// Desafio 11

// eslint-disable-next-line complexity
// eslint-disable-next-line max-lines-per-function
function generatePhoneNumber(arrayPhone) {
  // (12) 34567-8901
  let result = '';
  let numerCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (arrayPhone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayPhone.length; index += 1) {
    if (arrayPhone[index] > 9 || arrayPhone[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    numerCount[arrayPhone[index]] += 1;
    if (numerCount[arrayPhone[index]] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else if (index === 0) {
      result += '(';
    } else if (index === 2) {
      result += ') ';
    } else if (index === 7) {
      result += '-';
    }
    result += arrayPhone[index];
  }
  return result;
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
