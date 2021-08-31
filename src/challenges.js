// Desafio 1

  /*
  1 - Crie uma função usando o operador &&

JavaScript possui um operador lógico &&, o qual recebe dois 
valores e retorna true se ambos os valores são verdadeiros, 
e retorna false se algum dos valores não o for.

Considerando isso, implemente na função compareTrue, um código
 que ao receber dois parâmetros booleanos deve:

    Retornar true se ambos os valores forem verdadeiros;
    Retornar false se um ou ambos os parâmetros forem falsos.

Faça a função somente utilizando o operador &&.

O que será verificado:

    Retorne false quando se chamar a função compareTrue com 
    um parâmetro de valor false e outro de valor true

    Retorne false quando se chamar a função compareTrue com 
    dois parâmetros de valor false

    Retorne true quando se chamar a função compareTrue com 
    dois parâmetros de valor true

}*/
function compareTrue(num1, num2) {
  if(num1 === true && num2 === true){
  return true;
  }else {
    return false;
  }
}
//console.log(compareTrue(false, true));

// Desafio 2
/*
2 - Crie uma função que calcule a área de um triângulo
Escreva uma função com o nome calcArea que receba um valor 
de base (chamado base) e outro de altura (chamado height) 
de um triângulo e retorne o cálculo da sua área.

Lembre-se que a área de um triângulo é calculada através da
seguinte fórmula: (base * altura) / 2.

O que será verificado:

Retorne o valor 250 quando a funcão calcArea é chamada com 
o parâmetro base com o valor 10 e o parâmetro height com o 
valor 50

Retorne o valor 5 quando a funcão calcArea é chamada com o 
parâmetro base com o valor 5 e o parâmetro height com o valor 
2 espera-se como resultado 5

Retorne o valor 25.5 quando a funcão calcArea é chamada com 
o parâmetro base com o valor 51 e o parâmetro height com o 
valor 1 espera-se como resultado 25.5

*/

function calcArea(base,height) {
area = (base * height)/2;
return area;
}
//console.log(calcArea(10,50));

// Desafio 3
/*
  Escreva uma função com o nome splitSentence, a qual receberá uma string e 
  retornará uma array de strings separadas por cada espaço na string original.
Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].
O que será verificado:
    Retorne o valor ['go', 'Trybe'] se a função receber a string 'go Trybe'
    Retorne o valor ['vamo', 'que', 'vamo']. se a função receber a string 'vamo que vamo'
    Retorne o valor ['foguete'] se a função receber a string 'foguete'

  */
function splitSentence(string) { 
    return string.split(' ');
}
console.log(splitSentence("go trybe"));
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
