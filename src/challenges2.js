const { compareTrue } = require("./challenges");

// Desafio 10
function techList(namesOfTechnologies, yName) {
  let list = namesOfTechnologies.sort();
  let ordernedList = [];
  if (list.length > 0) {
    for (let i = 0; i < list.length; i += 1) {
      ordernedList[i] = {
        tech: list[i],
        name: yName,
      };
    }
    return ordernedList;
  }
  else {
    return "Vazio!";
  }

}

// Desafio 11
function generatePhoneNumber(numbers) {
  let telephoneNumber = "";
  let numberStatus = true;
  if (numbers.length !== 11) {
    return "Array com tamanho incorreto.";
    numberStatus = false;
  }
  if (numberStatus === true) {
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] < 0 || numbers[i] > 9) {
        return "não é possível gerar um número de telefone com esses valores";
        numberStatus = false;
      }
    }
  }
  if (numberStatus === true) {
    let cont = 0;
    for (let i in numbers) {
      cont = 0;
      for (let key in numbers) {
        if (numbers[i] === numbers[key]) {
          cont += 1;
        }
      }
      if (cont >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
        numberStatus = false;
      }
    }
  }
  if (numberStatus === true) {
    telephoneNumber = "(";
    for (let i = 0; i < 2; i += 1) {
      telephoneNumber += numbers[i];
    }
    telephoneNumber += ") ";
    for (let i = 2; i < 7; i += 1) {
      telephoneNumber += numbers[i];
    }
    telephoneNumber += "-";
    for (let i = 7; i < 11; i += 1) {
      telephoneNumber += numbers[i];
    }
  }
  return telephoneNumber;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > Math.abs(lineB + lineC) || lineA < Math.abs(lineB - lineC)){
    return false;
  }
  else if (lineB > Math.abs(lineA + lineC) || lineB < Math.abs(lineA - lineC)){
    return false;
  }
  else if (lineC > Math.abs(lineB + lineA) || lineC < Math.abs(lineB - lineA)){
    return false;
  }
  else {
    return true;
  }
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
