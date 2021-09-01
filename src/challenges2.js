/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 10
function techList(tecnologias, name) {
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  let lista = [];
  let tecnologiasOrdenadas = tecnologias.sort();
  for (let index = 0; index < tecnologiasOrdenadas.length; index += 1) {
    lista.push({
      tech: tecnologiasOrdenadas[index],
      name,
    });
  }
  return lista;
}

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
  return numeros.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) { 
  if (lineA + lineB < lineC || lineA + lineC < lineB || lineB + lineC < lineA) {
    return false;
  }
  if (Math.abs(lineA - lineB) > lineC || Math.abs(lineA - lineC) > lineB) {
    return false;
  }
  if (Math.abs(lineB - lineC) > lineA) {
    return false;
  } 
  return true;
}

// Desafio 13
function hydrate(string) {
  let regex = /\d+/g;
  let number = string.match(regex);
  let numbers = number.map(Number).reduce((a, b) => a + b, 0);
  let copodagua = ' copo de água';
  let coposdagua = ' copos de água';
  if (numbers === 1) {
    return numbers + copodagua;
  }
  return numbers + coposdagua;;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
