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
function generatePhoneNumber() {
  // seu código aqui
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
