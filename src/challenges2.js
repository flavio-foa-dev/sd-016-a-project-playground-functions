// Desafio 10
function techList(techs, name) {
  let lista = [];
  techs = techs.sort();
  if (techs.length > 0){
    for (let index = 0; index < techs.length; index++) {
      lista[index] = {tech: techs[index], name: name};
    }
  }
  else lista = 'Vazio!';
  return lista;
}

// Desafio 11
function generatePhoneNumber(num) {
  if (num.length !== 11) return 'Array com tamanho incorreto.';
  if (num.some((value) => value < 0) || num.some((value) => value > 9)) return 'não é possível gerar um número de telefone com esses valores';
    else {
      isValid = true;
      for (let index1 = 0; index1 < num.length; index1 += 1) {
        let count = 0;
        for (let index2 = 1; index2 < num.length; index2 += 1) {
          if (num[index1] === num[index2]) count++;
          if (count >= 3) {
            isValid = false;
            break;
          }
        }
      }
      if (isValid === false) return 'não é possível gerar um número de telefone com esses valores';
    }
  return `(${num[0]}${num[1]}) ${num[2]}${num[3]}${num[4]}${num[5]}${num[6]}-${num[7]}${num[8]}${num[9]}${num[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB+lineC)&&(lineB < lineA+lineC)&&(lineC < lineA+lineB)&&(lineA > Math.abs(lineB - lineC))&&(lineB > Math.abs(lineA - lineC))&&(lineC > Math.abs(lineA - lineB))){
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  numbers = ['1','2','3','4','5','6','7','8','9'];
  let numbersFromString = []; 
  for (let index = 0; index < string.length; index += 1) {
    if(numbers.includes(string[index])) {
      numbersFromString.push(Number(string[index]));
    }
  }
  const addedNumbers = numbersFromString.reduce((acc, currentNumber) => acc + currentNumber);
  if (addedNumbers > 1) return `${addedNumbers} copos de água`;
  return `${addedNumbers} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
