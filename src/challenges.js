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
//console.log(splitSentence("go trybe"));


// Desafio 4
/*
4 - Crie uma função que use concatenação de strings

Escreva uma função com o nome concatName que, ao receber uma array de strings, 
retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do
tamanho da array.

Isso quer dizer que, caso o parâmetro passado para concatName seja a 
Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.

O que será verificado:

    Retorne 'Paolillo, Lucas' quando o parâmetro passado na funcão concatName 
    seja ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
    Retorne 'ré, foguete' quando o parâmetro passado na funcão concatName 
    seja ['foguete', 'não', 'tem', 'ré']
    Retorne 'captain, captain' quando o parâmetro passado na funcão concatName 
    seja ['captain', 'my', 'captain']

*/
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));


// Desafio 5
/*
5 - Crie uma função que calcule a quantidade de pontos no futebol
Escreva uma função com o nome footballPoints que receba o número de vitórias 
(esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne 
a quantidade de pontos que o time marcou em um campeonato.

Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
O que será verificado:
Retorne 50 pontos quando o time tenha 14 vitórias e 8 empates
Retorne 5 pontos quando o time tenha 1 vitória e 2 empates
Retorne 0 pontos quando o time tenha 0 vitórias e 0 empates
*/
function footballPoints(wins,ties) {
let victories = 0;
victories = (wins*3)+(ties*1);  
return victories;
}
//console.log(footballPoints(1,2));
//console.log(footballPoints(14,8));

// Desafio 6
/*
6 - Crie uma função que calcule a repetição do maior número
Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes 
que o maior deles se repete.

Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função 
deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.

O que será verificado:
Retorne 2 quando o parâmetro passado na função highestCount seja [9, 1, 2, 3, 9, 5, 7]
Retorne 1 quando o parâmetro passado na função highestCount seja [0, 4, 4, 4, 9, 2, 1]
Retorne 3 quando o parâmetro passado na função highestCount seja [0, 0, 0]
*/
function highestCount(arrayNumber) {
  let cont = 1;
  let hightNumber = arrayNumber[0];
  for (let index = 1; index < arrayNumber.length; index += 1) {
    if (hightNumber < arrayNumber[index]) {
      hightNumber = arrayNumber[index];
      cont = 1;      
    } else if (hightNumber === arrayNumber[index]) {
        cont += 1;
      }
  }
  return cont;  
}
//let num = highestCount([9,1,2,3,9,5,7]);
//let num = highestCount([0,4,4,4,9,2,1]);
//console.log(num);

// Desafio 7
/*
7 - Crie uma função de Caça ao Rato
Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão 
caçando um mesmo rato chamado mouse. Imagine que os animais estão em uma reta, cada um 
em uma posição representada por um número.

Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, 
nessa ordem, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual 
dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).

Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, 
sua função deverá retornar "cat2".

Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam 
e o rato foge".

O que será verificado:

Retorne a string 'cat2' caso a função catAndMouse receba os parâmetros onde gato cat2 esteja a 2 
unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato

Retorne a string 'cat1' caso a função catAndMouse receba os parâmetros onde gato cat1 esteja a 6 
unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato

Retorne a string 'os gatos trombam e o rato foge' caso a função catAndMouse receba os parâmetros 
onde os gatos estejam na mesma distância do rato
*/
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

   
    let distancia1 = Math.abs(cat1 - mouse);
    let distancia2 = Math.abs(cat2 - mouse);
    if (distancia1 > distancia2) {
      return 'cat2';
    }
    if (distancia1 < distancia2) {
      return 'cat1';
    }
    return 'os gatos trombam e o rato foge';  
}
//let frase = catAndMouse(2,3);
//console.log(frase);
// Desafio 8

/*
8 - Crie uma função FizzBuzz
Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].

O que será verificado:

Retorne as strings ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'] quando é passado os parâmetros [2, 15, 7, 9, 45] para a função fizzBuzz

Retorne as strings ['bug!', 'fizz'] quando é passado os parâmetros [7, 9] para a função fizzBuzz

Retorne as strings ['fizz', 'buzz'] quando é passado os parâmetros [9, 25] para a função fizzBuzz
*/


function checkDivisor(num) {
  let frase = '';
  if (num % 3 === 0 && num % 5 === 0) {
    frase = 'fizzBuzz';
  } else if (num % 3 === 0) {
    frase = 'fizz';
  } else if (num % 5 === 0) {
    frase = 'buzz';
  } else {
    frase = 'bug!';
  }
  return frase;
}

function fizzBuzz(arrNumber) {
  for (let index = 0; index < arrNumber.length; index += 1) {
    arrNumber[index] = checkDivisor(arrNumber[index]);
  }
  return arrNumber;
}

function ehVogal(char, str) {
  for (let index = 0; index < str.length; index += 1) {
    if (char === str[index]) {
      return index + 1;
    }
  }
  return false;
}

// Desafio 9
/*
9 - Crie uma função que Codifique e Decodifique
Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como 
parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o 
formato a seguir:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe 
uma string contendo números no lugar de letras minúsculas e retornará uma string com 
vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja 
"h3 th2r2!", o retorno deverá ser "hi there!").

O que será verificado:
Retorne uma string codificada quando a função encode for utilizada
Retorne uma string decodificada quando a função decode for utilizada
*/
function encode(string) {
  let vogal = 'aeiou';
  let novaString = '';
  for (let index = 0; index < string.length; index += 1) {
    let vogalLetra = ehVogal(string[index], vogal);
    if (vogalLetra) {
      novaString += vogalLetra;
    } else {
      novaString += string[index];
    }
  }
  return novaString;
}

function number(char, str) {
  for (let index = 0; index < str.length; index += 1) {
    if (char === str[index]) {
      return str[index - 1];
    }
  }
  return false;
}


function decode(string) {
  let vogal = 'a1e2i3o4u5';
  let novaString = '';
  for (let index = 0; index < string.length; index += 1) {
    let vogalLetra = ehNumber(string[index], vogal);
    if (vogalLetra) {
      novaString += vogalLetra;
    } else {
      novaString += string[index];
    }
  }
  return newStr;

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