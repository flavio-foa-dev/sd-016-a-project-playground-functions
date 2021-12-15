// Desafio 10
function techList(arrayTechNames, name) {
  // seu código aqui
  let arrayTech = [];
  let technologies;
  if (arrayTechNames.length === 0) {
    return 'Vazio!';
  }
  arrayTechNames
    .sort()
    .forEach((tech) => {
      technologies = {
        tech,
        name,
      };
      arrayTech.push(technologies);
    });
  return arrayTech;
}

function countNumber(arrayNumbers) {
  let lastCount = 0;

  arrayNumbers.forEach((number) => {
    let count = 0;
    arrayNumbers.forEach((number2) => {
      if (number === number2) {
        count += 1;
      }
    });
    if (count > lastCount) {
      lastCount = count;
    }
  });
  return lastCount;
}

function conditionMessage(element, arrayNumbers) {
  if (element < 0 || element > 9 || countNumber(arrayNumbers) >= 3) {
    return true;
  }
  return false;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  // seu código aqui
  let arrayPhone = [];
  let stringPhone;

  if (arrayNumbers.length !== 11) return 'Array com tamanho incorreto.';
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let element = arrayNumbers[index];
    if (conditionMessage(element, arrayNumbers)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    arrayPhone.push(element);
  }
  stringPhone = arrayPhone.join('');
  return `(${stringPhone.slice(0, 2)}) ${stringPhone.slice(2, 7)}-${stringPhone.slice(7, 11)}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let compareC = Math.abs(lineA - lineB);
  if (lineC < lineA + lineB && lineC > compareC) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  const arrayNumber = string.replace(/\D/g, '').split('');
  const sum = arrayNumber.reduce((acc, cv) => acc + Number(cv), 0);
  if (sum > 1) return `${sum} copos de água`;
  return `${sum} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
