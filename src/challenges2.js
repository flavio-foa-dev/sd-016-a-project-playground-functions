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
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  // eslint-disable-next-line sonarjs/no-collapsible-if
  if (lineA + lineB > lineC && lineB + lineC > lineA && lineC + lineA > lineB) {
    // eslint-disable-next-line max-len
    if (Math.abs(lineA - lineB) < lineC && Math.abs(lineB - lineC) < lineA && Math.abs(lineC - lineA) < lineB) {
      result = true;
    }
  }
  return result;
}

// Desafio 13
function hydrate(drinks) {
  // Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida e que a sua string sempre virá com o formato quantidade (em número) + tipo da bebida.
  // O número na frente de cada bebida está no intervalo entre 1 e 9.
  let sum = 0;
  const regExp = /[0-9]/g;
  let arrayStr = drinks.split(regExp);
  let arrayNumb = drinks.match(regExp);
  if (arrayStr[arrayStr.length - 1] === '') {
    arrayNumb.pop();
  }
  for (let value of arrayNumb) {
    sum += parseInt(value, 10);
  }
  if (sum === 1) {
    sum += ' copo de água';
  } else {
    sum += ' copos de água';
  }
  return sum;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
