// Desafio 1
function compareTrue(value1, value2) {
  // se ambos os valores forem verdadeiros, devo retornar true
  // se não, devo retornar false
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let calculoArea = (base * height) / 2;
  return calculoArea;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ')

  // console.log(array)
  return array
}
splitSentence('foguete nao da re')

// Desafio 4
function concatName(array) {

  // console.log(array[0])

  let ultimoElementoDoArray = array.length - 1

  // console.log(array[ultimoElementoDoArray])

  // console.log(ultimoElementoDoArray) 
  let primeiroUltimo = array[ultimoElementoDoArray] + ',' + ' ' + array[0]

  return primeiroUltimo

}
concatName(['casa', 'mesa', 'cama', 'banho', 'Bruno', 'Trybe', 'Zaqueu'])

// Desafio 5
function footballPoints(wins, ties) {

  let totalDePontos = (wins * 3) + ties
  return totalDePontos

}

// Desafio 6
function highestCount(arraynumber) {
  // a função recebe um array de numeros e retorna a quantidade de vezes que o maior numero desse array se repete 
  // [9, 3, 1, 4, 9, 8, 7]
  let maiorNumero = arraynumber[0]
  let numberOfRepetitions = 0
  for (let index = 0; index < arraynumber.length; index += 1) {

    if (maiorNumero < arraynumber[index]) {
      maiorNumero = arraynumber[index]

      numberOfRepetitions = 1

    } else if (maiorNumero === arraynumber[index]) {
      numberOfRepetitions += 1
    }

  }
  return numberOfRepetitions
}


// Desafio 7
// Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).

// Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".

// Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".

// O que será verificado:

// Retorne a string 'cat2' caso a função catAndMouse receba os parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato

// Retorne a string 'cat1' caso a função catAndMouse receba os parâmetros onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato

// Retorne a string 'os gatos trombam e o rato foge' caso a função catAndMouse receba os parâmetros onde os gatos estejam na mesma distância do rato


function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = mouse - cat1
  let cat2Distance = mouse - cat2

  if (cat1Distance < 0) {
    cat1Distance = cat1Distance * (-1)
  }

  if (cat2Distance < 0) {
    cat2Distance = cat2Distance * (-1)

  }

  if (cat1Distance === cat2Distance) {
    return "os gatos trombam e o rato foge"
  } else if (cat2Distance < cat1Distance) {
    return 'cat2'
  } else if (cat1Distance < cat2Distance) {
    return 'cat1'

  }
}

// Desafio 8
// Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

// Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
// Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
// Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
// Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].

// O que será verificado:

// Retorne as strings ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'] quando é passado os parâmetros [2, 15, 7, 9, 45] para a função fizzBuzz

// Retorne as strings ['bug!', 'fizz'] quando é passado os parâmetros [7, 9] para a função fizzBuzz

// Retorne as strings ['fizz', 'buzz'] quando é passado os parâmetros [9, 25] para a função fizzBuzz
function fizzBuzz(arraynumber) {
  let arraystring = []
  for (let index = 0; index < arraynumber.length; index += 1) {
    if (arraynumber[index] % 3 === 0 && arraynumber[index] % 5 !== 0) {
      arraystring.push('fizz')

    } else if (arraynumber[index] % 5 === 0 && arraynumber[index] % 3 !== 0) {
      arraystring.push('buzz')

    } else if (arraynumber[index] % 3 === 0 && arraynumber[index] % 5 === 0) {
      arraystring.push('fizzBuzz')
    } else {
      arraystring.push('bug!')
    }
   
  }
  return arraystring
}
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