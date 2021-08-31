// Desafio 1
function compareTrue(a,b,resultado) {
  if (a===true && b===true) {
  resultado = true;
  }else{
    resultado = false;
  } 
  return resultado
}
console.log(compareTrue(true,true))

// Desafio 2
function calcArea(base,heigth,result) {
   result = (base*heigth)/2;
   return result
}
/* console.log(calcArea(5,2));   */


// Desafio 3
function splitSentence(str) {
 return str.split(' ');
}
/* console.log(splitSentence("go trybe")); */

// Desafio 4
function concatName(frase) {
  
  let nome1 = '';
  let result= '';
   
   nome1 = frase[frase.length-1];
   result = nome1 + ', ' + frase[0];
  return result;
}
/*   console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])) */
// Desafio 5
function footballPoints(wins,ties) {
   wins = wins * 3;
   ties + '';
  return wins + ties; 
  /* return (wins*3)+ties; */
}
console.log(footballPoints(14,8));

// Desafio 6
function highestCount(numeros) {
for (index = 0; index <= numeros; index += 1){
let maiornumero = 
}
}
/* console.log(highestCount([9, 1, 2, 3, 9, 5, 7])); */

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
