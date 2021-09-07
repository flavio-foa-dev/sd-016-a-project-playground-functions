// Desafio 10
function techList(tecnol, name) {
  let newObj = [];
  if (tecnol.length === 0) {
    return 'Vazio!';
  }
  tecnol.sort();
  for (let elem of tecnol) {
    let outputObj = {
      tech: elem,
      name,
    };
    newObj.push(outputObj);
  }
  return newObj;
}

// Desafio 11
const validNumber = (arr) => {
  let initial = true;
  arr.forEach((number) => {
    let counter = 0;
    arr.forEach((numbercounter) => {
      if (numbercounter === number) {
        counter += 1;
      }
    });
    if (number < 0 || number > 9 || counter >= 3) {
      initial = false;
      return initial;
    }
  });
  return initial;
};

const generatePhoneNumber = (arr) => {
  let result = 'Array com tamanho incorreto.';
  if (arr.length === 11) {
    result = '';
    if (validNumber(arr)) {
      arr.forEach(function (number) {
        result += number;
      });
      result = `(${result.slice(0, 2)}) ${result.slice(2, 7)}-${result.slice(7)}`;
    } else {
      result = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return result;
};

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB < lineC || lineB + lineC < lineA || lineC + lineA < lineB) {
    return false;
  }
  return true;
}

// Desafio 13
// Crédito ao Pedro Mendes - turma 16 A, resolução mais enxuta e simplificada
function hydrate(phrase) {
  let numberOfDrinks = phrase
    .match(/\d+/g)
    .reduce((acum, cur) => acum + parseInt(cur, 10), 0);
  let glass = numberOfDrinks > 1 ? 'copos' : 'copo';
  return `${numberOfDrinks} ${glass} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
