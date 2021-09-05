// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length === 0) {
    return "Vazio!";
  }

  arrayTech = arrayTech.sort()
  let array = [];
  for (let i = 0; i < arrayTech.length; i += 1) {
    let obj = {
      tech: arrayTech[i],
      name: name,
    }
    array.push(obj);
  }
  return array;
}

function generatePhoneNumber(num) {
  let valor = num;
  if (valor.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  for (let index = 0; index < num.length; index += 1) {
    if (num[index] < 0 || num[index] > 9 || repect(num[index], num)) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  function repect(number, array) {
    let result = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (number === array[i]) {
        result += 1;
      }
    } if (result >= 3) {
      return true;
    } else {
      return false;
    }
  }

  return `(${num[0]}${num[1]}) ${num[2]}${num[3]}${num[4]}${num[5]}${num[6]}-${num[7]}${num[8]}${num[9]}${num[10]}`;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaA = lineB + lineC;
  let absolutA = Math.abs(lineB - lineC);
  let somaB = lineA + lineC;
  let absolutB = Math.abs(lineA - lineC);
  let somaC = lineA + lineB;
  let absolutC = Math.abs(lineA - lineC);

  if (lineA < somaA && lineB < somaB && lineC < somaC) {
    return true;
  }
  if (lineA > absolutA && lineB > absolutB && lineC > absolutC) {
    return true;
  } else {
    return false;
  }
}
// Desafio 13
function hydrate(string) {
  let number = string.match(/(\d+)/g)
  let cod = 0;

  for (let index in number) {
    cod += parseInt(number[index]);
  }
  
  if (cod === 1) {
    return cod + " " + "copo de água";
  }else {
    return cod + " " + "copos de água";
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
