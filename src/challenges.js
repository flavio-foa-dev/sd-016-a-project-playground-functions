// Desafio 1
/**
 * 1 - Crie uma função usando o operador &&
JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são
 verdadeiros, e retorna false se algum dos valores não o for.

Considerando isso, implemente na função compareTrue, 
um código que ao receber dois parâmetros booleanos deve:

Retornar true se ambos os valores forem verdadeiros;
Retornar false se um ou ambos os parâmetros forem falsos.
Faça a função somente utilizando o operador &&.

O que será verificado:

Retorne false quando se chamar a função compareTrue com um parâmetro de valor false e outro de valor true

Retorne false quando se chamar a função compareTrue com dois parâmetros de valor false

Retorne true quando se chamar a função compareTrue com dois parâmetros de valor true
 */
function compareTrue(a, b) {
  if(a === true && b === true){
    return true;
  }else {
    return false;
  }
}


// Desafio 2
/**
 * 2 - Crie uma função que calcule a área de um triângulo
Escreva uma função com o nome calcArea que receba um valor de base (chamado base)
 e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.
Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.
O que será verificado:
Retorne o valor 250 quando a funcão calcArea é chamada 
com o parâmetro base com o valor 10 e o parâmetro height com o valor 50
Retorne o valor 5 quando a funcão calcArea é chamada com o
parâmetro base com o valor 5 e o parâmetro height com o valor 2 espera-se como resultado 5
Retorne o valor 25.5 quando a funcão calcArea é chamada 
com o parâmetro base com o valor 51 e o parâmetro height com o valor 1 espera-se como resultado 25.5
 */
function calcArea(base, height){
  return (base * height)/2
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
