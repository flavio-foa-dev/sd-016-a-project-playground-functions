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
  // seu código aqui
  let result = str.split(""); 
  let final = [];
  for(let i in result){
    if(result[i]==="a"){
      result[i] = 1;
    }
    if(result[i]==="e"){
      result[i] = 2;
    }
    if(result[i]==="i"){
      result[i] = 3;
    }
    if(result[i]==="o"){
      result[i] = 4;
    }
    if(result[i]==="u"){
      result[i] = 5;
    }
    final = result.join('');
  }
  return final;
}
encode("hello");

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
