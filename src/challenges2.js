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

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  // seu código aqui
  let arrayPhone = [];

  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let count = 0;
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let secondIndex = 0; secondIndex < arrayNumbers.length; secondIndex += 1) {
      if (arrayNumbers[index] === arrayNumbers[secondIndex]) {
        count += 1;
      }
    }
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (index === 0) {
      let aux = '(';
      arrayPhone.push(aux);
    }
    if (index === 2) {
      let aux = ')' + ' ';
      arrayPhone.push(aux);
    }
    if (index === 7) {
      let aux = '-';
      arrayPhone.push(aux);
    }
    arrayPhone.push(arrayNumbers[index]);
  }
  return arrayPhone.join('');
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
