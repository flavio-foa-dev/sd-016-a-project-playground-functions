// Desafio 10
function techList(array, name) {
  if (array.length <= 0) {
    return 'Vazio!';
  }
  let arraySort = array.sort();
  let result = [];
  for (let elem of arraySort) {
    result.push({
      tech: elem,
      name,
    });
  }
  return result;
}

function repeatCount(array) {
  let unique = Array.from(new Set(array));
  let lastResult = 0;
  for (let elem of unique) {
    let result = 0;
    for (let num of array) {
      if (elem === num) {
        result += 1;
      }
    }
    if (result > lastResult) {
      lastResult = result;
    }
  }
  return lastResult;
}

// Desafio 11
function generatePhoneNumber(array) {
  const Numb = array;
  if (Numb.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let result = '(';
  for (let i = 0; i < Numb.length; i += 1) {
    if (Numb[i] > 9 || Numb[i] < 0 || repeatCount(Numb) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    result += Numb[i];
    if (i === 1) {
      result += ') ';
    }
    if (i === 6) {
      result += '-';
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB < lineC || Math.abs(lineA - lineB) > lineC) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(phrase) {
  let numberOfDrinks = phrase.match(/\d+/g).reduce((acum, cur) => acum + parseInt(cur), 0);
  let glass = numberOfDrinks > 1 ? "copos" : "copo";
  return `${numberOfDrinks} ${glass} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
