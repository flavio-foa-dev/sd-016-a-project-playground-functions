// Desafio 10
function techList(array, nameForTech) {
  // seu código aqui
  let objectList = [];

  array.sort();

  for (let i = 0; i < array.length; i += 1) {
    let a = {
      tech: array[i],
      name: nameForTech,
    };
    objectList[i] = a;
  }
  if (objectList.length === 0) {
    return 'Vazio!';
  }
  return objectList;
}

// Desafio 11
function checkPhoneNumberSize(array) {
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 9 || array[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function verifyPhoneNumberDuplicate(array, count, i) {
  for (let j = 0; j < array.length; j += 1) {
    if (array[i] === array[j]) {
      count += 1;
    }
    if (count === 3) {
      return 'repeated';
    }
  }
}

function checkPhoneNumberDuplicate(array) {
  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    let check = verifyPhoneNumberDuplicate(array, count, i);
    if (check === 'repeated') {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function generatePhoneNumber(array) {
  // seu código aqui
  let check1 = checkPhoneNumberDuplicate(array);
  let check2 = checkPhoneNumberSize(array);
  if (check2 === undefined) {
    if (check1 === undefined) {
      let a = array;
      let phon = `(${a.slice(0, 2).join('')}) ${a.slice(2, 7).join('')}-${a.slice(7, 11).join('')}`;
      return phon;
    }
    return check1;
  }
  return check2;
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
