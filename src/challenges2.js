// Desafio 10
function techList(arr, name) {
  //declara array auxiliar
  let newArray = [];
  //retorna vazio caso o array recebido seja == null
  if (arr.length === 0) {
    return 'Vazio!';
  }
  //itera sobre o array recebido como argumento e insere os dados recebidos no array auxiliar
  for (let index in arr) {
    newArray.push({ tech: arr[index], name: name });
  }
  //retorna o array auxiliar ordenado em ordem alfabetica
  return newArray.sort((a, b) => {
    if (a.tech < b.tech) return -1;
    else return 1;
  });
}

// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui
  let newArray = arr;
  if (newArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in newArray) {
    if (
      newArray[index] < 0 ||
      newArray[index] > 9 ||
      checkRepeat(newArray) >= 3
    ) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let finalNumbers = newArray.splice(7, 10).join('');
  return (
    '(' +
    newArray[0] +
    newArray[1] +
    ')' +
    ' ' +
    newArray.splice(2, 6).join('') +
    '-' +
    finalNumbers
  );
}

//funcao auxiliar Desafio 11
function checkRepeat(array) {
  let repeat = Array.from(new Set(array));
  let occour = 0;
  for (let element of repeat) {
    let result = 0;
    for (let n of array) {
      if (element === n) {
        result += 1;
      }
    }
    if (result > occour) {
      occour = result;
    }
  }
  return occour;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  //retorna false caso a soma dos lados for menor que um dos lados
  if (
    lineA > sumLados(lineB, lineC) ||
    lineB > sumLados(lineA, lineC) ||
    lineC > sumLados(lineA, lineB)
  ) {
    return false;
  }
  //retorna false caso a diferenca absoluta dos lados for maior que um dos lados
  if (
    lineA < difLados(lineB, lineC) ||
    lineB < difLados(lineA, lineC) ||
    lineC < difLados(lineA, lineB)
  ) {
    return false;
  } else {
    //retorna true caso contrario
    return true;
  }
}

//Desafio 12 - funcao auxiliar de soma
function sumLados(a, b) {
  return a + b;
}

//Desafio 12 - funcao auxiliar de diferenca
function difLados(a, b) {
  return Math.abs(a - b);
}

// Desafio 13
function hydrate(str) {
  //seta expressao regular
  let regex = /\d+/g;
  let string = str;
  let matches = string.match(regex);
  let soma = 0;
  let result = 0;
  //itera sobre os digitos encontrados na string
  for (let index in matches) {
    result = parseInt(matches[index]);
    soma += result;
  }
  //condicional para retornar singular ou plural
  if (soma === 1) {
    return soma + ' ' + 'copo de água';
  } else {
    return soma + ' ' + 'copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
