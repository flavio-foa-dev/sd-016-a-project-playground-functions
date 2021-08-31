// Desafio 1
function compareTrue(param1, param2) {
  // retorna true apenas se os dois parametros satisfizerem a condicao
  if (param1 && param2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  //retorna a area do triangulo
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // retorna um array com a frase separada em palavras
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  // retorna o ultimo e primeiro elemento do array concatenados
  let newArr = [arr[0], arr[arr.length - 1]];
  return newArr[newArr.length - 1] + ', ' + newArr[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // opera sobre o numero de vitorias e empates e retorna o total somado
  let vitorias = wins * 3;
  let empates = ties * 1;
  return vitorias + empates;
}
// Desafio 6
function highestCount(arr) {
  // verifica qual o maior número
  let cont = 0;
  let maior = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
  }
  for (let j = 0; j < arr.length; j += 1) {
    if (arr[j] === maior) {
      cont += 1;
    }
  }
  return cont;
}
// Desafio 7
function catAndMouse() {}

// Desafio 8
function fizzBuzz(arr) {
  let newArr = [];
  for (index in arr) {
    if (arr[index] % 5 == 0 && arr[index] % 3 == 0) {
      newArr.push('fizzBuzz');
    } else if (arr[index] % 3 == 0) {
       newArr.push('fizz');
    } else if (arr[index] % 5 == 0) {
       newArr.push('buzz');
    } else if (arr[index] % 5 !== 0 || arr[index] % 3 !== 0) {
       newArr.push('bug!');
    }
  }
  return newArr;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
