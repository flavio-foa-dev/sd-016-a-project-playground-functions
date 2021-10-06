// Desafio 10
function techList(array, nome) {
  let resultado = [];
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    resultado.push({ tech: array[i], name: nome });
  }
  if (array.length === 0) {
    resultado = 'Vazio!';
  }
  return resultado;
}

// Desafio 11
function generatePhoneNumber(array) {
  let cont;
  let resultado = '(';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    cont = 0;
    for (let c = 0; c <= array.length; c += 1) {
      if (array[c] < 0 || array[c] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      if (array[c] === array[i]) {
        cont = cont + 1;
      }
      if (cont === 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    resultado = "(" + array[0] + array[1] + ")" + " " + array[2] + array[3] + array[4] + array[5] +  array[6] + "-" + array[7]+ array[8] + array[9] + array[10];
  }
  return resultado;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
