// Desafio 10
function techList(array, name) {
  let newArray = array.sort();
  let myArray = [];
  let allArray = {};
  for (let i = 0; i < newArray.length; i += 1) {
    allArray = {
      tech: newArray[i],
      name: name,
    };
    myArray.push(allArray);
  }
  if (myArray == 0) {
    return 'Vazio!';
  } else {
    return myArray;
  }
}

// Desafio 11

function arraycheck(array) {
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    let count = 0;
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let i = 0; i < array.length; i += 1) {
      if (index === array[i]) {
        count += 1;
      }
      if (count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return true;
}
function generatePhoneNumber(array) {
  let condition = arraycheck(array);
  if (condition !== true) {
    return condition;
  }
  let boxNumber = 0;
  let foneNumber = [];
  for (let index = 0; index < array.length; index += 1) {
    if (index === 0) {
      boxNumber = '(' + array[index];
      foneNumber.push(boxNumber);
    } else if (index === 1) {
      boxNumber = array[index] + ')';
      foneNumber.push(boxNumber);
    } else if (index === 2) {
      boxNumber = ' ' + array[index];
      foneNumber.push(boxNumber);
    } else if (index <= 6) {
      boxNumber = array[index];
      foneNumber.push(boxNumber);
    } else if (index === 7) {
      boxNumber = '-' + array[index];
      foneNumber.push(boxNumber);
    } else if (index <= 10) {
      boxNumber = array[index];
      foneNumber.push(boxNumber);
    }
  }
  return foneNumber.join('');
}

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let aLine = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  let bLine = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  let cLine = lineC < lineA + lineB && lineC > Math.abs(lineA - lineB);
  if (aLine === true && bLine === true && cLine === true) {
    return true;
  }
  return false;
}

// Desafio 13
//Comando .replace(/[^0-9]/g.'') encontrado no site https://www.horadecodar.com.br/2020/10/14/como-obter-apenas-os-numeros-de-uma-string-em-javascript/

function hydrate(string) {
  let numbers = string.replace(/[^0-9]/g, '');
  let numberray = numbers.split('');
  let sum = 0;
  for (let i = 0; i < numberray.length; i += 1) {
    let num = parseInt(numberray[i]);
    sum = sum + num;
  }
  if (sum === 1) {
    return sum + ' copo de água';
  } else {
    return sum + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
