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
function catAndMouse() {
  //seu código aqui
}

//Desafio 8
function fizzBuzz() {
  //seu código aqui
}

//Desafio 9
function encode() {
  //seu código aqui
}
function decode() {
  //seu código aqui
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