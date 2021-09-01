// Desafio 1
function compareTrue(param1, param2) {
  // retorna true apenas se os dois parametros satisfizerem a condicao
  if (param1 && param2) {
    return true;
  } 
    return false;
  }
compareTrue(true, false);

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
  for (let i in arr) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
  }
  for (let j in arr) {
    if (arr[j] === maior) {
      cont += 1;
    }
  }
  return cont;
}
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distanceCatOne = Math.abs(mouse-cat1);
  let distanceCatTwo = Math.abs(mouse-cat2);
  if(distanceCatOne === distanceCatTwo) {
    return 'os gatos trombam e o rato foge';
  }
  if(distanceCatOne<distanceCatTwo) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arr) {
  //declara um novo array
  let newArr = [];
  //iteracao sobre o array
  for (index in arr) {
    //se divisivel por 5 e 3 retorna "fizzBuzz"
    if (arr[index] % 5 == 0 && arr[index] % 3 == 0) {
      newArr.push('fizzBuzz');
      //se divisivel por 3 retorna "fizz"
    } else if (arr[index] % 3 == 0) {
      newArr.push('fizz');
      //se divisivel por 5 retorna "buzz"
    } else if (arr[index] % 5 == 0) {
      newArr.push('buzz');
      //se nao divisivel por 5 ou 3 retorna "bug!"
    } else if (arr[index] % 5 !== 0 || arr[index] % 3 !== 0) {
      newArr.push('bug!');
    }
  }
  //retorna o novoArray
  return newArr;
}

// Desafio 9
function encode(str) {
  //separa a string por caractere e declara array
  let result = str.split('');
  let final = [];
  //itera sobre o array e converte as strings
  for (let i in result) {
    if (result[i] === 'a') {
      result[i] = 1;
    }
    if (result[i] === 'e') {
      result[i] = 2;
    }
    if (result[i] === 'i') {
      result[i] = 3;
    }
    if (result[i] === 'o') {
      result[i] = 4;
    }
    if (result[i] === 'u') {
      result[i] = 5;
    }
    final = result.join('');
  }
  return final;
}

function decode(str) {
  //separa a string por caractere e declara array
  let result = str.split('');
  let final = [];
  //itera sobre o array e converte as strings
  for (let i in result) {
    if (result[i] === '1') {
      result[i] = 'a';
    }
    if (result[i] === '2') {
      result[i] = 'e';
    }
    if (result[i] === '3') {
      result[i] = 'i';
    }
    if (result[i] === '4') {
      result[i] = 'o';
    }
    if (result[i] === '5') {
      result[i] = 'u';
    }
    final = result.join('');
  }
  return final;
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
