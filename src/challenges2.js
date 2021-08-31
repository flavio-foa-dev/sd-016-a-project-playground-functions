// Desafio 10
function techList(array, name) {
  let arr = array.sort();
  let object = [];
  for (let index = 0; index < arr.length; index += 1) {
    let obj = {
      tech: null,
      name: null,
    };
    obj.tech = arr[index];
    obj.name = name;
    object[index] = obj;
  }
  if (arr.length === 0) {
    object = 'Vazio!';
  }
  return (object);
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return ('não é possível gerar um número de telefone com esses valores');
    }
    let sum = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        sum += 1;
        if (sum === 3) {
          return ('não é possível gerar um número de telefone com esses valores');
        }
      }
    }
  }
  let firstPart = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}`;
  let secondPart = `${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  return (firstPart + secondPart);
}

// Desafio 12
function triangleCheck() {

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
