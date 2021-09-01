// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
//Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) 
//de um triângulo e retorne o cálculo da sua área.
//Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2. 
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
//Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.
//Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].
function splitSentence(stringSplit) {
  let shareArray = stringSplit.split(" ");
  return shareArray;
}

// Desafio 4
//Escreva uma função com o nome concatName que, ao receber uma array de strings, 
//retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
//Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], 
//a função deverá retornar Paolillo, Lucas.
function concatName(name1) {
  let namesConcat = name1[name1.length - 1] + ", " + name1[0];
  return namesConcat;

}

// Desafio 5
//Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates 
//(esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.
//Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}
console.log(footballPoints(14, 8));

// Desafio 6
//Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.
//Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, 
//que é a quantidade de vezes que o número 9 (maior número do array) se repete.


function highestCount(numbers) {
  let highNumber = numbers[0];
  let sum = 1;
  for (let index = 1; index < numbers.length; index += 1) {
    if (highNumber < numbers[index] ) {
      highNumber = numbers[index];
      sum = 1;
    } else if
      (highNumber === numbers[index]) {
      sum += 1;
    }
  }
  return sum;
}

//Desafio 7
//Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, 
//e que ambos estão caçando um mesmo rato chamado mouse. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.
//Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, 
//nessa ordem, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro 
//(aquele que estiver mais perto do rato).
//Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".
//Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".
function catAndMouse(mouse, cat1, cat2) {
  let winCat1 = mouse - cat1;
  let winCat2 = mouse - cat2;

  if(winCat1 < 0){
    winCat1 = winCat1 * (-1);
  }else if (winCat2 < 0){
    winCat2 = winCat2 * (-1);
  }

  if(winCat1 === winCat2){
    return "os gatos trombam e o rato foge";
  }else if (winCat1 < winCat2){
    return "cat1";
  }else if (winCat2 < winCat1){
    return "cat2";
  } 
}

//Desafio 8
/*Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].*/
function fizzBuzz(number){
  let arrNewNumber = [];
  for(index = 0; index < number.length; index +=1){
    if(number[index] % 3 === 0 && number[index] % 5 !== 0){
    arrNewNumber.push("fizz");
  }else if(number[index] % 5 === 0 && number[index] % 3 !== 0){
    arrNewNumber.push("buzz");
  }else if(number[index] % 3 === 0 && number[index] % 5 === 0){
    arrNewNumber.push("fizzBuzz");
  }else{
    arrNewNumber.push("bug!")
  }
}
  return arrNewNumber;
}

//Desafio 9
/*Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e
retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!")
código feito com apoio do Brunão que me explicou toda a estrutura do código*/
function encode(frase) {
  let codigo = frase.split("");
  for(let index = 0; index < frase.length; index += 1){
    if(frase[index] === 'a'){
      codigo.splice(index, 1, '1');
    }if(frase[index] === 'e'){
      codigo.splice(index, 1, '2');
    }if(frase[index] === 'i'){
      codigo.splice(index, 1, '3');
    }if(frase[index] === 'o'){
      codigo.splice(index, 1, '4');
    }if(frase[index] === 'u'){
      codigo.splice(index, 1, '5');
    }
  }
  return codigo.join("");
}

function decode(frases) {
  let code = frases.split("");
  for(let index = 0; index < frases.length; index += 1){
    if(frases[index] === '1'){
      code.splice(index, 1, 'a');
    }if(frases[index] === '2'){
      code.splice(index, 1, 'e');
    }if(frases[index] === '3'){
      code.splice(index, 1, 'i');
    }if(frases[index] === '4'){
      code.splice(index, 1, 'o');
    }if(frases[index] === '5'){
      code.splice(index, 1, 'u');
    }
  }
  return code.join("");
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
}