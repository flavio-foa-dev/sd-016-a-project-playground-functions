/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 10
function techList(tecnologias, name) {
  let lista = {
    tech: '',
    name,
  };
  for (let index = 0; index < tecnologias.length; index += 1) {
    lista.tech = tecnologias[index];
  }
  return lista;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(numeros) {
  let contagem = 0;
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] < 0 || numeros[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let key in numeros) {
      if (numeros[index] === numeros[key]) {
        contagem += 1;
      }
    }
    if (contagem > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    contagem = 0;
  }
  numeros.unshift('(');
  numeros.splice(3, 0, ') ');
  numeros.splice(9, 0, '-');
  let numerostring = numeros.join('');
  return numerostring;
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
