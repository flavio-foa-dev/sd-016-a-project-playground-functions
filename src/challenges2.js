// Desafio 10
function techList(arr, names) {
  let mainObject = [];
  let array = arr.sort();
  for (let i = 0; i < array.length; i += 1) {
    mainObject.push({
      tech: array[i],
      name: names,
    });
  }

  if (arr.length <= 0) {
    return 'Vazio!';
  }
  return mainObject;
}

// Desafio 11   falta a parte de contar se o número repetiu mais de 3 vzs 
function generatePhoneNumber(arr) {
  let newString = arr;
  if (newString.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < newString.length; i += 1) {
    number = newString[i];
    sum = 0 ;
    for (let cont = 1; cont < newString.length; cont += 1){
      if (newString[cont] === number){
        sum += 1;
        if (sum >= 3){
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
newString.splice(0, 0, '(');
newString.splice(3, 0, ') ');
newString.splice(9, 0, '-');

  for (let index = 0; index < newString.length; index += 1) {
    if (newString[index] < 0 || newString[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return newString.join('');
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i += 1) {
    let value = string[i];
    let parsed = parseInt(value, 10);
    if (Number.isNaN(parsed) === false) {
      sum += parsed;
    }
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
