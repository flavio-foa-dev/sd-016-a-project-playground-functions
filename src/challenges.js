// Desafio 1
function compareTrue(number1, number2) {
  // Compara dois valores se ambos são true;
  // Retorna com true se caso ambos sejam true e false para qualquer valor # true
  if (number1 === true && number2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // função recebe valor base(base) e altura(height) de um triângulo
  // retorna o cálculo da sua área
  // fórmula da área de um triângulo (base * altura) / 2
  areaTriangle = (base * height) / 2;
  return areaTriangle
}

// Desafio 3
function splitSentence(stringSplit) {
  // função recebe uma string 
  // retorna uma array de strings separadas por cada espaço na string original.
  let space = ' ';
  let arrayString = stringSplit.split(space);
  return arrayString
}

// Desafio 4
function concatName(stringArray) {
  // função receber uma array de strings
  // retorna uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`
  // independente do tamanho da array
  lastIndex = stringArray.length-1;
  let stringConcat = stringArray[lastIndex]+" "+stringArray[0];
  return stringConcat
}

// Desafio 5
function footballPoints(wins,ties) {
  // função recebe o número de vitórias(chamar `wins`) e o número de empates( chamar `ties`)
  //  retorna a quantidade de pontos que o time marcou em um campeonato.
  spotsTime = (wins*3) + ties;
  return spotsTime
}

// Desafio 6
function highestCount(numbersArray) {
  // função recebe uma array de números
  // retorna a quantidade de vezes que o maior deles se repete.
  // let numbersArray = [0, 0, 0, 1, 1, 1, 1]; //[9, 1, 2, 3, 9, 5, 7] ; //[0, 4, 4, 4, 9, 2, 1]
   let higherAtual  = 0;
   let sumhigherNumber = 0;
   for (let index=0; index <numbersArray.length; index+=1){
     let number1 = numbersArray[index];
     let number2 = numbersArray[index+1];
     if ((number1 > number2) && (number1 > higherAtual)){
       higherAtual = number1;
     }
     if ((number2 > number1) && (number2 > higherAtual)){
       higherAtual = number2;
     }
   }  
   for (let Higherindex=0; Higherindex <numbersArray.length; Higherindex+=1){
     if (numbersArray[Higherindex] === higherAtual) {
        sumhigherNumber = sumhigherNumber + 1
     }
   }  
   return sumhigherNumber
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
